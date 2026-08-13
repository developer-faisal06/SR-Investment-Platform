import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <main className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-2xl shadow text-slate-800">
      <h1 className="text-2xl font-extrabold mb-4">About Us</h1>
      <p className="text-sm text-slate-600">SR Investment Platform is built for verified investors seeking predictable returns and secure settlements.</p>
      <div className="mt-6">
        <Link to="/" className="text-pink-600 font-semibold">← Back to Home</Link>
      </div>
    </main>
  )
}
