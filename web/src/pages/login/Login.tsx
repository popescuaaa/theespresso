import React from "react";
import "./Login.css";
import login from "../../assets/background/login.jpg";
import LoginForm from "../../components/form/LoginForm";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const date = new Date();
    const dateToLocal = date.toLocaleDateString();
    const navigator = useNavigate();

    const onSubmit = (email: string, password: string) => {
        console.log(email, password);
        navigator("/home");
    }

    return (
        <>
            <div className="container">
                <div>
                    <div className="row">
                        <h1> Welcome back! </h1>
                    </div>
                    <div className="row">
                        <LoginForm onSubmit={onSubmit} />
                    </div>
                </div>
                <div>
                    <div className="row">
                        <img src={login} alt="Avatar" className="avatar" />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>All rights reserved. @popescuaaa {dateToLocal}</p>
            </footer>
        </>
    );
}

export default Login;