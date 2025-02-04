import { useState, useEffect } from 'react'
import './App.css'
import Dricks from './Components/Dricks/Dricks'
import Amount from './Components/Summa/Summa'
import Vänner from './Components/Vänner/Vänner'
import BeräknaKostnadPerPerson from './Components/BeräknaKostnadPerPerson/BeräknaKostnadPerPerson'


function App() {


  const [summa, setSumma] = useState("")
  const [vänner, setVänner] = useState(0)
  const [dricks, setDricks] = useState(0)

  console.log("Summa:", summa);
  console.log("Dricks:", dricks);
  console.log("Vänner:", vänner);
 
  useEffect(() => {
    console.log("Current value of summa", summa);
  }, [summa]);
  
 

  return ( 
    <>
  <Amount value={summa} onChange={setSumma}/>
   <Vänner value={vänner} onChange={setVänner}/>
   <Dricks value={dricks} onChange={setDricks}/>

   <BeräknaKostnadPerPerson
    summa={summa}
    vänner={vänner}
    dricks={dricks}
   />
    </>
    
  ) 
}

export default App
