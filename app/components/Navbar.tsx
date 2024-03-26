import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/static/images/logo/logo.png'

const navItems = [
    { name: 'Menu Card', href: '#services' },
    { name: 'Kaam Dham', href: '#about' },
    { name: 'Sampark', href: '#contact' },
    
]

export default function Navbar() {
  return (
    <nav className='w-full absolute h-24 px-10  z-10 flex justify-between items-center'>
        <div className="">
            <Image src={logo} width={256} height={256} alt='logo' />
        </div>
        <div className="flex gap-8 p-3 items-center">
            <ul className="flex gap-24">
                {navItems.map((item, index) => (
                    <li key={index} >
                        <Link href={item.href}>
                        {item.name}
                        </Link>
                    </li>
                        )
                    )}
            </ul>
        </div>
    </nav>
  )
}
