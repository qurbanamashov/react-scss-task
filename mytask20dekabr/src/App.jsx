import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Main from './Main/main'
function App() {
  return (
    <div id='App'>
      <div className='AppWidth'>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
