import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className='flex justify-between items-center rounded-lg  px-8 py-6 lg:px-16 md:py-8 border-black border'>
        <div className="logo"><span className='font-bold text-2xl md:text-3xl lg:text-4xl'>Pomotoro</span></div>
        <div className="nav-links collapse md:visible">
          <ul className='flex items-center gap-4'>
            <Link href="/"><li className='font-semibold text-lg'>Home</li></Link>
            <Link href="/leaderboard"><li className='font-semibold text-lg'>Leaderboard</li></Link>
            <Link href="/leaderboard"><li className='font-semibold text-lg'>Profile</li></Link>
            <Link href="/leaderboard"><li className='font-semibold text-lg bg-black text-white rounded-md px-4 py-1'>Start</li></Link>
          </ul>
        </div>
    </nav>
  )
}
