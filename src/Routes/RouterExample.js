import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
    return <div className="page"><h2>🏠 Welcome to Home</h2><p>This is the landing page of our app.</p></div>;
}

function About() {
    return <div className="page"><h2>ℹ️ About Page</h2><p>Here we share details about our project.</p></div>;
}

function Contact() {
    return <div className="page"><h2>📞 Contact Us</h2><p>Get in touch with us through this page.</p></div>;
}

function NotFound() {
    return <div className="page"><h2>❌ 404 - Page Not Found</h2><p>Oops! The page you’re looking for doesn’t exist.</p></div>;
}

function App() {
    return (
        <Router>
            <div className="app">
                <header className="navbar">
                    <h1 className="logo">React Routers🚀</h1>
                    <nav>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </nav>
                </header>

                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <p>© 2025 MyReactApp. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
