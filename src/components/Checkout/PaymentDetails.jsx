import React from 'react'

export default function PaymentDetails({payload, setPayload}){
  if(!payload) return null
  return (
    <div className="bg-white p-4 rounded-lg border">
      <h4 className="font-bold">Payment Details</h4>
      <p className="text-sm text-slate-600 mt-2">Demo payment — integrate real gateway in production.</p>
      <div className="mt-3 text-sm">
        <label className="block mb-2">Payer Name</label>
        <input className="w-full p-2 border rounded" defaultValue={payload.name || ''} />
      </div>
    </div>
  )
}
