import React from "react";
import "./login.scss"
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">

                <h2>Login</h2>
                <div className="form-group">
                    <label className="login_labels" htmlFor="login">Login</label>
                    <input className="login_inputs" type="text" id="login" placeholder="F I O" />
                </div>
                <div className="form-group">
                    <label  className="login_labels" htmlFor="password">Parol</label>
                    <input className="login_inputs" type="password" id="password" placeholder="Password" />
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                <Link to="/about">
                <button type="submit"  className="login-button">
                    Kirish
                </button>
                </Link>
                <div className="alternative-login">
                    or continue with
                </div>
                <div className="register">
                    Don't have an account yet? <a href="#">Register for free</a>
                </div>
            </form>
        </div>
    );
};

export default Login;