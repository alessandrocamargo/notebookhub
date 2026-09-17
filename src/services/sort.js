export function sortNotebooks(notebooks, sortBy) {
    const sorted = [...notebooks];

    switch (sortBy) {
        case "price-asc":
            sorted.sort((a,b) => a.price - b.price)
            break;

        case "price-desc":
            sorted.sort((a,b) => b.price - a.price)
            break;
        
        case "rating-desc":
            sorted.sort((a,b) => b.rating - a.rating)
            break;

        case "recommended":
            break;
    }

    return sorted;
}