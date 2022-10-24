import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {

    const adminUser = {
        user: "Admin",
        password: 12345
    }

    const [user, setUser] = useState({ user: "" });
    const [error, setError] = useState("");


    const Login = details => {

        if (details.user == adminUser.user && details.password == adminUser.password) {

            setUser({
                user: details.user
            });
            localStorage.setItem('login', true);
        } else {
            setError("Incorrect username or password");
            localStorage.setItem('login', false);
        }
    }

    const Logout = () => {
        setUser({ user: "" });
        localStorage.removeItem('login'); // || localStorage.setItem('login', false)
    }

    return (
        <div >
            {(user.user !== "") ? (
                <div>
                    <Redirect to="/profile"></Redirect>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />        // beruma error kam login form
            )}
        </div>
    );
}

export default LoginPage;