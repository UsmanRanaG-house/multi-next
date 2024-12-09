
'use client' 
import React, { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <h1 className="logo">Watch Wonder</h1>
      
      
      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>
      
     
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart style={{ color: 'white', fontSize: '20px' }} />
      </nav>
    </header>
  )
}

export default Header
