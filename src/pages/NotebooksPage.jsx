import { notebooks } from "../data/notebooks"
import NotebookGrid from "../components/NotebookGrid"
export default function NotebooksPage(){
    return(
        <>
            <NotebookGrid notebooks={notebooks} />
        </>
    )
}