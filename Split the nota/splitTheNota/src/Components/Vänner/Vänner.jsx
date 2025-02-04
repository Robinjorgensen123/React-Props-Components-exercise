import React from "react"

const Vänner = ({ value, onChange}) => {
    return(
        <div>
            <label className="label">Antal Vänner:</label>
            <input 
            type="number" 
            value={value !== undefined && value !== null ? value : ""}
            onChange={(e) => onChange(Number(e.target.value) || 0)}
            />
        </div>
    )
}
        export default Vänner
