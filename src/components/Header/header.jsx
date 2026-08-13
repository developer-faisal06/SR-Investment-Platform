import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header(){
  const navigate = useNavigate()
  const goAndScroll = (path, id)=>{
    navigate(path)
    setTimeout(()=>{
      const el = document.getElementById(id)
      if(el) el.scrollIntoView({behavior:'smooth'})
      else window.scrollTo({top:0, behavior:'smooth'})
    },80)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-pink-600 to-violet-600 flex items-center justify-center text-white font-black shadow-lg shadow-pink-200">SR</div>
          <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">SR Investment</h1>
        </div>

        <nav className="flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
          <button onClick={()=>goAndScroll('/', 'overview')} className="text-slate-600 hover:text-pink-600 transition">Overview</button>
          <button onClick={()=>goAndScroll('/', 'rules')} className="text-slate-600 hover:text-pink-600 transition">Rules</button>
          <button onClick={()=>goAndScroll('/', 'calculator')} className="text-slate-600 hover:text-pink-600 transition">Calculator</button>
          <button onClick={()=>navigate('/login')} className="text-slate-600 hover:text-pink-600 transition">Login</button>
          <button onClick={()=>navigate('/register')} className="bg-gradient-to-r from-pink-600 to-violet-600 text-white px-4 sm:px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-pink-200 transition">Register</button>
        </nav>
      </div>
    </header>
  )
}
