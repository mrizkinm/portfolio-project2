"use client"

import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })

    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
    <header className={`${header
    ? 'py-3 bg-white shadow-lg dark:bg-accent'
    : 'py-3 dark:bg-transparent'}
    sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-green-50'}`}>
      <div className="container px-5 mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav styles="hidden md:flex gap-x-8 items-center" linkStyles="relative hover:text-primary transition-all" underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"/>
            <ThemeToggle />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header