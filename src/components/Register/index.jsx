import React from 'react'

export default function Register({ navigate }){
  const onSubmit = (e)=>{
    e.preventDefault()
    const pw = e.target.password.value
    const cpw = e.target.confirm.value
    if(pw !== cpw){
      alert('Passwords do not match')
      return
    }
    alert('Registration submitted (demo)')
  }

  return (
    <main className="max-w-lg mx-auto my-20 p-6 bg-white rounded-2xl shadow-md text-slate-800">
      <h1 className="text-2xl font-black mb-4">Create Account</h1>

      <form id="registerForm" onSubmit={onSubmit}>
        <label className="block mb-2">
          <span className="text-sm font-medium">Full name</span>
          <input type="text" name="name" required className="w-full mt-1 p-3 border rounded-lg" placeholder="Your full name" />
        </label>

        <label className="block mb-2">
          <span className="text-sm font-medium">Email</span>
          <input type="email" name="email" required className="w-full mt-1 p-3 border rounded-lg" placeholder="you@example.com" />
        </label>

        <label className="block mb-2">
          <span className="text-sm font-medium">Password</span>
          <input id="regPassword" type="password" name="password" required minLength={6} className="w-full mt-1 p-3 border rounded-lg" placeholder="Enter a password" />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Confirm password</span>
          <input id="regConfirm" type="password" name="confirm" required minLength={6} className="w-full mt-1 p-3 border rounded-lg" placeholder="Repeat your password" />
        </label>

        <div className="flex items-center justify-between">
          <button type="submit" className="px-5 py-3 bg-pink-600 text-white rounded-lg font-bold">Register</button>
          <button type="button" onClick={()=>navigate('/login')} className="text-sm text-pink-600">Already have an account?</button>
        </div>
      </form>
    </main>
  )
}
