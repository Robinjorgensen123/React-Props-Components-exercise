

import Parent from "../Parent/parent"

let CurrentEnergy = 10000
 
function Grandparent ()  {
  
   return <Parent energyLevel = {CurrentEnergy}/>
 } 
 
 export default Grandparent