import { notebooks } from "../data/notebooks"
import NotebookGrid from "../components/NotebookGrid"
import { useState } from "react"
export default function NotebooksPage(){
    const [searchTerm, setSearchTerm] = useState("");

    const filteredNotebooks = notebooks.filter((notebook) => notebook.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return(
        <div className="space-y-2 max-w-7xl mx-auto">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-surface border border-border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Digite o que deseja buscar"/>
            <NotebookGrid notebooks={filteredNotebooks} />
        </div>
    )
}