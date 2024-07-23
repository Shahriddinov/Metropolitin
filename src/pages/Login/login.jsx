import React, { useEffect, useState } from 'react';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/AuthSlice'; // Adjust import based on actual path
import { useNavigate } from 'react-router-dom';
import Spinner from "../../components/Spinner";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { status, error, user } = useSelector((state) => state.LoginSlice);
    const [formData, setFormData] = useState({ passport: '', password: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    useEffect(() => {
        if (status === 'succeeded' && user) {
            setFormData({ passport: '', password: '' }); // Clear input fields
            switch (user.role) {
                case 'admin':
                    navigate('/admin/home');
                    break;
                case 'teacher':
                    navigate('/teacher/about');
                    break;
                case 'student':
                    navigate('/about');
                    break;
                default:
                    // Handle unexpected roles
                    break;
            }
            toast.success('Login successful!', {
                position: "top-center"
            });
        }

        if (status === 'failed' && error) {
            toast.error(error, {
                position: "top-center"
            });
        }
    }, [status, user, error, navigate]);

    return (
        <div className="login-container">
            <ToastContainer />
            {status === 'loading' && <Spinner position="full" />}
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label className="login_labels" htmlFor="login">
                        Login
                    </label>
                    <input
                        className="login_inputs"
                        type="text"
                        name="passport"
                        value={formData.passport}
                        onChange={handleChange}
                        placeholder="Passport"
                        autoComplete="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="login_labels" htmlFor="password">
                        Parol
                    </label>
                    <input
                        className="login_inputs"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        autoComplete="current-password"
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Kirish
                </button>

            </form>
        </div>
    );
};

export default Login;
