import NotebookCard from "./NotebookCard"
export default function NotebookGrid ({notebooks}){
    return(
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                notebooks.map((notebook) => ( 
                    <NotebookCard key={notebook.id} notebook={notebook} />
                ))
            }
        </div>
    )
}