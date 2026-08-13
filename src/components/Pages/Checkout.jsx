import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Checkout(){
  const location = useLocation()
  const navigate = useNavigate()
  const [payload, setPayload] = useState(()=>{
    try{
      const p = location.state || JSON.parse(localStorage.getItem('pending_deposit') || 'null')
      return p
    }catch(e){ return null }
  })

  useEffect(()=>{
    if(!payload){
      // nothing to checkout
    }
  }, [payload])

  const confirm = ()=>{
    // demo: mark deposit as recorded and clear pending
    const deposits = JSON.parse(localStorage.getItem('sr_deposits') || '[]')
    deposits.push({ ...payload, date: new Date().toISOString(), status: 'completed' })
    localStorage.setItem('sr_deposits', JSON.stringify(deposits))
    localStorage.removeItem('pending_deposit')
    alert('Deposit recorded (demo).')
    navigate('/')
  }

  if(!payload) return (
    <main className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-2xl shadow text-slate-800 text-center">
      <h2 className="text-xl font-bold">Nothing to checkout</h2>
      <p className="mt-3 text-slate-600">Please select a plan and deposit amount first.</p>
    </main>
  )

  return (
    <main className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-2xl shadow text-slate-800">
      <h2 className="text-2xl font-extrabold mb-3">Checkout</h2>
      <p className="text-sm text-slate-600">Review your deposit details and confirm to proceed. (Demo flow)</p>

      <div className="mt-6 bg-slate-50 p-4 rounded-lg">
        <div className="flex justify-between"><div className="text-sm text-slate-600">Plan</div><div className="font-bold">{payload.planTitle}</div></div>
        <div className="flex justify-between mt-2"><div className="text-sm text-slate-600">Amount</div><div className="font-bold">${Number(payload.amount).toLocaleString()}</div></div>
        <div className="flex justify-between mt-2"><div className="text-sm text-slate-600">Estimated Monthly (7%)</div><div className="font-bold text-emerald-600">${(Number(payload.amount)*0.07).toFixed(2)}</div></div>
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={confirm} className="px-4 py-3 bg-emerald-600 text-white rounded-lg font-semibold">Confirm Deposit</button>
        <button onClick={()=>navigate(-1)} className="px-4 py-3 border rounded-lg">Back</button>
      </div>
    </main>
  )
}
