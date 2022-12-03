import React, { useState } from "react";
import Button from "../button/Button";
import "./LoginForm.css";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}


const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleSubmit = () => {
        /* Validate emil and password */
        if (email.length > 0 && password.length > 0) {
            onSubmit(email, password);
        }
    }

    return (
        <form>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                <small className="form-text text-muted">Don't worry. We have strong security for your email.</small>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <div className="horizontal-divider" />
                <Button title="Login" type="secondary" onClick={handleSubmit} />
            </div>
        </form>
    )

}


export default LoginForm;