import React from 'react'

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
              <li><a className="hover:text-white" href="#">Investment Plans</a></li>
              <li><a className="hover:text-white" href="#">Withdrawal</a></li>
              <li><a className="hover:text-white" href="#">KYC & Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a className="hover:text-white" href="#">About Us</a></li>
              <li><a className="hover:text-white" href="#">Terms</a></li>
              <li><a className="hover:text-white" href="#">Privacy</a></li>
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
            <a className="hover:text-white" href="#">Support</a>
            <a className="hover:text-white" href="#">Contact</a>
            <a className="hover:text-white" href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
