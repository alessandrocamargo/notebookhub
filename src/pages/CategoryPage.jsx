import { useParams } from "react-router-dom";
import { notebooks } from "../data/notebooks";
import { slugify } from "../services/slug";
import NotebookGrid from "../components/NotebookGrid";
export default function CategoryPage(){
    const { slug } = useParams();
    const filteredNotebooks = notebooks.filter((notebook) =>
        notebook.categories.some(
            (category) => slugify(category) === slug
        )
    );

    return(
        <>
            <h1>Categoria: {slug}</h1>
            <NotebookGrid notebooks={filteredNotebooks} />
        </>
    )

}