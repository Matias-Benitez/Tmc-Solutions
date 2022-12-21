import React from 'react'

function Servicios() {
  return (
    <>
      <div id='servicios'>
        <h2 className='text-center font-bold font-sans 2xl:text-6xl text-5xl md:mb-20 max-sm:text-3xl text-[#122E92] md:py-10 max-sm:pb-5 mt-24'>
              Servicios
          </h2>
      </div>

    <div className='container mb-20 flex justify-center max-sm:grid max-sm:px-4 mx-auto '>
        <div className='flex max-sm:grid'>
            <div className='md:w-1/2 container'>
              <p className='text-start max-sm:text-center font-regular font-sans 2xl:text-3xl text-2xl max-sm:text-lg text-[#4D4D4D] max-sm:pb-10 tracking-wide 2xl:leading-relaxed md:leading-relaxed'>Contamos con suministro de agua potable para industrias y pozos petroleros. Nuestros equipos cuentan con auto tanques de acero al carbón y aluminio con capacidad de 23m3, 27m3 y 30m3. Contamos con cobertura en Tamaulipas, Veracruz y San Luis Potosi.</p>
            </div>
            <div class="md:flex items-center justify-center md:w-1/2">

            <div class="mx-auto ">
                <div class="flex [&:hover>div]:w-10 [&>div:hover]:w-auto max-sm:[&>div:hover]:w-auto">
                <div class="group relative max-sm:h-60 2xl:h-96 md:h-72 2xl:w-[30rem] md:w-[20rem] max-sm-[10rem]: cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                    <img class="h-full object-cover transition-all group-hover:scale-95 " src="https://i.postimg.cc/G2wnqVcm/camion-tmc-1.png" alt="Camión con capacidad de 23m3 TMC Solutions" />
                    <div class="absolute inset-0  group-hover:invisible ">
                    <div class="absolute inset-x-3 max-sm:inset-x-1 bottom-6 max-sm:bottom-2">
                        <div class="flex justify-end gap-3 text-gray-200">
                            <p className='max-sm:text-xs'>23m3</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="group relative max-sm:h-60 2xl:h-96 md:h-72 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                    <img class="h-full object-cover transition-all group-hover:scale-95" src="https://i.postimg.cc/Xvy0K46P/camion-tmc-2.png" alt="Camión con capacidad de 27m3 TMC Solutions" />
                    <div class="absolute inset-0 group-hover:invisible bg-gradient-to-b from-blue-900/50 to-black">
                    <div class="absolute inset-x-3 max-sm:inset-x-1 bottom-6 max-sm:bottom-2">
                        <div class="flex justify-end gap-3 text-gray-200">
                            <p className='max-sm:text-xs'>27m3</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="group relative max-sm:h-60 2xl:h-96 md:h-72 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                    <img class="h-full object-cover transition-all group-hover:scale-95" src="https://i.postimg.cc/Z5QSy023/camion-tmc-3.png" alt="Camión con capacidad de 30m3 TMC Solutions" />
                    <div class="absolute inset-0 group-hover:invisible bg-gradient-to-b from-blue-900/50 to-black">
                    <div class="absolute inset-x-3 max-sm:inset-x-1 bottom-6 max-sm:bottom-2">
                        <div class="flex justify-end gap-3 text-gray-200">
                            <p className='max-sm:text-xs'>30m3</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="group relative max-sm:h-60 2xl:h-96 md:h-72 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                    <img class="h-full object-cover transition-all group-hover:scale-95" src="https://i.postimg.cc/52yJ087b/camion-tmc-4.png" alt="Camión con capacidad de 30m3 TMC Solutions" />
                    <div class="absolute inset-0 group-hover:invisible bg-gradient-to-b from-blue-900/50 to-black">
                    <div class="absolute inse3 max-sm:inset-x-1-x-5 bottom-6 max-sm:bottom-2">
                    <div class="flex justify-end gap-3 text-gray-200">
                            <p className='max-sm:text-xs'>30m3</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Servicios
