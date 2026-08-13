import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white font-extrabold">SR</div>
              <div>
                <div className="text-lg font-extrabold text-white">SR Investment</div>
                <div className="text-sm text-slate-400">Secure. Transparent. Reliable.</div>
              </div>
            </div>
            <p className="text-sm text-slate-400">Built for verified investors. Contact us for institutional integrations and white-label partnerships.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Products</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link className="hover:text-white" to="/plans">Investment Plans</Link></li>
              <li><Link className="hover:text-white" to="/withdrawal">Withdrawal</Link></li>
              <li><Link className="hover:text-white" to="/kyc-security">KYC & Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link className="hover:text-white" to="/about">About Us</Link></li>
              <li><Link className="hover:text-white" to="/terms">Terms</Link></li>
              <li><Link className="hover:text-white" to="/privacy">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Stay updated</h4>
            <p className="text-sm text-slate-400 mb-3">Subscribe for updates and platform notices.</p>
            <form onSubmit={(e)=>{ e.preventDefault(); alert('Subscribed (demo)') }} className="flex gap-2">
              <input type="email" required placeholder="Email address" className="flex-1 rounded-lg px-3 py-2 text-slate-900" />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} SR Investment Platform. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <Link className="hover:text-white" to="/support">Support</Link>
            <Link className="hover:text-white" to="/contact">Contact</Link>
            <Link className="hover:text-white" to="/kyc-security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
