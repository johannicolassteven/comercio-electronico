import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Aboutt,Home,Private,Products,SingleProducts,Cart,Checkout,Error} from "./pages/index"


function App() {
  return  <>
  <Router>
    <Navbar/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/about' element={<Aboutt/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<SingleProducts/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Private><Checkout/></Private>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    <Footer/>
  </Router>
  </>
}

export default App
