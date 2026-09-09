import { notebooks } from "../data/notebooks"
import NotebookGrid from "../components/NotebookGrid"
import { useState } from "react"
export default function NotebooksPage(){
    const [filters, setFilters] = useState({search:"", brand:"", category:""});
    // console.log(filters)

    const filteredNotebooks = notebooks.filter((notebook) => notebook.name.toLowerCase().includes(filters.search.toLowerCase())&&
        (filters.brand === "" || notebook.brand === filters.brand)&& 
        (filters.category === "" || notebook.categories.some((category) => category === filters.category))
    )
    const brands = [...new Set(notebooks.map((notebook) => notebook.brand))];
    const categories = [...new Set(notebooks.flatMap((notebook) => notebook.categories))];
    return(
        <div className="space-y-2 px-1 max-w-7xl mx-auto">
            <div className="flex gap-1">
                <input type="text" value={filters.search} onChange={(e) => setFilters({...filters,search:e.target.value})} className="bg-surface border border-border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Digite o que deseja buscar"/>
            <select value={filters.brand} onChange={(e) => setFilters({ ...filters, brand:e.target.value })} className="bg-surface border border-border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Todas as marcas</option>
                {brands.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
            </select>
            <select value={filters.category} onChange={(e) => setFilters({...filters, category:e.target.value})} className="bg-surface border border-border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Todas as categorias</option>
                {categories.map((category) => (<option key={category} value={category}>{category}</option>))}
            </select>
            </div>
            <NotebookGrid notebooks={filteredNotebooks} />
        </div>
    )
}