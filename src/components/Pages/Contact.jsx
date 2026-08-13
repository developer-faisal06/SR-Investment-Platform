import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact(){
  return (
    <main className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-2xl shadow text-slate-800">
      <h1 className="text-2xl font-extrabold mb-4">Contact Us</h1>
      <p className="text-sm text-slate-600">For support or partnership inquiries, email: support@example.com</p>
      <div className="mt-6">
        <Link to="/" className="text-pink-600 font-semibold">← Back to Home</Link>
      </div>
    </main>
  )
}
