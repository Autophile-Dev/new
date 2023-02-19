import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Element } from 'react-scroll'

const work = () => {
  return (
    <Element id='work' name='work'>
        <section className='w-full bg-dark-gray'>
            <div className='mx-10'>
                <div className='w-full flex flex-col py-10 md:py-20'>
                    <h1 className="font-['Raleway'] mb-8 tracking-tighter  text-2xl text-center md:text-start font-bold md:text-5xl text-text-white-1">Projects</h1>
                    <div className='flex flex-wrap -mx-4'>
                    {/* Card 1 */}
                    <div className='md:w-1/3 p-4'>
                        <div className="h-full rounded-lg  bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
                            {/* Image */}
                            <Image src="/images/ftpt.jpg" alt='ftpt' width={500} height={10} className='lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100'/>
                            <div className='p-6 flex flex-col md:items-start items-center'>
                                <h2 className="font-['Cambay'] text-light-gray text-sm font-medium mb-1">Project-1</h2>
                                <h1 className="font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl text-dark-gray  mb-3">Find the Physiotherapist</h1>
                                <p className="leading-relaxed mb-3 md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                                    This web app interventions can improve both the patient mental and
                                    physical health and provide a mechanism for better communication between patient and physiotherapist.
                                    Languages used in this web app is: HTML, Bootstrap, CSS, JavaScript, PHP, MySQL, Ajax.
                                </p>
                                <button className="bg-slate-300 text-dark-gray font-['Poppins'] rounded-lg hover:bg-black hover:text-light-gray h-12 text-sm w-28"><Link className="text-center items-center" href="https://github.com/Autophile-Dev/Find-Physiotherapist" target="_blank">Go to Code</Link></button>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className='md:w-1/3 p-4'>
                        <div className="h-full rounded-lg  bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
                            {/* Image */}
                            <Image src="/images/Ovs.jpg" alt='ftpt' width={500} height={10} className='lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100'/>
                            <div className='p-6 flex flex-col md:items-start items-center'>
                                <h2 className="font-['Cambay'] text-light-gray text-sm font-medium mb-1">Project-2</h2>
                                <h1 className="font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl text-dark-gray  mb-3">Online Voting System</h1>
                                <p className="leading-relaxed mb-3 md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                                    Online Voting System (OVS) is a web application that allows groups to securely conduct votes and elections. It is more efficient and for increasing interest in its management.
                                    Languages used in this web app is: HTML, Bootstrap, CSS, JavaScript, PHP, MySQL, Ajax.
                                </p>
                                <button className="bg-slate-300 text-dark-gray font-['Poppins'] rounded-lg hover:bg-black hover:text-light-gray h-12 text-sm w-28"><Link className="text-center items-center" href="https://github.com/Autophile-Dev/OnlineVotingSystem" target="_blank">Go to Code</Link></button>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className='md:w-1/3 p-4'>
                        <div className="h-full rounded-lg  bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
                            {/* Image */}
                            <Image src="/images/new-ecom.jpg" alt='Fruits and Vegetables' width={500} height={10} className='lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100'/>
                            <div className='p-6 flex flex-col md:items-start items-center'>
                                <h2 className="font-['Cambay'] text-light-gray text-sm font-medium mb-1">Project-3</h2>
                                <h1 className="font-['Raleway']  tracking-tighter text-base text-center md:text-start font-semibold md:text-xl text-dark-gray  mb-3">Freshnesscom</h1>
                                <p className="leading-relaxed mb-3 md:text-justify font-['Cambay'] text-light-gray mt-2 text-sm md:text-base text-center">
                                    Freshnesscom is an e-commerce web application it will allows peoples to goods and other services over the internet rather than at a brick-and-mortar location. 
                                    Languages used in this web app is: React.js, Next.js, Tailwind CSS, Express.js, MongoDB, GraphQL, TypeScript.
                                </p>
                                <button className="bg-slate-300 text-dark-gray font-['Poppins'] rounded-lg hover:bg-black hover:text-light-gray h-12 text-sm w-28"><Link className="text-center items-center" href="https://github.com/Autophile-Dev/Freshness" target="_blank">Go to Code</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </section>
    </Element>
  )
}

export default work