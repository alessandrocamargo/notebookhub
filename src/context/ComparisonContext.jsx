import { createContext, useContext, useState } from "react";

const ComparisonContext = createContext()

export function ComparisonProvider ({children}){
    const [selectedForComparison, setSelectedForComparison] = useState([])
    const [toastMessage, setToastMessage] = useState(null)
    function toggleComparison(notebook){
        const alreadySelected = selectedForComparison.some((item) => item.id === notebook.id)
        if(alreadySelected){
            const updated = selectedForComparison.filter((item) => item.id !== notebook.id)
            setSelectedForComparison(updated)
            return
        }
        if(selectedForComparison.length >= 2) {
            setToastMessage("Para uma melhor comparação, selecione 2 notebooks somente")
            setTimeout(() => setToastMessage(null), 3000);
            return
        }
        setSelectedForComparison([...selectedForComparison,notebook])
    }

    return(
        <ComparisonContext.Provider value={{ selectedForComparison, setSelectedForComparison,toggleComparison, toastMessage}}>
            {children}
        </ComparisonContext.Provider>
    )
}

export function useComparison(){
    return useContext(ComparisonContext)
}