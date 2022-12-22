import { useState, useEffect } from "react";
// Icons
import {
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "react-icons/ri";

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  const [error, setError] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

      //Validación de formulario
  if ([nombre, email, mensaje].includes('')) {
      console.log('test');

      setError(true);
      return;
    } 
    setError(false)

    setNombre('')
    setEmail('')
    setMensaje('')
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
            <div className='text-4xl 2xl:text-5xl max-sm:text-4xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
              <RiMailFill/><span className='text-2xl 2xl:text-3xl md:px-5 text-[#4D4D4D] max-sm:text-lg max-sm:ml-2 '>admin@tmcsolutions.com.mx</span>
            </div>
            <div className='text-4xl 2xl:text-5xl max-sm:text-4xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
              <RiMapPin2Fill/><span className='text-2xl 2xl:text-3xl md:px-5 text-[#4D4D4D] max-sm:text-lg max-sm:ml-2'>Andador San Vicente 109<br /> col. Infonavit Fidel Vázquez</span>
            </div>
            <div className='text-4xl 2xl:text-5xl max-sm:text-4xl text-[#122E92] py-4 max-sm:py-1 md:px-2 mt-6 flex '>
            <RiPhoneFill/><span className='text-2xl 2xl:text-3xl md:px-5 text-[#4D4D4D] max-sm:text-lg max-sm:ml-2 '>833 398 72 20 <br />833 688 0251</span>
            </div>
          </div>

            <form onSubmit={handleSubmit} action="" className='w-1/2 mx-8 2xl:pt-5 max-sm:w-auto max-sm:pt-5'>

            {error && 
          <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md" >
            <p>Todos los campos son obligatorios</p>
            </div>
        }

              <div className='py-4 max-sm:py-3'>
                <input id="nombre" type="text" placeholder='Nombre:' className='rounded-xl py-4 text-xl w-full px-5 focus:ring-1 focus:ring-blue-800' value={nombre} onChange={ (e)=> setNombre(e.target.value)}  name='name' />
              </div>

              <div className='py-4 max-sm:py-3'>
                <input id="email" type="email" placeholder='Correo electrónico:' className='rounded-xl py-4 text-xl w-full px-5 focus:ring-1 focus:ring-blue-800'  name='email' value={email} onChange={ (e)=> setEmail(e.target.value) }/>
              </div>

              <div className='py-4 max-sm:py-3'>
                <textarea id="mensaje" className='rounded-xl pb-20 pt-4 text-xl w-full px-5' placeholder='Mensaje:' value={mensaje} name='message'onChange={ (e)=> setMensaje(e.target.value)}/>
              </div>

              <div className='flex justify-center pt-2'>
                <button className='uppercase bg-indigo-700 transition-all hover:bg-[#0c198a] text-white px-12 py-4 rounded-lg 2xl:text-lg'>
                  Enviar
                </button>
              </div>

            </form>

        </div>
      
    </div>
  )
}

export default Contacto
