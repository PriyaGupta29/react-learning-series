import React, { useState, Suspense, lazy } from "react";
import "./App.css";

// Lazy imports
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function LazyApp() {
    const [activeTab, setActiveTab] = useState(null);

    const renderTab = () => {
        if (activeTab === "about") {
            return (
                <Suspense fallback={<div className="loading">Loading About...</div>}>
                    <About />
                </Suspense>
            );
        }
        if (activeTab === "contact") {
            return (
                <Suspense fallback={<div className="loading">Loading Contact...</div>}>
                    <Contact />
                </Suspense>
            );
        }
        return <div className="loading">👉 Select a tab above</div>;
    };

    return (
        <div className="app">
            <h1 className="title">React Lazy + Suspense 🚀</h1>

            {/* Tabs */}
            <div className="tabs">
                <button
                    onClick={() => setActiveTab("about")}
                    className={activeTab === "about" ? "tab active" : "tab"}
                >
                    About
                </button>
                <button
                    onClick={() => setActiveTab("contact")}
                    className={activeTab === "contact" ? "tab active" : "tab"}
                >
                    Contact
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">{renderTab()}</div>
        </div>
    );
}

export default LazyApp;
