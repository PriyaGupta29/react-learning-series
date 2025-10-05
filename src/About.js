export default function About() {
    return (
        <div>
            <h2>📖 About Page</h2>
            <p>
                This is the About section. It loads only when you click the tab thanks
                to <strong>React.lazy</strong> and <strong>Suspense</strong>.
            </p>
        </div>
    );
}
