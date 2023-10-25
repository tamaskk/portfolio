import React from 'react'
import github from '../assets/graygithub.svg'
import linkedin from '../assets/graylinkedin.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#2d2e32]'>
      <div className="h-auto mx-auto max-w-[1100px] px-10 py-32 flex flex-col lg:flex-row items-center justify-between gap-y-10" id="about">

        <h1 className='text-gray-200 text-4xl font-bold text-center lg:text-left'>Made by Tamas Krisztian Kalman. 2023.</h1>

        <div className='flex flex-row gap-10'>
            <NavLink to="https://github.com/tamaskk" className="cursor-pointer">
            <img src={github} className='w-10' alt="git" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/tamaskrisztiankalman" className="cursor-pointer">
            <img src={linkedin} className='w-10' alt="linked" />
            </NavLink>
        </div>

        </div>
    </footer>
  )
}

export default Footer
