from tinydb import TinyDB, Query
from tinydb.storages import JSONStorage
from tinydb.middlewares import CachingMiddleware
import uuid

db = TinyDB("./db.json", storage=CachingMiddleware(JSONStorage))

users_table = db.table("users")
tasks_table = db.table("tasks")

Users = Query()
Tasks = Query()

def populate() -> None:
    users_table.insert({"name": "Andrei", "role": "user", "id": uuid.uuid4()})

    tasks_table.insert(
        {
            "title": "Resolve bugs",
            "description": "Resolve the bugs in prod",
            "user_id": None,
            "id": uuid.uuid4(),
        }
    )
