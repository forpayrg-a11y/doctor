import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <Image src={'/logo.svg'} alt='logo' width={180} height={80}></Image>
    </div>
  )
}

export default Header
