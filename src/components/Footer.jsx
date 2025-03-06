import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../assets/home.png'
import search from '../assets/search.png'
import add from '../assets/add.png'
import bookmark from '../assets/bookmark.png'
import categories from '../assets/categories.png'
function Footer() {
  return (
    <>
      <footer className='fixed flex justify-evenly w-full bottom-0 left-0 z-50  bg-white h-14 shadow-xl'>
        <div className='flex justify-evenly w-full items-center max-w-100'>
        <Link to="/"><button className="">
          <img className='h-7 w-7  cursor-pointer' src={homeIcon} alt='home'/>
        </button></Link>
        <Link to="/search"><button className="">
          <img className='h-7 w-7  cursor-pointer' src={search} alt='search'/>
        </button></Link>
        <Link to="/newpost"><button className="">
          <img className='h-7 w-7  cursor-pointer' src={add} alt='newpost'/>
        </button></Link>
        <Link to="/bookmark"><button className="">
          <img className='h-7 w-7  cursor-pointer' src={bookmark} alt='bookmark'/>
        </button></Link>
        <Link to="/categories"><button className="">
          <img className='h-6 w-6  cursor-pointer' src={categories} alt='categories'/>
        </button></Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
