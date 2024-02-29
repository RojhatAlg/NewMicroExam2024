import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <header>
                <div className="header-container">
                    <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                        <h1>Oslo Kindergarten</h1>
                    </Link>
                    <nav>
                        <Link to="/login" className="login-button">Login</Link>
                        <Link to="/signup" className="signup-link">Sign Up</Link> {/* Add the sign-up link */}
                    </nav>
                </div>
            </header>
            <main>
                <h2>Welcome to Oslo Kindergarten</h2>
                <p>This is the best place for your child to learn and grow!</p>
            </main>
        </div>
    );
}

export default HomePage;
