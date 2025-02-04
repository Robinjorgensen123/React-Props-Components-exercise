import React from "react";

const Amount = ({ value, onChange }) => {
    
  return (
    <div>
      <label>Summa:</label>
      <input
        type="number"
        value={value || ""}  // Säkerställer att det är en sträng eller nummer, om inget värde finns
        onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
      />
    </div>
  );
};

export default Amount;
