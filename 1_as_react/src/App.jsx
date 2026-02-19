import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Layout from './Layout'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/> 
          <Route path="/" element={<Home/>}/> 
          <Route path='cart' element={<Cart/>}/> 
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
