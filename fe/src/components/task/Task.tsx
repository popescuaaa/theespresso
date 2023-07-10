import React from "react";

export interface TaskProps {
    title: string;
    description: string;
    status: string;
}

const Task: React.FC<TaskProps> = ({ title, description, status }) => {
    return (
        <div className="task">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{status}</p>
        </div>
    );
}

export default Task;