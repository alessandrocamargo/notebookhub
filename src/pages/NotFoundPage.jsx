import { Link } from "react-router-dom"
export default function NotFoundPage(){
    return (
        <>
            <h1>404 - Página não encontrada</h1>
            <Link to="/" className="text-primary hover:text-ink-primary transition-colors">Home</Link>
        </>
    )
}