import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-column">
                            <div className="footer-logo">
                                <h2>Bluetick Consultants</h2>
                                <p>Bluetick Consultants LLP</p>
                            </div>
                            <div className="footer-contact">
                                <p>Email: contact@bluetickconsultants.com</p>
                                <div className="footer-links">
                                    <a href="https://www.glassdoor.com/Reviews/Bluetick-Consultants-Reviews-E4556710.htm" target="_blank" rel="noopener noreferrer">Glassdoor Review</a>
                                    <a href="https://www.iso.org/" target="_blank" rel="noopener noreferrer">ISO Certified</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-resources">
                            <h3>RESOURCES</h3>
                            <a href="#">Blogs</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <div className="footer-products">
                            <h3>PRODUCTS</h3>
                            <a href="#">Talk To Code</a>
                            <a href="#">InterviewGPT</a>
                            <a href="#">PrivacyDoc</a>
                            <a href="#">Sales Call Evaluator</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Visit us at <a href="https://www.threads.net/@bluetickconsultants" target="_blank" rel="noopener noreferrer">https://www.threads.net/@bluetickconsultants</a></p>
                    <p>© 2024 Bluetick Consultants LLP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
