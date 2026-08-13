import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const navigate = useNavigate()
  const onSubmit = (e)=>{
    e.preventDefault()
    alert('Login submitted (demo)')
  }

  return (
    <main className="max-w-lg mx-auto my-20 p-6 bg-white rounded-2xl shadow-md text-slate-800">
      <h1 className="text-2xl font-black mb-4">Sign In</h1>

      <form id="loginForm" onSubmit={onSubmit}>
        <label className="block mb-2">
          <span className="text-sm font-medium">Email</span>
          <input type="email" name="email" required className="w-full mt-1 p-3 border rounded-lg" placeholder="you@example.com" />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Password</span>
          <input type="password" name="password" required className="w-full mt-1 p-3 border rounded-lg" placeholder="Your password" />
        </label>

        <div className="flex items-center justify-between">
          <button type="submit" className="px-5 py-3 bg-pink-600 text-white rounded-lg font-bold">Login</button>
          <button type="button" onClick={()=>navigate('/register')} className="text-sm text-pink-600">Create an account</button>
        </div>
      </form>
    </main>
  )
}
