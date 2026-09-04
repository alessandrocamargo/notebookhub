import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <header className="bg-surface flex items-center justify-between px-4 py-4">
            <h1 className="text-ink-primary"><Link to="/">Notebookhub</Link></h1>
            <nav>
                <ul className="flex items-center gap-6 text-ink-secondary">
                    <li><Link to="/" className="hover:text-ink-primary transition-colors">Home</Link></li>
                    <li><Link to="/notebooks" className="hover:text-ink-primary transition-colors">Notebooks</Link></li>
                    <li><Link to="/comparar" className="hover:text-ink-primary transition-colors">Comparar</Link></li>
                </ul>
            </nav>
        </header>
    )
}