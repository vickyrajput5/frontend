import React from 'react'
import Registration from './component/Registration'
import {  
  BrowserRouter,  
  Routes,  
  Route,  
   
}   
from 'react-router-dom';  
import Navbar from './component/Navbar';
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path='/' element={<h1>Home</h1>}/>
     <Route path='/about' element={<h1>About</h1>}/>
     <Route path='/contact' element={<h1>Contact</h1>}/>
     <Route path='/registration' element={<Registration/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
