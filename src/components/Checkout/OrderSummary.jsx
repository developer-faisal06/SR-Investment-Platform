import React from 'react'

export default function OrderSummary({payload}){
  if(!payload) return null
  return (
    <div className="bg-slate-50 p-4 rounded-lg">
      <h4 className="font-bold">Order Summary</h4>
      <div className="mt-3 text-sm text-slate-600">
        <div className="flex justify-between"><div>Plan</div><div className="font-semibold">{payload.planTitle}</div></div>
        <div className="flex justify-between mt-2"><div>Amount</div><div className="font-semibold">${Number(payload.amount).toLocaleString()}</div></div>
        <div className="flex justify-between mt-2"><div>Est. Monthly</div><div className="font-semibold text-emerald-600">${(Number(payload.amount)*0.07).toFixed(2)}</div></div>
      </div>
    </div>
  )
}
