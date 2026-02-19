// import axios from 'axios';
// import React, { useState } from 'react'

// const App = () => {
//   const [input, setinput] = useState({})
//   const handleinput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setinput(values => ({ ...values, [name]: value }));
//     console.log(input)
//   }
//   const handleSubmit = async () => {
//     let api = "http://localhost:8000/student/save";
//     const response = await axios.post(api, input);
//     console.log(response);
//   }


//   return (
//     <>
//       <h1>Apllication From</h1>
//       Enter rollno:<input type='text' name='rollno' onChange={handleinput} /><br></br>
//       Enter name:<input type='text' name='name' onChange={handleinput} /><br></br>
//       Enter city:<input type='text' name='city' onChange={handleinput} /><br></br>
//       Enter fees:<input type='text' name='fees' onChange={handleinput} /><br></br>

//       <button onClick={handleSubmit}>save!!</button>


      
//     </>
//   )
// }

// export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Update from './pages/Update'
import Search from './pages/Search'
import Contact from './pages/Contact'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path='/insert' element={<Insert/>}/> 
          <Route path='/display' element={<Display/>}/> 
         {/* <Route path="/update" element={<Update/>}/> */}
         <Route path="/search" element={<Search/>}/>
         <Route path="/contact" element={<Contact/>}/>
        </Route>
      
      </Routes>
      </BrowserRouter>
   
   </>
  )
}

export default App
