import Image from 'next/image'
import React from 'react'

const DevImg = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" width="400" height="400" alt="Image" />
    </div>
  )
}

export default DevImg