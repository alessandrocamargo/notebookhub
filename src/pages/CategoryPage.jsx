import { useNavigate, useParams } from "react-router-dom";
import { notebooks } from "../data/Notebooks";
import { slugify } from "../services/slug";
import NotebookGrid from "../components/NotebookGrid";
export default function CategoryPage() {
    const { slug } = useParams();
    const filteredNotebooks = notebooks.filter((notebook) =>
        notebook.categories.some(
            (category) => slugify(category) === slug
        )
    );
    const navigate = useNavigate();

    function handleVoltar(){
        navigate(-1)
    }

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <button className="mt-2 mb-2 inline-flex items-center rounded-lg border border-secondary px-2 py-1 font-semibold text-ink-primary transition hover:bg-secondary" onClick={handleVoltar}>← Voltar</button>
            </div>
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-ink-primary mb-3.5">Categoria: {slug}</h1>
                <NotebookGrid notebooks={filteredNotebooks} />
            </div>
        </section>
    )

}