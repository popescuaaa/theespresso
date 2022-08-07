import React from 'react';
import "./Button.css";

interface ButtonProps {
    title: string;
    onClick: () => void;
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}

const Button: React.FC<ButtonProps> = ({ title, onClick, type }) => {
    return (
        <button className={`btn btn-${type}`} onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;