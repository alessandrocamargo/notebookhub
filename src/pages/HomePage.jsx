import { notebooks } from "../data/notebooks"
import { Link } from "react-router-dom";
import { slugify } from "../services/slug";
export default function HomePage() {
    const todasCategorias = notebooks.flatMap((notebook) => notebook.categories);
    const categoriasUnicas = [...new Set(todasCategorias)];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2">
            {categoriasUnicas.map((categoria) => (
                <Link key={categoria} to={`/categoria/${slugify(categoria)}`} className="rounded-full border px-4 py-2 hover:text-primary transition-colors">
                    {categoria}
                </Link>
            ))}
        </div>
        </div>
    )
}