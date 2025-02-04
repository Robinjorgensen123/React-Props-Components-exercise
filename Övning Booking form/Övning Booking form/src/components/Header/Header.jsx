import React from "react"

import "../Header/Header.css"

const Header = ({title, location1 ,location2, time1, time2}) => {
    return (
<div className="header-container">

    <div className="title">
        <h1>{title}</h1>
    </div>

    <div className="location-wrapper">
        <div className="location-1">
            <h2>{location1}</h2>
            <h3>{time1}</h3>
        </div>

        <div className="location-2">
            <h2>{location2}</h2>
            <h3>{time2}</h3>
        </div>
    </div>
</div>
   ) 
}
export default Header