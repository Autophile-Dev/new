import React from 'react'
import Image from 'next/image'
import { Element } from 'react-scroll'

const homePage = () => {
  return (
    <Element id='home' name='home'>
    <section className='w-full'>
      <div className='mx-10'>
        <div className='flex md:flex-row flex-col justify-between md:gap-11 gap-4  sm:items-start items-center md:items-center w-full md:pt-32 pt-28'>
          <div className='order-none grow-0 md:w-96 md:h-96 w-44 h-44 shadow-lg rounded-full'>
            <Image className='bg-no-repeat object-cover hover:scale-100 scale-110 transition-all duration-400 md:w-96 bg-auto md:h-96 w-44 h-44 rounded-full' src="/images/profile.jfif" width={324} height={128} alt="Profile Pic"/>
          </div>
          <div  className='order-1 flex flex-col md:items-start sm:gap-6 gap-3 items-center justify-center w-full md:w-900px  '>
            <h1 className="font-['Raleway'] text-2xl text-center md:text-start font-bold md:text-5xl">Hi, I am <span className='text-dark-gray'>Waleed Zaheer</span></h1>
            <span className="font-['Poppins'] text-light-gray text-center md:text-start font-bold text-base sm:text-lg">Full Stack Developer & Digital Marketer</span>
            <p className="text-center md:text-justify flex-wrap text-sm sm:text-base font-['Cambay'] flex text-light-gray text- leading-6">
              Full Stack Developer with 1+ year of experience in 
              designing and developing user interfaces, testing, 
              debugging within different projects. Proven ability 
              in optimizing web functionalities that improve data 
              retrieval and workflow efficiencies. Spends most of my time in coding 
              and keeping myself up-to-date with the latest technologies. Proficient with
              CSS and JavaScript Frameworks and also designated as a local contact for all media relations.
              Spearheaded multimedia marketing campaigns. Designing creating and managing content across multiple 
              communication platforms. Developed presentation, communication and mentoring skills.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Element>
  )
}

export default homePage
