import React, {useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Formik } from 'formik'
import {
    RiMailFill,
    RiMapPin2Fill,
    RiPhoneFill,
  } from "react-icons/ri";

const Contacto = () => {
    const [state, handleSubmit] = useForm("mvonpvzb");
    
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
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
        
        <Formik
            initialValues={{
                nombre: '',
                correo: '',
                mensaje: ''
            }}
            validate={(valores) => {
                let errores = {};
                
                //Validación nombre
                if(!valores.nombre){
                    errores.nombre = 'Por favor ingresá tu nombre';
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre = 'El nombre solo puede contener letras y espacios.'
                }

                //Validación correo
                if(!valores.correo){
                    errores.correo = 'Por favor ingresá tu correo electrónico';
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                    errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                }

                //Validación de texto
                if(!valores.mensaje){
                    errores.mensaje = 'Por favor ingresá el mensaje';
                }

                return errores;
            }}
            onSubmit={(valores, {resetForm})=>{
                resetForm();
                console.log("formulario enviado");
                cambiarFormularioEnviado(true);
                setTimeout(()=> cambiarFormularioEnviado(false), 3000); 
            }}
        >
            {({values, errors, touched, handleSubmit, handleChange, handleBlur})=> (
                
                <form action="https://formspree.io/f/mvonpvzb" method="POST" onSubmit={handleSubmit} className='w-1/2 mx-8 2xl:pt-5 max-sm:w-auto max-sm:pt-5'>
                    <div className='py-4 max-sm:py-3'>
                        
                        <input className='rounded-xl py-4 text-xl w-full px-5 mb-1' 
                        type="text" 
                        id='nombre' 
                        name='nombre' 
                        placeholder='Nombre' 
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {touched.nombre && errors.nombre && <div className='text-red-600 text-lg max-sm:text-sm font-semibold pl-2'>{errors.nombre}</div>}
                    </div>
                    <div>
                        
                        <input className='rounded-xl py-4 text-xl w-full px-5 my-1' 
                        type="email" 
                        id='correo' 
                        name='correo' 
                        placeholder='Correo' 
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {touched.correo && errors.correo && <div className='text-red-600 text-lg max-sm:text-sm font-semibold pl-2'>{errors.correo}</div>}
                    </div>
                    <div>
                        
                        <textarea className='rounded-xl pb-32 pt-4 text-xl w-full px-5 mt-4 mb-1'
                        type="text" 
                        id='mensaje' 
                        name='mensaje' 
                        placeholder='Mensaje' 
                        value={values.mensaje}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {touched.mensaje && errors.mensaje && <div className='text-red-600 text-lg max-sm:text-sm font-semibold pl-2'>{errors.mensaje}</div>}
                    </div>
                    {formularioEnviado && <p className='text-green-600 text-lg max-sm:text-sm font-semibold pl-2 text-center'>Formulario enviado con exito</p>}
                    <div className='flex justify-center pt-2'>
                        <button className='uppercase bg-indigo-700 transition-all hover:bg-[#0c198a] text-white px-12 py-4 rounded-lg 2xl:text-lg' type='submit'>
                            Enviar
                        </button>
                    </div>
                    
                </form>
                )}
        </Formik>
        </div>
    </div>
  )
}

export default Contacto