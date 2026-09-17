import { useComparison } from "../context/ComparisonContext";

export default function ToastMessage(){
    const {toastMessage } = useComparison()

    if (toastMessage === null){
        return null
    }
    return(
        <div className="fixed bottom-4 right-4">
            {toastMessage}
        </div>
    )
}