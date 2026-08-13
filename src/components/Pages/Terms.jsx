import React from 'react'
import { Link } from 'react-router-dom'

export default function Terms(){
  return (
    <main className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-2xl shadow text-slate-800">
      <h1 className="text-2xl font-extrabold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-slate-600">This is a demo Terms & Conditions page. Replace with your legal copy.</p>
      <p className="mt-6 text-sm text-slate-500">Investing involves risk. You may lose your capital.</p>
      <div className="mt-6">
        <Link to="/" className="text-pink-600 font-semibold">← Back to Home</Link>
      </div>
    </main>
  )
}
