import React from 'react'
import { Link } from 'react-scroll'
import Github from './Github'
import Instagram from './Instagram'
import LinkedIn from './LinkedIn'
const FooterRight = () => {
  return (
    <div className='w-full lg:w-6/12'>
        <div className='flex justify-start flex-row'>
            <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <div className='w-full flex flex-col md:items-start items-center justify-center py-10 md:py-20'>
                    <span className="text-dark-gray  mb-3 md:mb-8 text-center md:text-start uppercase md:text-base text-sm font-semibold font-['Raleway']">Useful Links</span>
                    <ul className='list-unstyled md:text-start md:text-base text-sm text-center'>
                        <li>
                            <Link activeClass='about' to="about" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] text-light-gray  py-2 text-md">About Me</Link>
                        </li>
                        <Github/>
                        <LinkedIn/>
                        <Instagram/>
                    </ul>
                </div>
            </div>
            <div className='w-full lg:w-4/12 px-4 ml-auto'>
                <div className='w-full flex flex-col md:items-start items-center justify-center py-10 md:py-20'>
                    <span className="text-dark-gray uppercase md:text-start text-center mb-3 md:mb-8 md:text-base text-sm font-semibold font-['Raleway']">Useful Resources</span>
                    <ul className='list-unstyled md:text-start md:text-base text-sm text-center'>
                        <li>
                            <Link activeClass='contact' to="contact" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] text-light-gray py-2 text-md">Contact Me</Link>
                        </li>
                        <li>
                            <Link activeClass='skills' to="skills" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] text-light-gray py-2 text-md">Skills</Link>
                        </li>
                        <li>
                            <Link activeClass='services' to="services" target='/' smooth={true} offset={50} duration={500} className="cursor-pointer font-['Cambay'] text-light-gray py-2 text-md">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterRight