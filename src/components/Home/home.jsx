import React, { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const navigate = useNavigate()
  const [amount, setAmount] = useState(1000)

  useEffect(()=>{
    setAmount(1000)
  },[])

  const safeAmount = Math.round(Math.max(200, Number(amount) || 200) / 50) * 50
  const monthly = safeAmount * 0.07

  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-500 to-violet-700 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide">Verified Investor Network</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">Professional Investment Management — Transparent, Secure, Predictable</h1>
            <p className="text-lg text-pink-50 max-w-xl">Manage your capital, track fixed 30-day returns at 7%, and withdraw with enterprise-grade security. Designed for verified investors and institutional partners.</p>

            <div className="flex flex-wrap gap-3">
              <button onClick={()=>navigate('/register')} className="bg-white text-pink-600 px-5 py-3 rounded-lg font-semibold shadow">Get Started</button>
              <button onClick={()=>{ const el = document.getElementById('calculator'); if(el) el.scrollIntoView({behavior:'smooth'}) }} className="border border-white/30 px-5 py-3 rounded-lg">Open Calculator</button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/10 rounded-lg p-3 text-sm">
                <div className="font-bold">7% / 30 days</div>
                <div className="text-xs text-pink-50">Fixed monthly return</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-sm">
                <div className="font-bold">$200</div>
                <div className="text-xs text-pink-50">Minimum deposit</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-sm">
                <div className="font-bold">Instant Withdrawals</div>
                <div className="text-xs text-pink-50">Subject to verification</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-xl">
            <p className="text-xs uppercase tracking-wide text-slate-500 font-bold">Projected Return</p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm">Current Investment</p>
                <p className="text-2xl font-extrabold mt-1">${safeAmount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
              </div>
              <div>
                <p className="text-sm">Est. Monthly Return (7%)</p>
                <p className="text-2xl font-extrabold mt-1 text-emerald-600">${monthly.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Investment Amount</label>
                <input id="investmentRange" type="range" min="200" max="10000" step="50" value={safeAmount} onChange={(e)=>setAmount(e.target.value)} className="w-full mb-3" />
                <input id="investmentInput" type="number" min="200" step="50" value={safeAmount} onChange={(e)=>setAmount(e.target.value)} className="w-full border border-slate-200 rounded-lg p-3 text-lg font-semibold" aria-label="Investment amount" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div id="rules" className="bg-white rounded-2xl p-6 text-slate-800 shadow">
            <h3 className="text-xl font-bold mb-3">Rules & Terms</h3>
            <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
              <li>Minimum deposit is <strong>$200</strong>.</li>
              <li>Fixed 7% profit every 30 days for active cycles.</li>
              <li>Withdrawals subject to verification and fees as stated.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
