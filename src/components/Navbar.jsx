export default function Navbar() {
    return (
        <header className="bg-surface flex items-center justify-between px-4 py-4">
            <h1 className="text-ink-primary"><a href="/">Notebookhub</a></h1>
            <nav>
                <ul className="flex items-center gap-6 text-ink-secondary">
                    <li><a href="/" className="hover:text-ink-primary transition-colors">Home</a></li>
                    <li><a href="/notebooks" className="hover:text-ink-primary transition-colors">Notebooks</a></li>
                    <li><a href="/comparar" className="hover:text-ink-primary transition-colors">Comparar</a></li>
                </ul>
            </nav>
        </header>
    )
}