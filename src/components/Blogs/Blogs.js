import React from 'react';
import './Blogs.css';

const BlogsSection = () => {
    return (
        <section className="blogs">
            <div className="container">
                <h2>Explore and enjoy the blogs written by our passionate techies.</h2>
                <div className="blog-item">
                    <h3>Speaking SQL: Turning Natural Language into Database Dialogues</h3>
                    <p>Bridging Language and Data in the Enterprise Sphere...</p>
                    <a href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html">Read More</a>
                </div>
                {/* Add other blog items similarly */}
            </div>
        </section>
    );
}

export default BlogsSection;
