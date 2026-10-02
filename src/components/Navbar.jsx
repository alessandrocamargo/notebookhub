import { Link } from "react-router-dom"
import { useState } from "react"
import { X, Menu } from "lucide-react"
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="bg-surface flex flex-wrap items-center justify-between px-4 py-4">
            <h1 className="text-ink-primary"><Link to="/">Notebookhub</Link></h1>
            <Link to="/recomendacao" className="rounded-full border bg-secondary px-4 py-2 text-ink-primary transition hover:bg-primary hover:text-white">
                Me ajude a escolher
            </Link>
            {/*Botão Hamburguer - só aparece no mobile*/}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Links - visiveis sempre no desk, condicionalmente no mobile*/}
            <nav className={`${isMenuOpen ? "block w-full" : "hidden"} md:block`}>
                <ul className={`flex ${isMenuOpen ? "flex-col gap-1" : "gap-6"} text-ink-secondary`}>
                    <li><Link to="/" className="hover:text-ink-primary transition-colors">Home</Link></li>
                    <li><Link to="/notebooks" className="hover:text-ink-primary transition-colors">Notebooks</Link></li>
                    <li><Link to="/comparar" className="hover:text-ink-primary transition-colors">Comparar</Link></li>
                </ul>
            </nav>
        </header>
    )
}