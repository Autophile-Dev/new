import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-dark-gray'>
        <div className='flex items-center h-20 w-full'>
            <div className='flex items-center md:justify-start justify-center mx-10 w-full'>
                <span className="text-white-2 font-['Cambay'] text-base text-center md:text-justify  leading-relaxed ">Copyright © 2023 Waleed Zaheer</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer