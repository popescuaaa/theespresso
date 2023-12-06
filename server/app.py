import os
from flask import Flask, request
from dotenv import load_dotenv
from api import get_articles
from flask_caching import Cache

""" Load .env file """
load_dotenv(dotenv_path=".env", verbose=True)

""" Create Flask app """
app = Flask(__name__)

""" Add config parameters to app """
app.config.from_object("config.Config")

""" Initialize cache """
cache = Cache(app)


@app.route("/")
def health_check():
    return {"message": "Healthy"}


@app.route("/api/articles", methods=["POST"])
@cache.cached(timeout=60, query_string=True)
def articles():
    return get_articles()


""" Run Flask app """
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=os.environ["PORT"])
