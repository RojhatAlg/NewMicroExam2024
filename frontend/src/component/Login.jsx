// LoginForm.js

import React, { useState } from 'react';
import './Login.css'; // Import CSS file

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send a POST request to the login endpoint with email and password
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                // If the response is successful, call the onLogin function
                // This function should handle setting up the user session or token
                onLogin(email);
                setError('');
            } else {
                // If the response is not successful, display an error message
                setError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            // If an error occurs during the fetch operation, display an error message
            setError('Failed to log in. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
