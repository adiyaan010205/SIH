import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            console.log('Login successful:', res.data);
            // Redirect to dashboard on success
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/Login" className="btn btn-secondary">Login</Link>
            </form>
        </div>
    );
}

export default Login;