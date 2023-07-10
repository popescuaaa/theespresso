import React from "react";
import "./Dashboard.css";
import Header from "../../components/header/Header";
import Task, { TaskProps } from "../../components/task/Task";
import tasks from "../../utils/tasks";

const Dashboard: React.FC = () => {
    const tasksList = tasks;

    return (
        <div className="dashboard">
            <Header title="Dashboard" />
            <div className="content">
                <div className="tasks">
                    {tasksList.map((task: TaskProps) => (
                        <Task
                            title={task.title}
                            description={task.description}
                            status={task.status}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;