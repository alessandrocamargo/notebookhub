import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { notebooks } from "../data/notebooks";

export default function NotebookDetailsPage(){
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

    return(
        <>
            <h1 className="text-ink-primary">{notebook.name}</h1>
        </>
    )
}