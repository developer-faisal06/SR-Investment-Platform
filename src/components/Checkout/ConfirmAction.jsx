import React from 'react'

export default function ConfirmAction({onConfirm, onCancel}){
  return (
    <div className="flex gap-3">
      <button onClick={onConfirm} className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold">Confirm Deposit</button>
      <button onClick={onCancel} className="px-4 py-2 border rounded-lg">Cancel</button>
    </div>
  )
}
