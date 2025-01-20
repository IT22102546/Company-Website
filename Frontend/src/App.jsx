import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Services from './Pages/Services'




export default function App() {
  return (
    <BrowserRouter>
        <Header/>
      <div className='pt-16'>
      <Routes>
        <Route path="/" element={<Home/>}/>    
        <Route path="/services" element={<Services/>}/>    

      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}
