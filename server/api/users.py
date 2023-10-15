from flask import Flask, Blueprint
from db import Users, users_table

users_blueprint = Blueprint("users", __name__)

@users_blueprint.route("/users")
def get_all_users():
    return users_table.all()

@users_blueprint.route("/users/<str:id>")
def get_user(id):
    return users_table.search(Users.id == id)
