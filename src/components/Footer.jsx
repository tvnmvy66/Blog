import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <footer className='fixed flex justify-evenly w-full bottom-0 left-0 z-50  bg-gray-200 h-14 '>
        <div className='flex justify-evenly'>
        <Link to="/home"><button className="p-3">
          <img className='h-9 w-9 ' src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/home.svg"} alt='home'/>
        </button></Link>
        <Link to="/"><button className="p-3">
          <img className='h-9 w-9 ' src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/home.svg"} alt='home'/>
        </button></Link>
        <Link to="/"><button className="p-3">
          <img className='h-9 w-9 ' src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/home.svg"} alt='home'/>
        </button></Link>
        <Link to="/"><button className="p-3">
          <img className='h-9 w-9 ' src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/home.svg"} alt='home'/>
        </button></Link>
        <Link to="/"><button className="p-3">
          <img className='h-9 w-9 ' src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/home.svg"} alt='home'/>
        </button></Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
