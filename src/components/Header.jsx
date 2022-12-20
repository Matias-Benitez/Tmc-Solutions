import React, { useState } from "react";
import '../App.css'
// Icons
import {
  RiMenuFill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="w-10 h-10 mb-4 max-sm:h-8 max-sm:w-8">
        <a href="#" className=" ">
          <img src="https://i.postimg.cc/T2jfHd5M/logo-tmc-solutions.png" alt="" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center md:justify-end  gap-8 transition-all duration-500 z-50 md:mr-8 `}>
        <span className="max-sm:mt-10">
        <a href="#nosotros" className="text-lg text-gray-500 inline-block relative transition-all duration-300 before:from-black before:via-black hover:before:w-full hover:before:opacity-100 font-medium hover:font-semibold  hover:text-black ">Nosotros
        </a>
         
        </span>
        <a href="#servicios" className="text-lg text-gray-500 inline-block relative transition-all duration-300 before:from-black before:via-black hover:before:w-full hover:before:opacity-100 font-medium hover:font-semibold  hover:text-black ">Servicios
        </a>
        <a href="#contacto" className="text-lg text-gray-500 inline-block relative transition-all duration-300 before:from-black before:via-black hover:before:w-full hover:before:opacity-100 font-medium hover:font-semibold  hover:text-black ">Contacto
        </a>
        
        
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2">
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </button>
    </header>
  );
};

export default Header;