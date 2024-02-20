import React from 'react';
import './LetsConnect.css';

const LetsConnectSection = () => {
    return (
        <section className="lets-connect">
            <div className="container">
                <h2>Let’s connect</h2>
                <form>
                    <input type="text" name="full-name" placeholder="Full Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="tel" name="contact-number" placeholder="Contact Number" />
                    <input type="text" name="subject" placeholder="Subject" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit" className="btn">Submit form</button>
                </form>
            </div>
        </section>
    );
}

export default LetsConnectSection;
