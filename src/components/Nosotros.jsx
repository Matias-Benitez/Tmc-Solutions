import React from 'react'

function Nosotros() {
  return (
    <div id='nosotros' className='container mx-auto my-28'>
        <div>
            <h2 className='text-center font-bold font-sans 2xl:text-6xl text-5xl max-sm:text-3xl text-[#122E92] md:pb-20 max-sm:pb-5'>
                ¿Quiénes somos?
            </h2>
            <p className='text-center font-regular font-sans 2xl:text-3xl text-2xl max-sm:text-lg text-[#4D4D4D] max-sm:px-8 md:px-20 md:pb-20 max-sm:pb-10'>
            Somos una empresa suministradora de agua potable en los estados de Tamaulipas, Veracruz y San Luis Potosí. Contamos con más de 10 años de experiencia en el sector industrial y petrolero brindando rápidez y un excelente servicio.
            </p>
        </div>
        
        <div className='container md:mx-auto flex max-sm:grid md:gap-40 justify-center md:px-20 max-sm:px-16 pb-20 max-sm:p-4 '>

            <div className='md:w-1/2 h-auto border border-black rounded-3xl bg-[#122E92] 2xl:mx-20 py-8 sombra max-sm:mb-16 max-sm:px-2'>
                <div className='w-full '>
                    <div className='flex text-center justify-center 2xl:my-8 md:my-4'>
                        <img className='w-auto h-full max-sm:h-8 max-sm:w-8 ' src="https://i.postimg.cc/DZLnhFCG/mision-tmc-solutions.png" alt="Misión TMC Solutions" /> 
                        <h3 className='text-3xl 2xl:text-4xl max-sm:text-xl text-white text-center px-4 pt-2'>
                            Misión
                        </h3>
                    </div>
                    <p className='text-center py-4 text-white 2xl:text-2xl 2xl:px-12 text-xl max-sm:text-sm md:px-20 max-sm:px-2 leading-relaxed'>
                        Producir y suministrar agua potable de excelente calidad, construyendo, conservando y protegiendo las instalaciones que integran la red de abastecimiento. A su vez minimizar el impacto negativo de las operaciones en el medio ambiente, realizando una gestión comprometida con el.
                    </p>
                </div>
            </div>

            <div className='md:w-1/2 h-auto max-sm:h-72 border border-black rounded-3xl bg-[#122E92] 2xl:mx-20 py-8 sombra max-sm:mb-16 max-sm:px-2'>
                <div className='w-full '>
                    <div className='flex text-center justify-center 2xl:my-8 md:my-4 pt-2'>
                        <img className='w-auto h-full max-sm:h-5 max-sm:w-8 max-sm:mt-1' src="https://i.postimg.cc/3JK7ss2y/vision-tmc-solutions.png" alt="Visión TMC Solutions" />
                        <h3 className='text-3xl 2xl:text-4xl max-sm:text-xl text-white text-center px-4'>
                            Visión
                        </h3>
                </div>
                    <p className='text-center py-4 text-white 2xl:text-2xl 2xl:px-12 text-xl max-sm:text-sm md:px-20 max-sm:px-2 leading-relaxed'>
                        TMC aspira a ser una empresa de referencia en el ámbito de la prestación de servicio de abastecimiento de agua potable para la industria y pozos petroleros.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nosotros