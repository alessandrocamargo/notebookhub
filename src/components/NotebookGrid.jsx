import NotebookCard from "./NotebookCard"
import EmptyState from "./EmptyState"
export default function NotebookGrid ({notebooks}){
    if (notebooks.length === 0){
        return(
            <div className="py-8 text-ink-secondary text-center">
                <EmptyState message="Nenhum notebook encontrado com esses filtros" />
            </div>
            
        )
    }
    return(
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                notebooks.map((notebook) => ( 
                    <NotebookCard key={notebook.id} notebook={notebook} />
                ))
            }
        </div>
    )
}