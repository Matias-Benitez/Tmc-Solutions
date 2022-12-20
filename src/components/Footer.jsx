import React from 'react'
// Icons
import {
    RiLinkedinBoxFill,
    RiInstagramFill,
    RiFacebookCircleFill,
  } from "react-icons/ri";

function Footer() {
  return (
    <div className='w-full h-[12rem] max-sm:h-auto bg-[#4D4D4D] flex items-center text-white max-sm:pb-8 max-sm:grid'>
      <div className='w-1/3 max-sm:w-auto flex justify-center max-sm:py-5'>
        <a href="#">
            <img src="https://i.postimg.cc/HnmHsKKh/logo-horizontal-tmc-solutions.png" alt="" />
        </a>
      </div>
      <div className='w-1/3 max-sm:w-auto flex text-center justify-center max-sm:py-5 2xl:text-xl md:text-xl'>
        <p>Copyright © TMC Solutions | Todos los derechos reservados</p>
      </div>
      <div className='w-1/3 max-sm:w-auto flex justify-center max-sm:py-5  '>
        <a href="" className=' text-3xl text-white px-2'><RiLinkedinBoxFill/></a>
        <a href="" className=' text-3xl text-white px-2'><RiInstagramFill/></a>
        <a href="" className=' text-3xl text-white px-2'><RiFacebookCircleFill/></a>
      </div>
    </div>
  )
}

export default Footer
