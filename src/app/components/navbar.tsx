import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 bg-secondary text-primary rounded-lg">
    <div className="relative flex items-center py-[2.125rem]">
    <h1><Link href="/" className="flex-none text-slate-900 text-3xl font-extrabold">Pomotodo</Link></h1> 
    <div className="ml-auto hidden lg:flex lg:items-center">
    <Link href="/" className="ml-8 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link>
    <Link href="/leaderboard" className='ml-8 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Leaderboard</Link>
    </div>
    </div>
    </nav>
  )
}
