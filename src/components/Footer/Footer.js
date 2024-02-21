import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Bluetick Consultants. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
