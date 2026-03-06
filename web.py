"""
Personal Portfolio - Yixing Li (Vera)
Flask app serving the main site and static assets.
"""
import os
from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder="static", template_folder="templates")
ROOT = os.path.dirname(os.path.abspath(__file__))


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/photo/<path:filename>")
def photo(filename):
    """Serve images from project root photo/ folder."""
    return send_from_directory(os.path.join(ROOT, "photo"), filename)


@app.route("/cusp/<path:filename>")
def cusp(filename):
    """Serve files from project root CUSP/ folder."""
    return send_from_directory(os.path.join(ROOT, "CUSP"), filename)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
