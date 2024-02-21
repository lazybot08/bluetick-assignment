import React from 'react';
import './LetsConnect.css';

const LetsConnectSection = () => {
    return (
        <section className="lets-connect">
            <div className="container">
                <h2>Let’s Connect</h2>
                <p className="connect-message">Contact our support team or make an appointment with our experts.</p>
                <form>
                    <input type="text" name="full-name" placeholder="Full Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="tel" name="contact-number" placeholder="Contact Number" />
                    <input type="text" name="subject" placeholder="Subject" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default LetsConnectSection;
