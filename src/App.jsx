import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Nav from './components/nav/Nav';
import { AuthProvider } from './components/nav/Auth';
import RequiredAuth from './components/nav/RequiredAuth';

const App = () => {
  return (
   <AuthProvider>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='profile' element={<RequiredAuth><Profile/></RequiredAuth>}/>
    </Routes>
   </AuthProvider>
  )
}

export default App
