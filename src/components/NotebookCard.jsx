export default function NotebookCard({notebook}) {
    return(
        <div>
            <img src={notebook.image} alt={notebook.name} />
            <div>
                <h3>{notebook.name}</h3>
                <p>{notebook.brand}</p>
                <p>{notebook.ram}</p>
                <p>{notebook.rating}</p>
                <p>{notebook.categories}</p>
                <p>{notebook.price}</p>
                <a href="#">Ver mais detalhes</a>
            </div>
        </div>
    )
}