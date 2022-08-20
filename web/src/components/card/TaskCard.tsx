import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
    title: string;
    description: string;
    dueDate: string;
    priority: "high" | "medium" | "low";
    status: "todo" | "inProgress" | "done";
    id: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    dueDate,
    priority,
    status,
    id
}) => {
    return (
        <div className="card" key={id}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <hr/>
                <p className="card-text">{description}</p>
                <p className="card-text">{dueDate}</p>
                <hr/>
                <span className={"badge" + " badge-" + priority}>{priority}</span>
                {status === "inProgress" ? 
                    <p className="card-status card-status-progress">In Progress</p> :
                    <p className="card-status card-status-other">{status}</p>
                }
            </div>
        </div>
    );
}

export default TaskCard;