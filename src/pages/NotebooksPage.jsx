import { notebooks } from "../data/notebooks"
import NotebookGrid from "../components/NotebookGrid"
import { filterNotebooks } from "../services/filters";
import { sortNotebooks } from "../services/sort";
import FilterSelect from "../components/FilterSelect";
import { useState } from "react"
export default function NotebooksPage() {
    const [filters, setFilters] = useState({ search: "", brand: "", category: "", maxPrice: "", minRam: "", minStorage: "", gpu: "", minRating: "" });
    const [sortBy, setSortBy] = useState("recommended")
    const filteredNotebooks = filterNotebooks(notebooks, filters);
    const brands = [...new Set(notebooks.map((notebook) => notebook.brand))];
    const categories = [...new Set(notebooks.flatMap((notebook) => notebook.categories))];
    const gpuBrands = [...new Set(notebooks.map((notebook) => notebook.gpu.split(" ")[0]))]
    const sortOptions = [
        { value: "recommended", label: "Sem ordenação" },
        { value: "price-asc", label: "Menor preço" },
        { value: "price-desc", label: "Maior preço" },
        { value: "rating-desc", label: "Melhor avaliação" }
    ];
    const sortNotebook = sortNotebooks(filteredNotebooks,sortBy)
    return (
        <div className="space-y-3 px-1 max-w-7xl mx-auto">
            <input type="text" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} className="w-full bg-surface border border-border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Digite o que deseja buscar" />
            <div className="flex flex-wrap gap-2">    
                <FilterSelect
                    value={filters.brand}
                    onChange={(value) => setFilters({ ...filters, brand: value })}
                    options={[
                        { value: "", label: "Todas as marcas" },
                        ...brands.map((brand) => ({
                            value: brand,
                            label: brand,
                        })),
                    ]}
                />
                <FilterSelect
                    value={filters.category}
                    onChange={(value) => setFilters({ ...filters, category: value })}
                    options={[
                        { value: "", label: "Todas as categorias" },
                        ...categories.map((category) => ({
                            value: category,
                            label: category,
                        })),
                    ]}
                />
                <FilterSelect
                    value={filters.maxPrice}
                    onChange={(value) => setFilters({ ...filters, maxPrice: value })}
                    options={[
                        { value: "", label: "Qualquer Preço" },
                        { value: "3000", label: "Até R$ 3.000" },
                        { value: "5000", label: "Até R$ 5.000" },
                        { value: "7000", label: "Até R$ 7.000" },
                    ]}
                />
                <FilterSelect
                    value={filters.minRam}
                    onChange={(value) => setFilters({ ...filters, minRam: value })}
                    options={[
                        { value: "", label: "Qualquer RAM" },
                        { value: "8", label: "8GB ou mais" },
                        { value: "16", label: "16GB ou mais" },
                        { value: "32", label: "32GB ou mais" },
                    ]}
                />
                <FilterSelect
                    value={filters.minStorage}
                    onChange={(value) => setFilters({ ...filters, minStorage: value })}
                    options={[
                        { value: "", label: "Qualquer Armazenamento" },
                        { value: "256", label: "256GB ou mais" },
                        { value: "512", label: "512GB ou mais" },
                        { value: "1024", label: "1024GB ou mais" },
                    ]}
                />
                <FilterSelect
                    value={filters.gpu}
                    onChange={(value) => setFilters({ ...filters, gpu: value })}
                    options={[
                        { value: "", label: "Qualquer GPU" },
                        ...gpuBrands.map((gpu) => ({
                            value: gpu,
                            label: gpu,
                        })),
                    ]}
                />
                <FilterSelect
                    value={filters.minRating}
                    onChange={(value) => setFilters({ ...filters, minRating: value })}
                    options={[
                        { value: "", label: "Qualquer avaliação" },
                        { value: "4.0", label: "A partir de 4.0" },
                        { value: "4.5", label: "A partir de 4.5" },
                        { value: "5.0", label: "A partir de 5.0" },
                    ]}
                />
            </div>
            <div className="flex justify-between items-center">
                <p className="text-ink-secondary text-sm">
                    {`${sortNotebook.length} notebook${sortNotebook.length === 1 ? '' : 's'} encontrado${sortNotebook.length === 1 ? '' : 's'}`}
                </p>
                <FilterSelect value={sortBy} onChange={setSortBy} options={sortOptions} />
            </div>
            <NotebookGrid notebooks={sortNotebook} />
        </div>
    )
}