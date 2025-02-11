
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import "./components//Header/Header.css"




function App() {





  return (
    <>
    <div className="header-container">
 <Header 
 title="Åka Tåg"
 location1="Stockholm"
 time1= "1300"
 location2="Göteborg"
 time2="1600"

 />
 <Main
 checkbox1="2a:klass"
 checkbox2="1a:klass"
 label1="Antal biljetter"
 label2="Titel"
 label3="Förnamn"
 label4="Efternamn"
 bookBtn="Boka Biljett"
 />
    </div>

    </>
  )
}

export default App

