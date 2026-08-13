import React, { useState, useEffect } from 'react'
import { Check } from 'lucide-react'

export default function Home({ navigate }){
  const [amount, setAmount] = useState(1000)

  useEffect(()=>{
    setAmount(1000)
  },[])

  const safeAmount = Math.round(Math.max(200, Number(amount) || 200) / 50) * 50
  const monthly = safeAmount * 0.07

  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-500 to-violet-700 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-18 lg:py-24">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 items-start">
          <div>
            <div className="hero-badge inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-pink-50">
              Verified Investor Network
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-0.04em] max-w-3xl">
              A Transparent & Reliable Investment Management Platform
            </h2>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-pink-50 leading-relaxed">
              Track your investments, calculate fixed 30-day returns, and manage instant withdrawals with enterprise-grade security.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 border border-white/20">
                <Check className="w-4 h-4 text-pink-100" /> Fixed 7% Profit Every 30 Days
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 border border-white/20">
                <Check className="w-4 h-4 text-pink-100" /> Flexible Withdrawal
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 border border-white/20">
                <Check className="w-4 h-4 text-pink-100" /> Direct Crypto Settlement
              </span>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-3 mt-6">
                <button onClick={()=>navigate('/register')} className="inline-flex items-center gap-2 bg-white text-pink-600 px-5 py-3 rounded-xl font-bold shadow">Get Started</button>
                <button onClick={()=>{ const el = document.getElementById('calculator'); if(el) el.scrollIntoView({behavior:'smooth'}) }} className="inline-flex items-center gap-2 border border-white/30 text-white px-4 py-3 rounded-xl">Open Calculator</button>
              </div>

              <div id="calculator" className="mt-6">
              <label className="block text-sm font-semibold text-slate-600 mb-3">Investment Amount</label>
              <input id="investmentRange" type="range" min="200" max="10000" step="50" value={safeAmount} onChange={(e)=>setAmount(e.target.value)} className="w-full mb-4" />
              <input id="investmentInput" type="number" min="200" step="50" value={safeAmount} onChange={(e)=>setAmount(e.target.value)} className="w-full border border-slate-300 rounded-xl p-3.5 text-lg font-semibold text-slate-900" aria-label="Investment amount" />

              <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-4 text-sm text-pink-50">
                <p>Minimum investment: <strong>$200</strong></p>
                <p className="mt-1">Suggested amount increments: <strong>$50 / $100</strong></p>
              </div>
            </div>
          </div>

          <div className="rounded-[22px] bg-white p-5 sm:p-6 text-slate-800">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-slate-500 font-bold">Projected Return</p>
            <div className="mt-6 sm:mt-8 space-y-6 text-slate-900">
              <div>
                <p className="text-sm">Current Investment</p>
                <p className="text-3xl font-black mt-2">${safeAmount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
              </div>
              <div>
                <p className="text-sm">Est. Monthly Return (7%)</p>
                <p className="text-3xl font-black mt-2">${monthly.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</p>
              </div>
              <div>
                <p className="text-sm">Cycle Duration</p>
                <p className="text-3xl font-black mt-2">30 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <section id="rules" className="bg-white rounded-2xl p-6 text-slate-800 shadow mt-8">
          <h3 className="text-xl font-bold mb-3">Rules & Terms</h3>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li>Minimum deposit is <strong>$200</strong>.</li>
            <li>Fixed 7% profit every 30 days for active cycles.</li>
            <li>Withdrawals subject to verification and fees as stated.</li>
          </ul>
        </section>
      </div>
    </section>
  )
}
