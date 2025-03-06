import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Blogpic from '../assets/blog.jpeg';

function Blog(props) {
  const blogData = [
    { name: props.name, desp: props.desp },
    { name: props.name, desp: props.desp },
    { name: props.name, desp: props.desp },
    { name: props.name, desp: props.desp },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2 mt-16 mb-16">
      {blogData.map((blog, index) => (
        <Link to={blog.name} key={index}>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={Blogpic} alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.name}</div>
                <p class="text-gray-700 text-base">
                {props.desp} 
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
