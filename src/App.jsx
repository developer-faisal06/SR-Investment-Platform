import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Login from './components/Login/login'
import Register from './components/Register/register'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

export default function App(){
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
