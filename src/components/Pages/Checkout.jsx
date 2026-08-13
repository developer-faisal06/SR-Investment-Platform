import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CheckoutLayout from '../Checkout/CheckoutLayout'
import OrderSummary from '../Checkout/OrderSummary'
import PaymentDetails from '../Checkout/PaymentDetails'
import ConfirmAction from '../Checkout/ConfirmAction'

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
    <div>
      <div className="max-w-3xl mx-auto my-8 px-4">
        <h2 className="text-2xl font-extrabold">Checkout</h2>
        <p className="text-sm text-slate-600">Review and confirm your deposit. Demo flow only.</p>
      </div>

      <CheckoutLayout
        left={<>
          <PaymentDetails payload={payload} setPayload={setPayload} />
        </>}
        right={<OrderSummary payload={payload} />}
      />

      <div className="max-w-5xl mx-auto px-4 mt-6">
        <ConfirmAction onConfirm={confirm} onCancel={()=>navigate(-1)} />
      </div>
    </div>
  )
}
