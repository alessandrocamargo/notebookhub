export default function FilterSelect({ value, onChange, options}){
    return (
        <select value={value} className="bg-surface border border-border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}