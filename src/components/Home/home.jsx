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

        <section className="bg-slate-100 py-14 sm:py-20 mt-8">
          <div className="text-center mb-10">
            <p className="text-pink-600 font-bold uppercase tracking-[0.2em] text-[11px]">Onboarding Flow</p>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">How It Works</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-white rounded-[26px] border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-black text-lg mb-4">1</div>
              <h4 className="text-xl font-black text-slate-900">Account &amp; KYC Verification</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">Complete Email &amp; Phone OTP verification and submit your NID or Passport for secure identity confirmation.</p>
            </div>

            <div className="bg-white rounded-[26px] border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-black text-lg mb-4">2</div>
              <h4 className="text-xl font-black text-slate-900">Make Investment</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">Deposit a minimum of $200 via Binance Pay or USDT (TRC20) to activate your investment cycle.</p>
            </div>

            <div className="bg-white rounded-[26px] border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-black text-lg mb-4">3</div>
              <h4 className="text-xl font-black text-slate-900">Track &amp; Earn Profit</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">After each full 30-day cycle, your dashboard shows automatic 7% profit credit to your active investment balance.</p>
            </div>

            <div className="bg-white rounded-[26px] border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-black text-lg mb-4">4</div>
              <h4 className="text-xl font-black text-slate-900">Request Withdrawal</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">Submit your withdrawal after the initial 3 business day lock-in period, with processing completed within 1 business day.</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20 mt-8">
          <div className="text-center mb-10">
            <p className="text-pink-600 font-bold uppercase tracking-[0.2em] text-[11px]">Security &amp; Compliance</p>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">Bank-Grade Security &amp; Ledger Tracking</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-slate-50 border border-slate-200 rounded-[26px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-xl font-black text-slate-900">Dual-Layer OTP Security</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">Login and withdrawal requests are protected by Email and Phone OTP confirmations.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[26px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">🗂️</div>
              <h4 className="text-xl font-black text-slate-900">Encrypted KYC Documents</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">NID and Passport data are stored in encrypted form with controlled access and audit trails.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[26px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">📘</div>
              <h4 className="text-xl font-black text-slate-900">Immutable Double-Entry Ledger</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">Every capital movement, profit entry, and withdrawal is recorded with precise back-end accounting.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[26px] p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-xl font-black text-slate-900">Automated Payment Verification</h4>
              <p className="mt-3 text-slate-600 leading-relaxed">Binance Pay API and direct payment verification enable instant membership activation and secure settlement.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-100 py-14 sm:py-20 mt-8">
          <div className="text-center mb-10">
            <p className="text-pink-600 font-bold uppercase tracking-[0.2em] text-[11px]">Investor FAQs</p>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            <details className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm" open>
              <summary className="cursor-pointer font-bold text-slate-900">Q: Can I invest additional funds later?</summary>
              <p className="mt-3 text-slate-600 leading-relaxed">Ans: Yes, you can make extra deposits at any time. For example: $300 + $230 = $530. Your next profit will be calculated at 7% on the full $530 investment.</p>
            </details>

            <details className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">Q: What is the withdrawal policy?</summary>
              <p className="mt-3 text-slate-600 leading-relaxed">Ans: After 3 business days from the initial investment, you can submit a withdrawal request at any time. The system will deduct from profit first, and if needed, the remaining amount will be deducted from the capital.</p>
            </details>

            <details className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">Q: Will my accumulated profit be automatically compounded?</summary>
              <p className="mt-3 text-slate-600 leading-relaxed">Ans: No. Even if profit is accumulated in your dashboard, the monthly 7% return applies only to your active Current Investment. This is a non-compounding model.</p>
            </details>

            <details className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
              <summary className="cursor-pointer font-bold text-slate-900">Q: Can I open an account without KYC?</summary>
              <p className="mt-3 text-slate-600 leading-relaxed">Ans: No. This platform is designed for known and verified investors, so account creation and deposits/withdrawals are completed only after KYC verification is successfully completed.</p>
            </details>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-600 via-pink-600 to-violet-700 text-white py-14 sm:py-20 mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-black leading-tight">Ready to Manage Your Investments with SR Platform?</h3>
            <p className="mt-4 text-pink-100 text-base sm:text-lg">Transparent rules, secure verification, and reliable monthly performance.</p>
            <div className="mt-8 flex justify-center">
              <button onClick={()=>navigate('/register')} className="inline-flex items-center justify-center bg-white text-pink-600 px-7 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition shadow-xl">Start Your Account Verification</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
