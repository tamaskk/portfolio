import React from 'react'
import github from '../assets/graygithub.svg'
import linkedin from '../assets/graylinkedin.svg'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full bg-[#2d2e32]'>
      <div className="h-auto mx-auto max-w-[1100px] px-10 py-20 flex flex-col lg:flex-row items-center justify-between gap-y-10" id="about">

        <h1 className='text-gray-200 text-2xl font-bold text-center lg:text-left'>Made by Tamas Krisztian Kalman. 2023.</h1>

        <div className='flex flex-row gap-10'>
            <Link href="https://github.com/tamaskk" className="cursor-pointer">
            <Image alt="github" src={github} className='w-10' />
            </Link>
            <Link href="https://www.linkedin.com/in/tamaskrisztiankalman" className="cursor-pointer">
            <Image src={linkedin} className='w-10' alt="linked" />
            </Link>
        </div>

        </div>
    </footer>
  )
}

export default Footer
