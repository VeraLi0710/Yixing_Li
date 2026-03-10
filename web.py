"""
Personal Portfolio - Yixing Li (Vera)
Flask app serving the main site and static assets.
index.html lives in the project root (also served by GitHub Pages).
"""
import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="static")
ROOT = os.path.dirname(os.path.abspath(__file__))


@app.route("/")
def index():
    return send_from_directory(ROOT, "index.html")


@app.route("/photo/<path:filename>")
def photo(filename):
    return send_from_directory(os.path.join(ROOT, "photo"), filename)


@app.route("/CUSP/<path:filename>")
def cusp(filename):
    return send_from_directory(os.path.join(ROOT, "CUSP"), filename)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
