import React, { useState } from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Nav from './Nav'
import Logo from './Logo'
import Socials from './Socials'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <RiMenu3Line className="cursor-pointer" size={25} />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav styles="flex flex-col items-center gap-y-6" linkStyles="text-2xl" onLinkClick={() => setIsOpen(false)} />
            <Socials styles="flex gap-x-4" iconStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav