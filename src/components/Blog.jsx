import React from 'react'
import '../App.css'

function Blog(props) {
  return (
    <div className="">
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-auto mx-4 mt-20 mb-18">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">{props.name}</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{props.desp}</div> 
</article>
</div>)
}

export default Blog
