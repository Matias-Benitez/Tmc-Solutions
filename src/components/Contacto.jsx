import React from 'react'
// Icons
import {
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "react-icons/ri";

const Contacto = () => {
  return (
    <div id='contacto' className='container md:px-24 max-sm:px-4 pt-10 mx-auto mb-40'>
        <div>
            <h2 className='text-center font-bold font-sans 2xl:text-6xl text-5xl md:mb-20 max-sm:text-3xl text-[#122E92] md:pt-10 max-sm:pb-16'>
              Contacto
            </h2>
        </div>

        <div className='bg-[#E3E3E3] rounded-3xl w-full h-auto flex py-5 max-sm:grid'>
          <div className='w-1/2 mx-8 max-sm:w-auto'>
            <div className='text-4xl 2xl:text-5xl max-sm:text-4xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
              <RiMailFill/><span className='text-2xl 2xl:text-3xl md:px-5 text-[#4D4D4D] max-sm:text-lg max-sm:ml-2 '>ejemplo@correo.com</span>
            </div>
            <div className='text-4xl 2xl:text-5xl max-sm:text-4xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
              <RiMapPin2Fill/><span className='text-2xl 2xl:text-3xl md:px-5 text-[#4D4D4D] max-sm:text-lg max-sm:ml-2'>Andador San Vicente 109<br /> col. Infonavit Fidel Vázquez</span>
            </div>
            <div className='text-4xl 2xl:text-5xl max-sm:text-4xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
            <RiPhoneFill/><span className='text-2xl 2xl:text-3xl md:px-5 text-[#4D4D4D] max-sm:text-lg max-sm:ml-2 '>833 398 72 20 <br />833 688 0251</span>
            </div>
          </div>
            <form action="" className='w-1/2 mx-8 2xl:pt-5 max-sm:w-auto max-sm:pt-5'>
              <div className='py-4 max-sm:py-3'>
                <input className='rounded-xl py-4 text-xl w-full px-5 focus:ring-1 focus:ring-blue-800' type="text" placeholder='Nombre:'/>
              </div>
              <div className='py-4 max-sm:py-3'>
                <input className='rounded-xl py-4 text-xl w-full px-5 focus:ring-1 focus:ring-blue-800' type="email" placeholder='Correo electrónico:'/>
              </div>
              <div className='py-4 max-sm:py-3'>
                <textarea className='rounded-xl pb-20 pt-4 text-xl w-full px-5  'placeholder='Mensaje:'/>
              </div>
              <div className='flex justify-center pt-2'>
                <button className='uppercase bg-[#0C2B8A] text-white px-12 py-4 rounded-lg 2xl:text-lg'>
                  Enviar
                </button>
              </div>
            </form>
        </div>
      
    </div>
  )
}

export default Contacto
