import React, { useState } from "react"
import "../Main/Main.css"
import "../Clickevent/Clickevent"
import handleButtonClick from "../Clickevent/Clickevent"


const Main = ({checkbox1, checkbox2, label1 ,label2, label3, label4, bookBtn}) => {

    const [isChecked1, setCheckbox1] = useState(checkbox1)
    const [isChecked2, setCheckbox2] = useState(checkbox2)
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    
   /*  console.log('Props i Main:', { checkbox1, checkbox2, label1, label2, label3, label4, bookBtn });
 */
    const handleCheckboxChange1 = () => {
        setCheckbox1(!isChecked1)
    }

    const handleCheckboxChange2 = () => {
        setCheckbox2(!isChecked2)
    }


    return(
    <div>
    <div className="checkbox-wrapper">
        
        <input  
        type="checkbox"
        checked={isChecked1}
         onChange={handleCheckboxChange1}
         />
         <label>2:a klass</label>
         
<div className="checkbox-wrapper">
    
        < input
        type="checkbox"
        checked={isChecked2}
        onChange={handleCheckboxChange2}
        />
        <label>1:a klass</label>
        
        </div>
    </div>
<div className="input-container">
    <div className="input-wrapper1"> 
        <label className="label1" htmlFor="input1">{label1}</label>
        <input className="input1" 
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)} 
        id="iput1"
        
        />
    </div>
    <div className="input-wrapper1">
        <label className="label2" htmlFor="input2">{label2}</label>
        <input className="input2" 
        type="text" 
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        id="input2" />
     </div>
</div>
    <div className="input-wrapper2">
        <label className="label3" htmlFor="input3">{label3}</label>
        <input className="input3" 
        type="text" 
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
        id="input3"/>
    
     <div className="input-wrapper2">
        <label className="label4" htmlFor="input4">{label4}</label>
        <input className="input4"
         type="text" 
         value={input4}
         onChange={(e) => setInput4(e.target.value)}
         id="input4" />
    </div>
</div>
    <button onClick = {() => handleButtonClick ({
        isChecked1, isChecked2, input1, input2, input3, input4 })}
        className="bookbtn">{bookBtn}
        </button>
</div>
)
}

export default Main