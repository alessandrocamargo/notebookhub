import { Link } from "react-router-dom";
import {Check, X} from 'lucide-react'
import { useParams } from "react-router-dom";
import { notebooks } from "../data/notebooks";

export default function NotebookDetailsPage() {
    const { id } = useParams();
    const notebookId = Number(id);
    const notebook = notebooks.find((notebook) => notebook.id === notebookId)

    if (!notebook) {
        return (
            <>
                <h1>Notebook não encontrado</h1>
                <Link to="/" className="text-primary hover:text-ink-primary transition-colors">Home</Link>
            </>
        )
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
                <div>
                    <img src={notebook.image} alt={notebook.name} className="w-72 h-72 object-cover" />
                </div>
                <div className="font-semibold text-ink-secondary text-base p-4 space-y-2">
                    <h1 className="font-bold text-ink-primary text-4xl">{notebook.name}</h1>
                    <p>Marca: {notebook.brand}</p>
                    <p>Avaliação: {notebook.rating}</p>
                    <p className="font-bold">Preço: {`R$ ${notebook.price}`}</p>
                </div>
            </div>
            <div className="font-semibold text-ink-secondary text-base p-4 space-y-2">
                <p className="text-ink-primary text-3xl">{notebook.description}</p>
                <h2 className="text-ink-primary text-2xl">Especificações Técnicas</h2>
                <p>Processador: {notebook.processor}</p>
                <p>Memoria RAM: {notebook.ram}</p>
                <p>Armazenamento: {`${notebook.storage} ${notebook.storageType}`}</p>
                <p>Placa de Video: {notebook.gpu}</p>
                <p>Tela: {notebook.screen}</p>
                <p>Sistema Operacional: {notebook.operatingSystem}</p>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="font-semibold text-success text-base p-4 space-y-2">
                    <h2 className="text-ink-primary text-2xl">Prós</h2>
                    <ul>
                        {notebook.pros.map((pro, index) =>(
                            <li key={index} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-success shrink-0" />
                                    <span>
                                        {pro}
                                    </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="font-semibold text-error text-base p-4 space-y-2">
                    <h2 className="text-ink-primary text-2xl">Contras</h2>
                    <ul>
                        {notebook.cons.map((con, index) =>(
                            <li key={index} className="flex items-center gap-2">
                                <X className="w-4 h-4 text-error shrink-0" />
                                    <span>
                                        {con}
                                    </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}