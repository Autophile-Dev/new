import React, {useState} from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <nav className='fixed z-20 bg-black w-full'>
            <div className='w-full'>
                <div className='flex items-center h-20 w-full'>
                    <div className='flex items-center mx-10 justify-between w-full'>
                        <div className='flex justify-between  items-center flex-shrink-0 '>
                            {/* <h1 className='font-bold text-white text-xl cursor-pointer'>
                                Waleed <span className='text-blue-600'>Zaheer</span>
                            </h1> */}
                            <Image src="/images/2.png" width={77} height={62} alt="logo" />
                        </div>
                        <div className='hidden md:block'>
                            <div className='lg:ml-10 ml-0 flex items-center text-white space-x-4'>
                                <Link activeClass='home' to="home" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] text-light-gray px-3 py-2 text-md">Home</Link>
                                <Link activeClass='about' to="about" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] hover:text-light-gray  px-3 py-2 text-md">About me</Link>
                                <Link activeClass='skills' to="skills" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] hover:text-light-gray px-3 py-2 text-md">Skills</Link>
                                <Link activeClass='services' to="services" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] hover:text-light-gray px-3 py-2 text-md">Services</Link>
                                <Link activeClass='work' to="work" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] hover:text-light-gray px-3 py-2 text-md">Projects</Link>
                                <Link activeClass='contact' to="contact" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] hover:text-light-gray px-3 py-2 text-md">Contact</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='mr-14 flex md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} type="button" 
                        className='bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white'
                        aria-controls='mobile-menu' 
                        aria-expanded='false'
                        >
                            <span className='sr-only'> Open main menu</span>
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className='block h-6 w-6' 
                                    stroke='currentColor'
                                    fill="none">
                                        <path 
                                            fill="currentColor" 
                                            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4z"/>
                                            </svg>
                                ):(
                                    <svg className='block h-6 w-6' 
                                        xmlns='http://www.w3.org/2000/svg' 
                                        fill='none' 
                                        viewBox='0 0 24 24' 
                                        stroke='currentColor' 
                                        aria-hidden='true'>
                                    <path 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition 
                show={isOpen} 
                enter="transition ease-out duration-100 transform" 
                enterFrom='opacity-0 scale-95' 
                enterTo='opacity-100 scale-100' 
                leave='transition ease-in duration-75 transform' 
                leaveFrom='opacity-100 scale-100' 
                leaveTo='opacity-0 scale-95'>
                   {(ref) => (
                        <div className='md:hidden sm:ml-10 ml-0  ' id='mobile-menu'>
                            <div ref={ref} className="bg-white mx-4 mr-20 pt-4 text-center pb-4 space-y-1 ">
                                <Link href='/home' activeClass='home' to='home' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-light-gray  font-['Cambay'] text-black  block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                <Link href='/about' activeClass='about' to='about' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-light-gray font-['Cambay'] text-black  block px-3 py-2 rounded-md text-base font-medium">About me</Link>
                                <Link href='/skills' activeClass='skills' to='skills' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-light-gray font-['Cambay'] text-black  block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
                                <Link href='/services' activeClass='services' to='services' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-light-gray font-['Cambay'] text-black block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                                <Link href='/work' activeClass='work' to='work' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-light-gray font-['Cambay'] text-black  block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                                <Link href='/contact' activeClass='contact' to='contact' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-light-gray font-['Cambay'] text-black  block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                                
                            </div>
                        </div>
                   )} 
            </Transition>
        </nav>
    </div>
  )
}

export default Navbar
