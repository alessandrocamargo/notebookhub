import { Link } from "react-router-dom"
import { useComparison } from '../context/ComparisonContext'
export default function NotebookCard({ notebook }) {
    const { selectedForComparison, toggleComparison } = useComparison()
    const isSelected = selectedForComparison.some((item) => item.id === notebook.id)
    return (
        <div className="bg-surface rounded-lg overflow-hidden">
            <img src={notebook.image} alt={notebook.name} className="w-full h-64 object-cover" />
            <div className="p-4 space-y-2 text-center">
                <h3 className="font-bold truncate text-ink-primary">{notebook.name}</h3>
                <div className="font-semibold text-ink-secondary">
                    <p>Marca: {notebook.brand}</p>
                    <p>Memória RAM: {notebook.ram}</p>
                    <p>Classificação: {notebook.rating}</p>
                    <p>Bom para: {notebook.categories.join(" | ")}</p>
                </div>
                <p className="font-bold">{`R$ ${notebook.price}`}</p>
                <Link to={`/notebooks/${notebook.id}`} className="text-primary">Ver mais detalhes</Link>
                <button onClick={() => toggleComparison(notebook)}>
                    {isSelected ? "Remover da comparação" : "Comparar"}
                </button>
            </div>
        </div>
    )
}