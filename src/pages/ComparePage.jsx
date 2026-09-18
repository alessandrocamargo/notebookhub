import { useComparison } from "../context/ComparisonContext";
import EmptyState from "../components/EmptyState"
export default function ComparePage(){
    const { selectedForComparison } = useComparison()
    if (selectedForComparison.length === 0){
        return <EmptyState message="Nenhum notebook selecionado para a comparação." />
    }
    if (selectedForComparison.length === 1){
        return <EmptyState message="Selecione mais um notebook para a comparação." />
    }
    const [notebookA, notebookB] = selectedForComparison
    const specs = [
        { label: "Processador",valueA: notebookA.processor, valueB: notebookB.processor},
        { label: "Memória RAM",valueA: notebookA.ram, valueB: notebookB.ram},
        { label: "Placa de Vídeo",valueA: notebookA.gpu, valueB: notebookB.gpu},
        { label: "Armazenamento",valueA: notebookA.storage, valueB: notebookB.storage},
        { label: "Tela",valueA: notebookA.screen, valueB: notebookB.screen},
        { label: "Preço",valueA: notebookA.price, valueB: notebookB.price},
    ]
    return(
        <>
        <table className="hidden md:table-row">
            <thead>
                <tr>
                    <th>Característica</th>
                    <th>{notebookA.name}</th>
                    <th>{notebookB.name}</th>
                </tr>
            </thead>
            <tbody>
                {specs.map((spec) => (
                    <tr key={spec.label} >
                        <td>{spec.label}</td>
                        <td>{spec.valueA}</td>
                        <td>{spec.valueB}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="md:hidden">
                {specs.map((spec) => (
                    <div key={spec.label} className="border-b border-border py-3">
                        <p className="font-bold text-ink-primary">{spec.label}</p>
                        <p>{notebookA.name}: {spec.valueA}</p>
                        <p>{notebookB.name}: {spec.valueB}</p>
                    </div>
                ))}
        </div>
        </>
    )
}