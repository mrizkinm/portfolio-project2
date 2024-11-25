import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-accent py-12">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center">
          <Socials styles="flex gap-x-6 xl:mx-0 mb-4" iconStyles="text-[20px] text-white hover:text-primary transition-all" />
          <div className="text-muted-foreground">
            Copyright &copy; Rizki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer