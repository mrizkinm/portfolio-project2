import Link from 'next/link';
import React from 'react'
import { RiLinkedinFill, RiGithubFill, RiMailFill, RiInstagramFill } from 'react-icons/ri'

const icons = [
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  },
  {
    path: '/',
    name: <RiMailFill />
  },
  {
    path: '/',
    name: <RiInstagramFill />
  },
];

const Socials = ({styles, iconStyles}) => {
  return (
    <div className={styles}>
      {
        icons.map((icon, index)=> (
          <Link href={icon.path} key={index}><div className={iconStyles}>{icon.name}</div></Link>
        ))
      }
    </div>
  )
}

export default Socials