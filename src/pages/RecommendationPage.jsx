import { useState } from "react";
import { getRecommendations } from "../services/recomendations";
import { notebooks } from "../data/Notebooks";
import FilterSelect from "../components/FilterSelect";
import NotebookGrid from "../components/NotebookGrid";

export default function RecommendatioPage() {
    const [answers, setAnswers] = useState({
        category: "Todos",
        gpuType: "",
        maxPrice: null,
        minStorage: null
    })

    const [showResults, setSHowResults] = useState(false)

    const [recommendations, setRecommendations] = useState([])

    function handleSubmit() {
        setSHowResults(true)
        setRecommendations(getRecommendations(notebooks, answers))
    }



    const uniqueCategories = [...new Set(notebooks.flatMap(notebook => notebook.categories))]
    const categoryOptionsFromData = uniqueCategories.map(category => ({
        label: category,
        value: category
    }))
    const categoryOptions = [
        { label: "Todos", value: "Todos" },
        ...categoryOptionsFromData
    ]

    const gpuOptions = [
        { label: "Qualquer", value: "" },
        { label: "GPU dedicada", value: "dedicated" },
        { label: "GPU integrada", value: "integrated" }
    ]

    const priceOptions = [
        { label: "Até R$ 3.000", value: 3000 },
        { label: "Até R$ 4.000", value: 4000 },
        { label: "Até R$ 5.000", value: 5000 },
        { label: "Até R$ 6.000", value: 6000 }
    ]

    const storageOptions = [
        { label: "256 GB ou mais", value: 256 },
        { label: "512 GB ou mais", value: 512 },
        { label: "1 TB ou mais", value: 1024 }
    ]
    return (
        <div className="space-y-3 px-1 max-w-7xl mx-auto">
            {!showResults ? (
                <>
                    <h1 className="text-ink-primary text-4xl text-center">Encontre seu proximo ou primeiro notebook</h1>
                    <div className="p-1 rounded-lg flex flex-wrap gap-2 justify-center items-center">
                        <FilterSelect value={answers.category} onChange={(value) => setAnswers({ ...answers, category: value })} options={categoryOptions} />
                        <FilterSelect value={answers.gpuType} onChange={(value) => setAnswers({ ...answers, gpuType: value })} options={gpuOptions} />
                        <FilterSelect value={answers.maxPrice} onChange={(value) => setAnswers({ ...answers, maxPrice: value })} options={priceOptions} />
                        <FilterSelect value={answers.minStorage} onChange={(value) => setAnswers({ ...answers, minStorage: value })} options={storageOptions} />
                    </div>
                    <div className="flex justify-center">
                        <button className="rounded-full border px-8 py-3 bg-surface border-primary text-primary" onClick={handleSubmit}>Ver recomendações</button>
                    </div>
                </>

            ) : (
                <NotebookGrid notebooks={recommendations} />
            )}
        </div>
    )
}