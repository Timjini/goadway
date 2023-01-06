import React,{ useState, useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Login from './Dashboard/Login'
import Services from './Dashboard/Services'
import Register from './Dashboard/Register'
import { Context } from './context/Context'

function App() {
  const {user} = useContext(Context)

  console.log(user)
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home/> : <Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Register />} />
        </Routes>
    <Footer />
    </BrowserRouter>
    </>
   

  )
}

export default App
