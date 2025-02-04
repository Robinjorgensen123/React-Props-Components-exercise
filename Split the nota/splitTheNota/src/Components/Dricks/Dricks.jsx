import React from "react"

const Dricks = ({value, onChange}) => { 
    return (
    <div>
    <label>Dricks:</label>
    <input
    type="number"
    step="0.01"
    value={value}
    onChange={(e) => onChange(e.target.value)} //Uppdaterar inmatningsfältet när användare matar in ett värde
    placeholder="Ex. 0.10"
    />
    </div>
    )
}

export default Dricks;