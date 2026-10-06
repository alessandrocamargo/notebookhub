import { notebooks } from "../data/Notebooks"
import { Link } from "react-router-dom";
import { slugify } from "../services/slug";
export default function HomePage() {
    const todasCategorias = notebooks.flatMap((notebook) => notebook.categories);
    const categoriasUnicas = [...new Set(todasCategorias)];

    return (
        <div className="max-w-7xl mx-auto">
            <section className="py-16 text-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-bold text-ink-primary">
                            Encontre o notebook certo para você
                        </h1>

                        <p className="mt-4 text-lg text-ink-secondary">
                            Descubra qual notebook combina com suas necessidades, seu uso e seu orçamento.
                        </p>

                        <Link to="/recomendacao" className="mt-8 inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-ink-primary">
                            Clique aqui e descubra
                        </Link>
                    </div>
            </section>
            <section className="flex flex-col text-center">
                <div className="mb-5">
                    <h2 className="text-4xl text-ink-primary">Ou você pode navegar pelas Categorias abaixo</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categoriasUnicas.map((categoria) => (
                        <Link key={categoria} to={`/categoria/${slugify(categoria)}`} className="rounded-full border px-4 py-2 hover:text-primary transition-colors">
                            {categoria}
                        </Link>
                    ))}
                </div>
            </section>
                
        </div>

    )
}