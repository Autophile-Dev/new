import Image from "next/image"
import { Element } from "react-scroll"

const about = () => {
  return (
    <Element id="about" name="about">
        <section className="w-full bg-dark-gray">
            <div className="mx-10">
                <div className="w-full md:mt-40 mt-20 h-auto flex flex-col items-center py-4 md:flex-row">
                    <div className="flex flex-col md:items-start items-center text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16">
                        <h1 className="font-['Raleway'] mb-8 tracking-tighter  text-2xl text-center md:text-start font-bold md:text-5xl text-text-white-1">About Me</h1>
                        <p className="text-white-2 font-['Cambay'] text-base text-center md:text-justify  leading-relaxed ">I am <span className="text-text-white-1">Waleed Zaheer</span> from Pakistan.
                            1+ year of experience and a recent computer science graduate with a vast array of knowledge in many 
                            different frontend and backend languages and a passion for developing scalable 
                            websites, web applications, mobile applications and working across the full stack. My objective is to 
                            be a best web developer, mobile app developer & digital marketer that I can be and to contribute to the technology industry 
                            all that I know and can do. While a student at University of Central Punjab, 
                            I studied Designing, Logical Thinking and Reasoning, Calculus, Statistics and I believe that 
                            my understanding of problem solving and complex algorithms are also skills that 
                            have and will continue to contribute to my overall success as a developer & digital marketer. As a digital marketer,
                            I have  a passion for leveraging technology and digital channels to promote products or services, 
                            engage audiences, and achieve business goals. Understanding of digital marketing channels and tactics, 
                            including email marketing, social media, search engine optimization (SEO), pay-per-click advertising (PPC), 
                            and content marketing. Also have a knowledge of industry trends, best practices, and emerging technologies in 
                            the digital marketing space.
                        </p>
                    </div>

                    <div className="w-full h-full flex flex-col lg:w-1/3 shadow-lg lg:max-w-lg md:w-1/2">
                        <Image src="/images/hero.jpg" className="object-cover object-center rounded-lg " alt="Hero img" width={700} height={500} />
                    </div>
                </div>
            </div>
        </section>
    </Element>
  )
}

export default about
