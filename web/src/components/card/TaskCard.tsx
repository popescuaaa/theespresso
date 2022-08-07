import React from "react";

interface TaskCardProps {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{dueDate}</p>
                <p className="card-text">{priority}</p>
                <p className="card-text">{status}</p>
            </div>
        </div>
    );
}

export default TaskCard;