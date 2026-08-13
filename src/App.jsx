import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Login from './components/Login/login'
import Register from './components/Register/register'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Terms from './components/Pages/Terms'
import Privacy from './components/Pages/Privacy'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import InvestmentPlans from './components/Pages/InvestmentPlans'
import Withdrawal from './components/Pages/Withdrawal'
import KycSecurity from './components/Pages/KycSecurity'
import Support from './components/Pages/Support'

export default function App(){
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plans" element={<InvestmentPlans />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/kyc-security" element={<KycSecurity />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
