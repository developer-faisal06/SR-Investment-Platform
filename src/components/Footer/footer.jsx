import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-8 bg-white/0 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} SR Investment. All rights reserved.</p>
      </div>
    </footer>
  )
}
