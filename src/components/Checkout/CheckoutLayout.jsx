import React from 'react'

export default function CheckoutLayout({left, right}){
  return (
    <div className="max-w-5xl mx-auto my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">{left}</div>
      <aside className="lg:col-span-1">{right}</aside>
    </div>
  )
}
