import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
    RiMailFill,
    RiMapPin2Fill,
    RiPhoneFill,
  } from "react-icons/ri";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqyaopw");
  if (state.succeeded) {
      return <div className='container md:px-24 max-sm:px-4 pt-10 mx-auto mb-40'>
        <div>
            <h2 className='text-center font-bold font-sans 2xl:text-6xl text-5xl md:mb-20 max-sm:text-3xl text-[#122E92] md:pt-10 max-sm:pb-16'>
              Contacto
            </h2>
        </div>
      <div className='bg-[#E3E3E3] rounded-3xl w-full h-auto flex py-5 max-sm:grid'>
        <div className='bg-[#E3E3E3] rounded-3xl w-full h-auto flex py-5 max-sm:grid'>
            <div className='w-1/2 mx-8 max-sm:w-auto'>
                <div className='text-4xl 2xl:text-5xl max-sm:text-3xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
                    <RiMailFill/><span className='text-2xl 2xl:text-2xl 2xl:mt-2 md:px-5 text-[#4D4D4D] max-sm:text-sm max-sm:ml-2 '>admin@tmc-solutions.com.mx</span>
                    </div>
                    <div className='text-4xl 2xl:text-5xl max-sm:text-3xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
                    <RiMapPin2Fill/><span className='text-2xl 2xl:text-2xl 2xl:mt-2 md:px-5 text-[#4D4D4D] max-sm:text-sm max-sm:ml-2'>Andador San Vicente 109<br /> col. Infonavit Fidel Vázquez</span>
                    </div>
                    <div className='text-4xl 2xl:text-5xl max-sm:text-3xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
                    <RiPhoneFill/><span className='text-2xl 2xl:text-2xl md:px-5 text-[#4D4D4D] max-sm:text-sm max-sm:ml-2 '>833 398 72 20 <br />833 688 0251</span>
                    </div>
                </div>
                <div className='w-2/3 mr-24 max-sm:mx-8 max-sm:my-6 max-sm:pt-10 max-sm:w-auto md:my-auto'>
                     <p className='text-green-600 bg-white rounded-3xl py-8 text-3xl max-sm:text-sm font-semibold  text-center '>Formulario enviado con exito</p>
                </div>
            </div>
        </div>
      </div>
  }

  
  return (

    <div id='contacto' className='container md:px-24 max-sm:px-4 pt-10 mx-auto mb-40'>
        <div>
            <h2 className='text-center font-bold font-sans 2xl:text-6xl text-5xl md:mb-20 max-sm:text-3xl text-[#122E92] md:pt-10 max-sm:pb-16'>
              Contacto
            </h2>
        </div>
        <div className='bg-[#E3E3E3] rounded-3xl w-full h-auto flex py-5 max-sm:grid'>
        <div className='w-1/2 mx-8 max-sm:w-auto'>
            <div className='text-4xl 2xl:text-5xl max-sm:text-3xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
              <RiMailFill/><span className='text-2xl 2xl:text-2xl 2xl:mt-2 md:px-5 text-[#4D4D4D] max-sm:text-sm max-sm:ml-2 '>admin@tmc-solutions.com.mx</span>
            </div>
            <div className='text-4xl 2xl:text-5xl max-sm:text-3xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
              <RiMapPin2Fill/><span className='text-2xl 2xl:text-2xl 2xl:mt-2 md:px-5 text-[#4D4D4D] max-sm:text-sm max-sm:ml-2'>Andador San Vicente 109<br /> col. Infonavit Fidel Vázquez</span>
            </div>
            <div className='text-4xl 2xl:text-5xl max-sm:text-3xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
            <RiPhoneFill/><span className='text-2xl 2xl:text-2xl md:px-5 text-[#4D4D4D] max-sm:text-sm max-sm:ml-2 '>833 398 72 20 <br />833 688 0251</span>
            </div>
          </div>

            <form onSubmit={handleSubmit} className='w-1/2 mx-8 2xl:pt-5 max-sm:w-auto max-sm:pt-5'>
            <div className='py-4 max-sm:py-3'>
                    <input className='rounded-xl py-4 text-xl w-full px-5 mb-1'
                        id="text"
                        type="text" 
                        name='nombre' 
                        placeholder='Nombre' 
                        title='Por favor ingresá tu nombre'
                        required
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
            <div className='py-4 max-sm:py-3'>
                    <input className='rounded-xl py-4 text-xl w-full px-5 mb-1'
                        id="email"
                        type="email" 
                        name='correo' 
                        placeholder='Correo' 
                        title='Por favor ingresá tu correo'
                        required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
            <textarea className='rounded-xl pb-32 pt-4 text-xl w-full px-5 mt-4 mb-1'
                 type="text" 
                 id='mensaje' 
                 name='mensaje' 
                 placeholder='Mensaje'
                 title='Por favor ingresá un mensaje'
                 required
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <div className='flex justify-center pt-2'>
                <button className='uppercase bg-indigo-700 transition-all hover:bg-[#0c198a] text-white px-12 py-4 rounded-lg 2xl:text-lg' 
                type='submit' disabled={state.submitting}>
                    Enviar
                </button>
                    </div>
            
            </form>
            </div>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;