import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  const [route, setRoute] = useState(window.location.pathname || '/')

  useEffect(()=>{
    const onPop = ()=> setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return ()=> window.removeEventListener('popstate', onPop)
  },[])

  const navigate = (path)=>{
    window.history.pushState({},'',path)
    setRoute(path)
  }

  return (
    <div>
      <Header navigate={navigate} />

      <main>
        {route === '/' && <Home navigate={navigate} />}
        {route === '/login' && <Login navigate={navigate} />}
        {route === '/register' && <Register navigate={navigate} />}
        {/* Other in-page anchors (rules, calculator) can render Home and scroll to sections if needed */}
      </main>

      <Footer />
    </div>
  )
}
