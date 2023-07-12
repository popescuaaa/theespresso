// Create a new table named tasks in mongodb
// and populate it with some data

const db = require("./app/models");
const Task = db.tasks;

const populate = async () => {
    // Create a new task
    const task1 = new Task({
        title: "Task 1",
        description: "Description 1",
        status: 1
    });

    // Save the task in the database
    task1.save(task1)
        .then(data => {
            console.log(data);
        }
        );

    // Create a new task
    const task2 = new Task({
        title: "Task 2",
        description: "Description 2",
        status: 0
    });

    // Save the task in the database
    task2.save(task2)
        .then(data => {
            console.log(data);
        }
        );

}

module.exports = populate;
