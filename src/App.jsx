import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AddApartment from './pages/AddApartment'
import Layout from './pages/Layout'
import Featured from './pages/Featured'
import UpdateApartment from './pages/UpdateApartment'

// function that handles the routes
function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path = "/"  element ={<Layout />} >
          <Route path = "/"  element ={<Home />} />
          <Route path = "/about"  element ={<About />} />
          <Route path = "/updateApartment/:id"  element ={<UpdateApartment />} />
          <Route path = "/featured/:id"  element ={<Featured />} />
          <Route path = "/addApartment"  element ={<AddApartment />} />
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
