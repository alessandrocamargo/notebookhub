export function filterNotebooks(notebooks, filters) {
    return notebooks.filter((notebook) => 
        notebook.name.toLowerCase().includes(filters.search.toLowerCase())&&
        (filters.brand === "" || notebook.brand === filters.brand)&& 
        (filters.category === "" || notebook.categories.some((category) => category === filters.category))&&
        (filters.maxPrice === "" || notebook.price <= Number(filters.maxPrice))&&
        (filters.minRam === "" || notebook.ram >= Number(filters.minRam))&&
        (filters.minStorage === "" || notebook.storage >= Number(filters.minStorage))&&
        (filters.gpu === "" || notebook.gpu.split(" ")[0] === filters.gpu)
    );
}