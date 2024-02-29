import React, { useState } from 'react';

function SignUpForm({ onSignUp }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                setError('');
                onSignUp(email); // Assuming you want to pass the email of the signed-up user
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to sign up. Please try again.');
            }
        } catch (error) {
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <div>{error}</div>}
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
