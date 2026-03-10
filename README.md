# Yixing Li (Vera) — Personal Portfolio

Personal portfolio website for Yixing Li (Vera), an Urban Data Science researcher. The site is a static single-page application that can be served directly via GitHub Pages or locally through a lightweight Flask development server.

---

## Project Structure

```
test_openclaw/
├── index.html          # Main single-page portfolio (HTML + inline CSS/JS)
├── web.py              # Flask dev server (optional, for local use)
├── requirements.txt    # Python dependencies (Flask only)
├── static/
│   └── js/             # JavaScript assets
├── photo/              # Photography / image assets
├── CUSP/               # CUSP project files
└── .github/
    └── workflows/      # GitHub Actions CI/CD workflows
```

---

## Getting Started

### Option 1 — Open directly in a browser

Because the portfolio is a self-contained static site, you can simply open `index.html` in any modern browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2 — Run the Flask dev server

The `web.py` server correctly routes asset directories (`/photo/`, `/CUSP/`) that a plain file-open may not resolve.

**Prerequisites:** Python 3.9+

1. Create and activate a virtual environment:

   ```bash
   python -m venv venv

   # Windows (PowerShell)
   .\venv\Scripts\Activate.ps1

   # macOS / Linux
   source venv/bin/activate
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the server:

   ```bash
   python web.py
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## Deployment

The `index.html` file in the project root is automatically served by **GitHub Pages** from the `main` branch. Any push to `main` will update the live site with no additional steps required.

Live site: `https://<username>.github.io/<repo-name>/`

---

## Environment Variables

The Flask dev server has no required environment variables. The only dependency is:

| Variable | Default | Description |
|----------|---------|-------------|
| `FLASK_DEBUG` | `False` | Set to `1` to enable Flask debug mode |

```bash
# Example (PowerShell)
$env:FLASK_DEBUG = "1"
python web.py
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (single file) |
| Styling | CSS3 (inline, CSS custom properties) |
| Fonts | Google Fonts — Cormorant Garant, DM Sans, JetBrains Mono |
| Dev server | Flask 3.x (Python) |
| Hosting | GitHub Pages |

---

## Future Steps

- [ ] Add a GitHub Actions workflow (`.github/workflows/`) for automated link checking or deployment validation
- [ ] Extract inline CSS/JS into `static/` files as the site grows
- [ ] Add a `Dockerfile` if a more production-grade server is needed (e.g., Gunicorn + Nginx)
