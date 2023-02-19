import Navbar from '@/components/Navbar'
import Head from 'next/head'
import HomePage from '@/pages/homePage'
import About from './about'
import Skills from './skills'
import Services from './services'
import Contact from './contact'
import Work from './work'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <section className='w-full'>
    <div className=''>
      <Head>
        <title>Waleed Zaheer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
    </section>
  )
}