from flask import Response
from bs4 import BeautifulSoup
import requests


def get_articles():
    """
    This is a sample API method that fetches the news from the Economist website.
    """
    url = "https://www.economist.com/the-world-in-brief"
    response = requests.get(url)
    data = BeautifulSoup(response.text, features="html.parser")

    artciles = []
    for newspiece in data.find_all("p"):
        tags = list(map(lambda e: e.getText(), newspiece.find_all("strong")))
        title = " ".join(tags)
        content = newspiece.getText()
        artciles.append({"title": title, "tags": tags, "content": content})

    page_motto = artciles[0]["content"]
    page_credits = artciles[-1]["content"]
    articles = artciles[1:-1]

    return {"articles": articles, "motto": page_motto, "credits": page_credits}
