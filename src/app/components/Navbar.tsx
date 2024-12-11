import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="header">
        <Link href="#" className="logo">Portfolio</Link>
        <nav className="navbar">
            <Link href="/" >Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Project">Project</Link>
            <Link href="/Contact">Contact</Link>


        </nav>
    </header>

  )
}

export default Navbar

