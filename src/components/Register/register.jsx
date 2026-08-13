import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB

export default function Register(){
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [sendingOtp, setSendingOtp] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)
  const [skipValidation, setSkipValidation] = useState(false)

  const [form, setForm] = useState(()=>({
    name:'', email:'', phone:'', password:'', terms:false, referral:'',
    otp:'', dob:'', idNumber:'', idFile:null, country:'', address:'', experience:'', risk:'Moderate'
  }))

  const [errors, setErrors] = useState({})

  const fileInputRef = useRef(null)

  // autosave to localStorage
  useEffect(()=>{
    const saved = localStorage.getItem('sr_reg_form')
    if(saved){
      try{ setForm(JSON.parse(saved)) }catch(e){}
    }
  }, [])
  useEffect(()=>{
    localStorage.setItem('sr_reg_form', JSON.stringify(form))
  }, [form])

  useEffect(()=>{
    let t
    if(resendTimer>0){
      t = setTimeout(()=>setResendTimer(resendTimer-1), 1000)
    }
    return ()=>clearTimeout(t)
  }, [resendTimer])

  const update = (patch)=> setForm(f => ({...f, ...patch}))

  const validateStep = (s)=>{
    if(skipValidation) { setErrors({}); return true }
    const e = {}
    if(s===1){
      if(!form.name.trim()) e.name = 'Enter your full name'
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email address'
      if(!/^[0-9+\-() ]{7,20}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
      if(form.password.length < 8) e.password = 'Password must be at least 8 characters'
      if(!/[A-Z]/.test(form.password)) e.password = 'Include an uppercase letter'
      if(!/[0-9]/.test(form.password)) e.password = 'Include a number'
      if(!form.terms) e.terms = 'You must accept Terms & Privacy'
    }
    if(s===2){
      if(!/^[0-9]{4,8}$/.test(form.otp)) e.otp = 'Enter the 4–8 digit OTP sent to your email'
    }
    if(s===3){
      if(!form.dob) e.dob = 'Provide your date of birth'
      if(!form.idNumber.trim()) e.idNumber = 'Enter NID or Passport number'
      if(!form.idFile) e.idFile = 'Upload an ID image (JPG/PNG, max 2MB)'
    }
    if(s===4){
      if(!form.country) e.country = 'Select your country'
      if(!form.address.trim()) e.address = 'Enter your address'
    }
    setErrors(e)
    return Object.keys(e).length===0
  }

  const handleNext = async ()=>{
    if(!validateStep(step)) return
    if(step===1){
      // simulate sending OTP
      setSendingOtp(true)
      setTimeout(()=>{
        setSendingOtp(false)
        setResendTimer(60)
        setStep(2)
      }, 900)
      return
    }
    if(step<4) setStep(step+1)
  }

  const handleBack = ()=> setStep(step>1?step-1:1)

  const handleVerifyOtp = ()=>{
    if(!validateStep(2)) return
    // demo: accept any OTP
    setStep(3)
  }

  const handleFile = (file)=>{
    if(!file) return update({idFile:null})
    const okType = ['image/jpeg','image/png']
    if(!okType.includes(file.type)){
      setErrors(prev=>({...prev, idFile:'Only JPG or PNG allowed'}))
      return
    }
    if(file.size > MAX_FILE_SIZE){
      setErrors(prev=>({...prev, idFile:'File too large (max 2MB)'}))
      return
    }
    setErrors(prev=>{ const c = {...prev}; delete c.idFile; return c })
    update({idFile: {name:file.name, size:file.size, type:file.type}})
  }

  const submitRegistration = ()=>{
    if(!validateStep(4)) return
    // frontend-only: create a simple user record and clear saved form
    const user = { name: form.name, email: form.email, phone: form.phone }
    localStorage.setItem('sr_user', JSON.stringify(user))
    localStorage.setItem('sr_user_logged_in', '1')
    localStorage.removeItem('sr_reg_form')

    // if there's a pending deposit, go to checkout
    const pending = localStorage.getItem('pending_deposit')
    if(pending){
      navigate('/checkout')
      return
    }
    setStep(5)
  }

  return (
    <main className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-md text-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold">Create Account</h1>
        <div className="text-sm text-slate-500">Already have an account? <button onClick={()=>navigate('/login')} className="text-pink-600 font-semibold">Sign in</button></div>
      </div>

      <div className="mb-6">
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div className="h-2 bg-pink-600 rounded-full transition-all" style={{width: `${((Math.min(step,4)-1)/3)*100}%`}} />
        </div>
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <div>Basic</div><div>Verify</div><div>KYC</div><div>Profile</div>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <input id="skipValidation" type="checkbox" checked={skipValidation} onChange={e=>setSkipValidation(e.target.checked)} />
        <label htmlFor="skipValidation" className="text-sm text-slate-600">Skip validation (developer/demo mode)</label>
      </div>

      {step===1 && (
        <section>
          <label className="block mb-3">
            <span className="text-sm font-medium">Full name</span>
            <input value={form.name} onChange={e=>update({name:e.target.value})} className="w-full mt-1 p-3 border rounded-lg" placeholder="Your full name" />
            {errors.name && <div className="text-rose-600 text-sm mt-1">{errors.name}</div>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Email</span>
            <input value={form.email} onChange={e=>update({email:e.target.value})} type="email" className="w-full mt-1 p-3 border rounded-lg" placeholder="you@example.com" />
            {errors.email && <div className="text-rose-600 text-sm mt-1">{errors.email}</div>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Phone</span>
            <input value={form.phone} onChange={e=>update({phone:e.target.value})} type="tel" className="w-full mt-1 p-3 border rounded-lg" placeholder="+8801xxxxxxxxx" />
            {errors.phone && <div className="text-rose-600 text-sm mt-1">{errors.phone}</div>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Password</span>
            <input value={form.password} onChange={e=>update({password:e.target.value})} type="password" className="w-full mt-1 p-3 border rounded-lg" placeholder="Create a strong password" />
            <div className="text-xs text-slate-500 mt-1">At least 8 chars, include uppercase & number</div>
            {errors.password && <div className="text-rose-600 text-sm mt-1">{errors.password}</div>}
          </label>

          <label className="flex items-center gap-3 mb-4">
            <input type="checkbox" checked={form.terms} onChange={e=>update({terms:e.target.checked})} />
            <div className="text-sm">I agree to the <a href="#" className="text-pink-600">Terms</a> & <a href="#" className="text-pink-600">Privacy Policy</a></div>
          </label>
          {errors.terms && <div className="text-rose-600 text-sm mb-3">{errors.terms}</div>}

          <label className="block mb-4">
            <span className="text-sm font-medium">Referral Code (optional)</span>
            <input value={form.referral} onChange={e=>update({referral:e.target.value})} className="w-full mt-1 p-3 border rounded-lg" placeholder="Referral code" />
          </label>

          <div className="flex items-center justify-between">
            <button onClick={handleNext} className="px-5 py-3 bg-pink-600 text-white rounded-lg font-semibold" disabled={sendingOtp}>{sendingOtp? 'Sending OTP...':'Create Account'}</button>
            <button onClick={()=>{ setForm({}); localStorage.removeItem('sr_reg_form') }} className="text-sm text-slate-500">Clear</button>
          </div>
        </section>
      )}

      {step===2 && (
        <section>
          <p className="text-sm text-slate-600 mb-4">A One-Time Password has been sent to <strong>{form.email}</strong>. Enter it below to continue.</p>
          <label className="block mb-3">
            <input value={form.otp} onChange={e=>update({otp:e.target.value})} className="w-full mt-1 p-3 border rounded-lg" placeholder="Enter OTP" />
            {errors.otp && <div className="text-rose-600 text-sm mt-1">{errors.otp}</div>}
          </label>

          <div className="flex items-center gap-3">
            <button onClick={handleVerifyOtp} className="px-5 py-3 bg-pink-600 text-white rounded-lg font-semibold">Verify Account</button>
            <button onClick={handleBack} className="px-4 py-3 border rounded-lg">Back</button>
            <div className="ml-auto text-sm text-slate-500">
              {resendTimer>0 ? `Resend in ${resendTimer}s` : <button onClick={()=>{ setResendTimer(60) }} className="text-pink-600">Resend OTP</button>}
            </div>
          </div>
        </section>
      )}

      {step===3 && (
        <section>
          <label className="block mb-3">
            <span className="text-sm font-medium">Date of Birth</span>
            <input type="date" value={form.dob} onChange={e=>update({dob:e.target.value})} className="w-full mt-1 p-3 border rounded-lg" />
            {errors.dob && <div className="text-rose-600 text-sm mt-1">{errors.dob}</div>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">NID / Passport Number</span>
            <input value={form.idNumber} onChange={e=>update({idNumber:e.target.value})} className="w-full mt-1 p-3 border rounded-lg" placeholder="NID or Passport" />
            {errors.idNumber && <div className="text-rose-600 text-sm mt-1">{errors.idNumber}</div>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Upload ID (JPG/PNG, max 2MB)</span>
            <input ref={fileInputRef} type="file" accept="image/png,image/jpeg" onChange={e=>handleFile(e.target.files[0])} className="w-full mt-1" />
            {form.idFile && <div className="text-sm text-slate-600 mt-2">Selected: {form.idFile.name} ({Math.round(form.idFile.size/1024)} KB)</div>}
            {errors.idFile && <div className="text-rose-600 text-sm mt-1">{errors.idFile}</div>}
          </label>

          <div className="flex items-center gap-3">
            <button onClick={()=>{ if(!validateStep(3)) return; setStep(4) }} className="px-5 py-3 bg-pink-600 text-white rounded-lg font-semibold">Submit Verification</button>
            <button onClick={handleBack} className="px-4 py-3 border rounded-lg">Back</button>
          </div>
        </section>
      )}

      {step===4 && (
        <section>
          <label className="block mb-3">
            <span className="text-sm font-medium">Country</span>
            <input value={form.country} onChange={e=>update({country:e.target.value})} className="w-full mt-1 p-3 border rounded-lg" placeholder="Country" />
            {errors.country && <div className="text-rose-600 text-sm mt-1">{errors.country}</div>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Address</span>
            <input value={form.address} onChange={e=>update({address:e.target.value})} className="w-full mt-1 p-3 border rounded-lg" placeholder="Address" />
            {errors.address && <div className="text-rose-600 text-sm mt-1">{errors.address}</div>}
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium">Investment Experience</span>
            <select value={form.experience} onChange={e=>update({experience:e.target.value})} className="w-full mt-1 p-3 border rounded-lg">
              <option value="">Select experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-sm font-medium">Risk Level</span>
            <select value={form.risk} onChange={e=>update({risk:e.target.value})} className="w-full mt-1 p-3 border rounded-lg">
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </label>

          <div className="mb-4 text-xs text-slate-500">reCAPTCHA placeholder — integrate real reCAPTCHA in production.</div>

          <div className="flex items-center gap-3">
            <button onClick={submitRegistration} className="px-5 py-3 bg-emerald-600 text-white rounded-lg font-semibold">Complete Registration</button>
            <button onClick={handleBack} className="px-4 py-3 border rounded-lg">Back</button>
          </div>
        </section>
      )}

      {step===5 && (
        <section className="text-center py-10">
          <div className="text-3xl font-extrabold text-emerald-600">Registration Submitted</div>
          <p className="mt-3 text-slate-600">Thank you. Your details are submitted and pending verification. You will receive an email when your account is verified.</p>
          <div className="mt-6 flex justify-center">
            <button onClick={()=>navigate('/login')} className="px-5 py-3 bg-pink-600 text-white rounded-lg font-semibold">Go to Login</button>
          </div>
        </section>
      )}
    </main>
  )
}
