import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function InvestmentPlans(){
  const navigate = useNavigate()
  const [amount, setAmount] = useState(200)
  const plans = useMemo(()=>[
    { key:'basic', title:'Basic', min:200, note:'Ideal to start and learn' },
    { key:'standard', title:'Standard', min:1000, note:'Steady growth for regular investors' },
    { key:'premium', title:'Premium', min:5000, note:'Higher limits for experienced investors' }
  ], [])

  const safeAmount = Math.max(200, Math.round(Number(amount || 0)/50)*50)
  const monthly = +(safeAmount * 0.07).toFixed(2)

  const deposit = (plan)=>{
    // demo: navigate to register with prefilled amount (client-side only)
    alert(`Demo deposit: $${safeAmount} into ${plan.title} plan. Proceed to registration.`)
    navigate('/register')
  }

  return (
    <main className="max-w-6xl mx-auto my-12 p-6 bg-white rounded-2xl shadow text-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-extrabold mb-3">Investment Plans</h1>
          <p className="text-sm text-slate-600 mb-6">Choose a plan that fits your capital and return expectations. All plans pay a fixed 7% return every 30 days on active capital.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plans.map(p=> (
              <div key={p.key} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="text-sm text-slate-500">{p.title}</div>
                <div className="text-2xl font-extrabold mt-2">${p.min.toLocaleString()}</div>
                <div className="text-xs text-slate-600 mt-2">{p.note}</div>
                <div className="mt-4">
                  <button onClick={()=>deposit(p)} className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold">Deposit to {p.title}</button>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-8 bg-white border border-slate-100 rounded-2xl p-5">
            <h3 className="font-bold mb-3">Why choose SR Investment</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
              <li>Transparent fixed returns: 7% every 30 days.</li>
              <li>Enterprise-grade security and KYC verified members only.</li>
              <li>Flexible deposit methods including crypto settlement.</li>
            </ul>
          </section>
        </div>

        <aside className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-6 shadow">
          <h3 className="text-lg font-bold">Quick Calculator</h3>
          <p className="text-sm text-slate-600">Enter your deposit to see projected monthly returns.</p>

          <div className="mt-4">
            <label className="text-sm text-slate-600">Deposit amount</label>
            <input type="range" min="50" max="100000" step="50" value={amount} onChange={e=>setAmount(e.target.value)} className="w-full mt-2" />
            <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} className="w-full mt-3 p-3 border rounded-lg text-lg font-semibold" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 text-sm">
              <div className="text-xs text-slate-500">Suggested amount</div>
              <div className="font-extrabold mt-1">${safeAmount.toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-sm">
              <div className="text-xs text-slate-500">Est. Monthly (7%)</div>
              <div className="font-extrabold text-emerald-600 mt-1">${monthly.toLocaleString()}</div>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-slate-600">Choose plan for deposit</label>
            <select className="w-full mt-2 p-3 border rounded-lg" defaultValue="standard">
              <option value="basic">Basic — from $200</option>
              <option value="standard">Standard — from $1,000</option>
              <option value="premium">Premium — from $5,000</option>
            </select>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={()=>alert('Demo deposit flow — integrate payment gateway')} className="flex-1 px-4 py-3 bg-pink-600 text-white rounded-lg font-semibold">Deposit Now</button>
            <button onClick={()=>navigate('/register')} className="px-4 py-3 border rounded-lg">Open Account</button>
          </div>

          <div className="mt-4 text-xs text-slate-500">Minimum deposit: $200. Deposits are subject to verification and settlement times.</div>
        </aside>
      </div>

      <div className="mt-8 text-sm text-slate-600">If you want a production-ready payment flow, I can add Binance Pay / TRC20 payment integration and a backend endpoint to record deposits.</div>

      <div className="mt-6">
        <Link to="/" className="text-pink-600 font-semibold">← Back to Home</Link>
      </div>
    </main>
  )
}
