
import React from "react";

const Child = ({energyLevel}) => {
    return <h1>{energyLevel > 9000 ? "Energy: its over 9000" : "Energy:low"}</h1>
} 
export default Child;