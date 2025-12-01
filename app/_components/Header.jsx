import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  const Menu=[
    {
      id:1,
      name:'Home',
      link:'/'
    },
    {
      id:2,
      name:'Explore',
      link:'/explore'
    },

    
  ]
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
          <div className='flex items-center gap-10 ' >
        <Image src={'/logo.svg'} alt='logo' width={100} height={80}></Image>
          {Menu.map((item,index)=>(
            <Link key={item.id} href={item.link}>
            <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
            </Link>
          ))}
            <Link href='/getaqueque'>
            <Button className='bg-primary hover:bg-primary/80 text-white'>Get A Queue</Button>            
            </Link>

    </div>
    </div>

  )
}

export default Header
