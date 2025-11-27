import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<Signup/>}/>       <Route path='/' element={<Home/>}/>
      <Route path='/Profile' element={<Profile/>}/>
            <Route path='/About' element={<About/>}/>
    </Routes>



    </BrowserRouter>
  
  )
}

export default App
