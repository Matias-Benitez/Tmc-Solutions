import React from 'react'


function Hero() {
  return (
    <div className='max-sm:h-96 relative '>
        <div className='w-full relative z-20 max-sm:px-10 px-20 h-screen 2xl:pt-72 md:pt-60 max-sm:pt-32'>
            <h1 className='2xl:text-9xl md:text-8xl max-sm:text-4xl text-white font-bold'>
              TMC SOLUTIONS
            </h1>
            <h3 className='font-Aktiv uppercase text-white 2xl:text-3xl md:text-2xl max-sm:text-xs pt-6 max-sm:pt-2'>
                Suministro y transporte de agua potable e industrial
            </h3>
        </div>
        <div className=''>
            <video className='absolute w-full h-full object-cover top-0 left-0' autoPlay loop muted  >
                <source src='./src/video/video.mp4' type='video/mp4' />
            </video>
            <div className='absolute w-full h-full bg-slate-900 opacity-50 mix-blend-overlay top-0 left-0'>

            </div>
        </div>
    </div>
  )
}

export default Hero