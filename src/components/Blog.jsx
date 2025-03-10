import { React, useState, useEffect} from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog() {
  const [blogData, setblogData] = useState([localStorage.getItem('blog-list')]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BURL}/blog`, { withCredentials: true });
                localStorage.setItem('blog-list', JSON.stringify(res.data));
                setblogData(res.data); // Update local state
            } catch (err) {
                console.error("Error fetching user", err);
            }
        };

        fetchBlog();
    }, []);

  return (
    <div className="px-2">
      {localStorage.getItem('blog-list') ? (blogData.map((blogData, index) => (
        <Link to={blogData?._id} key={index}>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-18 mb-18 ">
            <img
              src={blogData?.blogpic}
              alt={blogData?.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{blogData?.title}</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            {blogData?.desp}
            </div>
          </article>
        </Link>
      ))) : console.log('null')}
    </div>
  );
}

export default Blog;
