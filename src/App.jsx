import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Garantia from './components/Garantia'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'

function App() {

  const [formulario, serFormulario] = useState([]) ;

  return (
    <div>
      <Header />
      <Hero />
      <Nosotros />
      <Garantia />
      <Servicios />
      <Contacto />
      <Footer />
      
    </div>
  )
}

export default App
