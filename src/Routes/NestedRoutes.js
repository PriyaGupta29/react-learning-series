import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import "./App.css";

// Pages
function Home() {
    return (
        <div className="page">
            <h2>🏠 Home Page</h2>
            <p>Welcome to the landing page of our app.</p>
        </div>
    );
}

function About() {
    return (
        <div className="page">
            <h2>ℹ️ About Section</h2>
            <p>Select a sub-page below:</p>

            <nav className="sub-nav">
                <Link to="team" className="sub-link">

                    Our Team
                </Link>
                <Link to="company" className="sub-link">
                    Our Company
                </Link>
            </nav>

            {/* This is where nested child routes render */}
            <Outlet />
        </div>
    );
}

function Team() {
    return (
        <div className="sub-page">
            <h3>👩‍💻 Our Team</h3>
            <p>Meet our awesome developers and designers.</p>
        </div>
    );
}

function Company() {
    return (
        <div className="sub-page">
            <h3>🏢 Our Company</h3>
            <p>We are a global software solutions provider.</p>
        </div>
    );
}

function Contact() {
    return (
        <div className="page">
            <h2>📞 Contact Us</h2>
            <p>Feel free to reach out anytime.</p>
        </div>
    );
}

function NotFound() {
    return (
        <div className="page">
            <h2>❌ 404 - Page Not Found</h2>
            <p>Oops! This route doesn’t exist.</p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="app">
                {/* Navbar */}
                <header className="navbar">
                    <h1 className="logo">MyReactApp 🚀</h1>
                    <nav>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </nav>
                </header>

                {/* Main content area */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        {/* Nested Routes */}
                        <Route path="/about" element={<About />}>
                            <Route path="team" element={<Team />} />
                            <Route path="company" element={<Company />} />
                        </Route>

                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="footer">
                    <p>© 2025 MyReactApp. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
