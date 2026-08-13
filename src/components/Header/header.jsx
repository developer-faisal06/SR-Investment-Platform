import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header(){
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const goAndScroll = (path, id)=>{
    navigate(path)
    setOpen(false)
    setTimeout(()=>{
      const el = document.getElementById(id)
      if(el) el.scrollIntoView({behavior:'smooth'})
      else window.scrollTo({top:0, behavior:'smooth'})
    },80)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 via-pink-600 to-violet-600 flex items-center justify-center text-white font-extrabold shadow">SR</div>
          <div>
            <div className="text-lg sm:text-xl font-extrabold text-slate-800">SR Investment</div>
            <div className="text-xs text-slate-500">Transparent Investment Management</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <button onClick={()=>goAndScroll('/', 'overview')} className="text-slate-600 hover:text-pink-600 transition px-2 py-1">Overview</button>
          <button onClick={()=>goAndScroll('/', 'rules')} className="text-slate-600 hover:text-pink-600 transition px-2 py-1">Rules</button>
          <button onClick={()=>goAndScroll('/', 'calculator')} className="text-slate-600 hover:text-pink-600 transition px-2 py-1">Calculator</button>
          <button onClick={()=>navigate('/login')} className="text-slate-600 hover:text-pink-600 transition px-2 py-1">Login</button>
          <button onClick={()=>navigate('/register')} className="ml-2 bg-gradient-to-r from-pink-600 to-violet-600 text-white px-4 py-2 rounded-lg font-semibold shadow">Register</button>
        </nav>

        <div className="md:hidden">
          <button onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu" className="p-2 bg-slate-100 rounded-md">
            <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-3 space-y-1">
            <button onClick={()=>goAndScroll('/', 'overview')} className="block w-full text-left px-2 py-2 text-slate-700">Overview</button>
            <button onClick={()=>goAndScroll('/', 'rules')} className="block w-full text-left px-2 py-2 text-slate-700">Rules</button>
            <button onClick={()=>goAndScroll('/', 'calculator')} className="block w-full text-left px-2 py-2 text-slate-700">Calculator</button>
            <button onClick={()=>{ setOpen(false); navigate('/login') }} className="block w-full text-left px-2 py-2 text-slate-700">Login</button>
            <button onClick={()=>{ setOpen(false); navigate('/register') }} className="block w-full text-left px-2 py-2 text-white bg-pink-600 rounded-md">Register</button>
          </div>
        </div>
      )}
    </header>
  )
}
