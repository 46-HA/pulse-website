import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>Pulse</h1>
            <div className="links">
                <a href="#form">Submit</a>
                <a href="https://hackclub.slack.com" target="_blank" rel="noopener noreferrer">Join the Slack</a>
                <Link to="/guide">Spotify API Guide</Link>
                <Link to="/demo">Demo Project</Link>
            </div>
        </nav>
    )
}