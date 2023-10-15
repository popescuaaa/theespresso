from tinydb import TinyDB, Query
from tinydb.storages import JSONStorage
from tinydb.middlewares import CachingMiddleware
import uuid


class Table:
    def __init__(self, name: str, db: TinyDB) -> None:
        self.table_name = name
        self.table = db.table(name=self.table_name)

    def insert(self, entity: dict) -> list[dict]:
        self.table.insert(entity)
        return self.table.all()
    
    def get_all(self) -> list[dict]:
        return self.table.all()
               
    def __str__(self) -> str:
        return f"Table {self.table_name}"


if __name__ == "__main__":
   
    users_table = db.table("users")
    users_table.insert(
        {
            "name": "Andrei",
            "role": "user",
            "id": uuid.uuid4()
        }
    )
    User = Query()
    print(users_table.search(User.name == "Andrei"))

    tasks_table = db.table("tasks")
    tasks_table.insert(
        {
            "title": "Resolve bugs",
            "description": "Resolve the bugs in prod",
            "user_id": None,
            "id": uuid.uuid4()
        }
    )

    Tasks = Query()
    print(tasks_table.all())
    