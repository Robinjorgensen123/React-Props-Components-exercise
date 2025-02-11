import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const apiKey = "37fe945a"
  
  const FetchMovieData = async (searchTerm) => {
      try {
          const response = await
          fetch("")
          const data = await response.json()
          return data.Search || []
      } catch (error) {
          console.error("fel vid hämtning av data", error)
          return []
      }
      
  } 

  return (
    <>
   
    </>
  )
}

export default App
