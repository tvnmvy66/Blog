import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Blog(props) {
  return (
    <>
    <Link to={props.name}>
      <div className="">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-full mx-4 mt-20 mb-18">
          <img src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/blog.jpeg"} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">{props.name}</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{props.desp}</div>
        </article>
      </div>
      <div className="">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-full mx-4 mt-20 mb-18">
          <img src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/blog.jpeg"} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">{props.name}</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{props.desp}</div>
        </article>
      </div><div className="">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-full mx-4 mt-20 mb-18">
          <img src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/blog.jpeg"} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">{props.name}</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{props.desp}</div>
        </article>
      </div><div className="">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-full mx-4 mt-20 mb-18">
          <img src={import.meta.env.VITE_REACT_APP_FURL + "/src/assets/blog.jpeg"} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">{props.name}</h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{props.desp}</div>
        </article>
      </div>
    </Link>
    </>
  )
}

export default Blog
