import Image from 'next/image'
import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='bg-black w-full h-screen'>
        <div className='flex flex-col items-center justify-center  gap-1 h-full'>
            <Image src="/images/load.png" width={300} height={300} alt="logo" className="object-cover" />
        </div>
    </div>
  )
}


export default LoadingScreen