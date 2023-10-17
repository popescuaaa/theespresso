import os
from flask import Flask
from api import users_blueprint, tasks_blueprint
from db import populate

""" Create Flask app """
app = Flask(__name__)
app.register_blueprint(users_blueprint)
app.register_blueprint(tasks_blueprint)

""" Populate database """
populate()

@app.route("/")
def health_check():
    return {"message": "Healthy"}


""" Run Flask app """
if __name__ == "__main__":
    port = os.getenv("PORT", "5000")
    host = os.getenv("HOST", "0.0.0.0")
    debug = os.getenv("DEBUG", False)

    app.run(debug=debug, host=host, port=port)
