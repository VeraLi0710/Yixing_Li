"""Cut the white paper backing off the pixel-art desk stickers.

The three source renders share one composition, so the frames are cropped with a
single shared bounding box — otherwise swapping frames on hover/blink would make
the character jump by a few pixels.

Usage: python tools/make_sticker_frames.py
Outputs: photo/desk-idle.webp, photo/desk-blink.webp, photo/desk-wave.webp
"""

from collections import deque
import os

import numpy as np
from PIL import Image

SRC_DIR = os.path.join(
    os.path.expanduser("~"),
    ".cursor", "projects", "e-test-test-openclaw", "assets",
)
PREFIX = ("c__Users_25716_AppData_Roaming_Cursor_User_workspaceStorage_"
          "empty-window_images_image-")
FRAMES = [
    ("idle", PREFIX + "b5ae2e83-6272-497e-a3ef-e247672abafc.png"),
    ("blink", PREFIX + "696f3048-8f70-4ef0-9696-af138d4e1e0c.png"),
    ("wave", PREFIX + "af1882b9-2643-42e0-863d-fbbdaf6e77d8.png"),
]
OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "photo")

# Paper backing sits at 248-252; the die-cut drop shadow ramps down to ~190.
FILL_LUM = 182          # flood through anything this bright and this grey
FILL_SAT = 34
FEATHER_HI = 182        # frontier pixels ramp from fully transparent here...
FEATHER_LO = 138        # ...to fully opaque here
FEATHER_SAT = 46
PAD = 2                 # transparent breathing room around the crop
LEAK_LIMIT = 0.26       # flood should stay near the 0.19 paper share


def flood_from_border(passable):
    """4-connected fill seeded from every passable pixel on the image border."""
    h, w = passable.shape
    filled = np.zeros((h, w), dtype=bool)
    queue = deque()

    def seed(y, x):
        if passable[y, x] and not filled[y, x]:
            filled[y, x] = True
            queue.append((y, x))

    for x in range(w):
        seed(0, x)
        seed(h - 1, x)
    for y in range(h):
        seed(y, 0)
        seed(y, w - 1)

    while queue:
        y, x = queue.popleft()
        if y > 0:
            seed(y - 1, x)
        if y < h - 1:
            seed(y + 1, x)
        if x > 0:
            seed(y, x - 1)
        if x < w - 1:
            seed(y, x + 1)
    return filled


def neighbours_of(mask):
    out = np.zeros_like(mask)
    out[:-1, :] |= mask[1:, :]
    out[1:, :] |= mask[:-1, :]
    out[:, :-1] |= mask[:, 1:]
    out[:, 1:] |= mask[:, :-1]
    return out & ~mask


def prune_islands(alpha, min_area=60):
    """Drop specks of the white outline that survived as detached blobs."""
    opaque = alpha > 0.35
    h, w = opaque.shape
    seen = np.zeros((h, w), dtype=bool)
    dropped = 0
    for sy in range(h):
        for sx in range(w):
            if not opaque[sy, sx] or seen[sy, sx]:
                continue
            blob = []
            queue = deque([(sy, sx)])
            seen[sy, sx] = True
            while queue:
                y, x = queue.popleft()
                blob.append((y, x))
                for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                    if 0 <= ny < h and 0 <= nx < w and opaque[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((ny, nx))
            if len(blob) < min_area:
                for y, x in blob:
                    alpha[y, x] = 0.0
                dropped += len(blob)
    return dropped


def cut_out(rgb):
    a = rgb.astype(np.int16)
    lum = a.max(axis=2)
    sat = lum - a.min(axis=2)

    background = flood_from_border((lum >= FILL_LUM) & (sat <= FILL_SAT))
    alpha = np.where(background, 0.0, 1.0)

    # Soften the one-pixel grey rim left where the white outline met the artwork.
    frontier = neighbours_of(background)
    ramp = frontier & (sat <= FEATHER_SAT) & (lum > FEATHER_LO)
    keep = np.clip((FEATHER_HI - lum) / float(FEATHER_HI - FEATHER_LO), 0.0, 1.0)
    alpha = np.where(ramp, np.minimum(alpha, keep), alpha)
    dropped = prune_islands(alpha)

    return alpha, background.mean(), dropped


def main():
    cutouts = []
    for name, filename in FRAMES:
        path = os.path.join(SRC_DIR, filename)
        rgb = np.asarray(Image.open(path).convert("RGB"))
        alpha, share, dropped = cut_out(rgb)
        flag = "  <-- LEAK?" if share > LEAK_LIMIT else ""
        print("%-5s %s  background removed: %.1f%%  specks pruned: %d%s"
              % (name, rgb.shape[1::-1], share * 100, dropped, flag))
        cutouts.append((name, rgb, alpha))

    solid = np.zeros(cutouts[0][2].shape, dtype=bool)
    for _, _, alpha in cutouts:
        solid |= alpha > 0.35
    ys, xs = np.nonzero(solid)
    h, w = solid.shape
    box = (
        max(0, xs.min() - PAD), max(0, ys.min() - PAD),
        min(w, xs.max() + 1 + PAD), min(h, ys.max() + 1 + PAD),
    )
    print("shared crop box:", box, "->", (box[2] - box[0], box[3] - box[1]))

    for name, rgb, alpha in cutouts:
        rgba = np.dstack([rgb, np.round(alpha * 255).astype(np.uint8)])
        out = Image.fromarray(rgba, "RGBA").crop(box)
        dest = os.path.join(OUT_DIR, "desk-%s.webp" % name)
        out.save(dest, quality=92, method=6)
        print("wrote %s  %s  %.0f KB" % (dest, out.size, os.path.getsize(dest) / 1024))

    # QA sheet: frames over the site background so leftover white fringe shows up.
    pad = 18
    frame_w, frame_h = box[2] - box[0], box[3] - box[1]
    sheet = Image.new("RGB", (frame_w * 3 + pad * 4, frame_h + pad * 2), (10, 10, 18))
    for i, (name, rgb, alpha) in enumerate(cutouts):
        rgba = np.dstack([rgb, np.round(alpha * 255).astype(np.uint8)])
        frame = Image.fromarray(rgba, "RGBA").crop(box)
        sheet.paste(frame, (pad + i * (frame_w + pad), pad), frame)
    qa = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_qa-sticker-frames.png")
    sheet.save(qa)
    print("wrote QA sheet", qa, sheet.size)

    # Edge zoom: 4x nearest-neighbour crops along the silhouette, so any leftover
    # white or grey rim is impossible to miss.
    rgb, alpha = cutouts[0][1], cutouts[0][2]
    idle = Image.fromarray(np.dstack([rgb, np.round(alpha * 255).astype(np.uint8)]), "RGBA").crop(box)
    win, zoom = 110, 4
    spots = [
        ("top", (frame_w // 2 - win // 2, 0)),
        ("left", (0, frame_h // 2 - win // 2)),
        ("right", (frame_w - win, int(frame_h * 0.42))),
        ("bottom", (frame_w // 2 - win // 2, frame_h - win)),
    ]
    zoom_sheet = Image.new("RGB", (len(spots) * (win * zoom + pad) + pad, win * zoom + pad * 2), (10, 10, 18))
    for i, (_, (x, y)) in enumerate(spots):
        crop = idle.crop((x, y, x + win, y + win)).resize((win * zoom, win * zoom), Image.NEAREST)
        zoom_sheet.paste(crop, (pad + i * (win * zoom + pad), pad), crop)
    qa_zoom = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_qa-sticker-edges.png")
    zoom_sheet.save(qa_zoom)
    print("wrote QA edge zoom", qa_zoom, zoom_sheet.size)


if __name__ == "__main__":
    main()
