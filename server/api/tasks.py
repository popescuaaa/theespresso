from flask import request, Blueprint
from db import Tasks, tasks_table

tasks_blueprint = Blueprint("tasks", __name__, url_prefix="/tasks")

@tasks_blueprint.route("/", methods=["GET"])
def get_all_tasks():
    return tasks_table.all()

@tasks_blueprint.route("/<id>", methods=["GET"])
def get_user(id: str):
    return tasks_table.search(Tasks.id == id)

@tasks_blueprint.route("/<user_id>", methods=["GET"])
def get_user_tasks(user_id: str):
    return tasks_table.search(Tasks.user_id == user_id)

@tasks_blueprint.route("/assign", methods=["POST"])
def assign_task_to_user():
    request_data = request.get_json()
    
    if "user_id" in request_data and "task_id" in request_data:
        tasks = tasks_table.search(Tasks.id == request_data["task_id"])
        if len(tasks):
            task = tasks[0]
            tasks_table.update({"user_id": request_data["user_id"]}, Tasks.id == task.id)

    return tasks_table.all()

