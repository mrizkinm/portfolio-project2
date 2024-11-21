"use client"

import React from 'react'
import CountUp from 'react-countup'

const Badge = ({icon, endCountNum, endCountText, text, styles}) => {
  return (
    <div className={`z-10 h-[50px] bg-white dark:backdrop-blur-[44px] shadow-2xl rounded-sm flex items-center gap-x-4 p-3 ${styles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">{text}</div>
      </div>
    </div>
  )
}

export default Badge