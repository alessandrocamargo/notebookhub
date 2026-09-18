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
    return(
        <table>
            <thead>
                <tr>
                    <th>Característica</th>
                    <th>{notebookA.name}</th>
                    <th>{notebookB.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Processador</td>
                    <td>{notebookA.processor}</td>
                    <td>{notebookB.processor}</td>
                </tr>

                <tr>
                    <td>Memória RAM</td>
                    <td>{notebookA.ram}</td>
                    <td>{notebookB.ram}</td>
                </tr>

                <tr>
                    <td>Armazenamento</td>
                    <td>{notebookA.storage}</td>
                    <td>{notebookB.storage}</td>
                </tr>

                <tr>
                    <td>Placa de Video</td>
                    <td>{notebookA.gpu}</td>
                    <td>{notebookB.gpu}</td>
                </tr>

                <tr>
                    <td>Tela</td>
                    <td>{notebookA.screen}</td>
                    <td>{notebookB.screen}</td>
                </tr>

                <tr>
                    <td>Preço</td>
                    <td>{notebookA.price}</td>
                    <td>{notebookB.price}</td>
                </tr>

            </tbody>
        </table>
    )
}