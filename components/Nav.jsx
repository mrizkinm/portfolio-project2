import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/projects',
    name: 'projects'
  },
  {
    path: '/contact',
    name: 'contact'
  },
]

const Nav = ({styles, linkStyles, underlineStyles, onLinkClick}) => {
  const path = usePathname()
  return (
    <nav className={`${styles}`}>
      {links.map((link, index)=> {
        return (
          <Link href={link.path} key={index} className={`capitalize ${linkStyles}`} onClick={onLinkClick}>
            {link.path === path && (
              <motion.span initial={{y: '-100%'}} animate={{y:0}} transition={{type: 'tween'}} layoutId="underline" className={`${underlineStyles}`}></motion.span>
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav