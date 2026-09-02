import NotebookCard from "./NotebookCard"
export default function NotebookGrid ({notebooks}){
    return(
        <div>
            {
                notebooks.map((notebook) => ( 
                    <NotebookCard key={notebook.id} notebook={notebook} />
                ))
            }
        </div>
    )
}