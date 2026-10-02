export function scoreNotebook(notebook, answers) {
    let score = 0

    // critério de uso principal
    if (answers.category !== "Todos" && notebook.categories.some(category => category === answers.category)) {
        score ++
    }

    // critério de GPU dedicada
    if (answers.gpuType!== "" && notebook.gpuType === answers.gpuType) {
        score ++
    }

    // critério de orçamento
    if (answers.maxPrice !== null && notebook.price <= answers.maxPrice) {
        score ++
    }

    // critério de armazenamento
    if (answers.minStorage !== null && notebook.storage >= answers.minStorage) {
        score ++
    }

    return score
}

export function getRecommendations(notebooks, answers) {
    // 1. Calcula o score de cada notebook
    const scoredNotebooks = notebooks.map(notebook => ({
        notebook,
        score: scoreNotebook(notebook, answers)
    }))

    // 2. Ordena do maior score para o menor
    scoredNotebooks.sort((a, b) => b.score - a.score)

    // 3. Desembrulha e retorna somente os notebooks
    return scoredNotebooks.map(item => item.notebook)
}