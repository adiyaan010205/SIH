import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Add custom styling here

const overview = () => {
    return (
        <div>
            {/* Header Section */}
            

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Your Gateway to a Better Career</h2>
                    <p>AI-powered job recommendations, skill assessments, and career development tools all in one platform.</p>
                    <div className="cta-buttons">
                        <Link to="/Register" className="btn btn-primary">Get Started</Link>
                        <Link to="/Login" className="btn btn-secondary">Login</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h3>Why Choose JobConnect?</h3>
                <div className="feature-list">
                    <div className="feature-item">
                        <h4>AI-Powered Job Recommendations</h4>
                        <p>Our platform uses AI to match you with the best job opportunities based on your skills and preferences.</p>
                    </div>
                    <div className="feature-item">
                        <h4>Skill Gap Analysis</h4>
                        <p>Identify your skill gaps and get personalized course recommendations to bridge them.</p>
                    </div>
                    <div className="feature-item">
                        <h4>Resume Wizard</h4>
                        <p>Create a professional resume easily with our AI-powered resume builder.</p>
                    </div>
                </div>
            </section>

            {/* Job Listings Preview Section */}
            <section className="job-preview">
                <h3>Trending Jobs</h3>
                <ul className="job-list">
                    <li>Software Engineer - Google</li>
                    <li>Data Analyst - Amazon</li>
                    <li>UI/UX Designer - Microsoft</li>
                    {/* Additional job listings can be dynamically fetched here */}
                </ul>
              
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>© 2024 Kamyabi. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default overview;
