import { React, useState, useEffect} from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function MyBlog() {
  const [myblogData, setmyblogData] = useState(localStorage.getItem('myblog'));

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BURL}/myblog`, { withCredentials: true });
                localStorage.setItem('myblog', JSON.stringify(res.data));
                setmyblogData(res.data); // Update local state
            } catch (err) {
                console.error("Error fetching user", err);
            }
        };

        fetchBlog();
    }, []);

  return (
    <div className="px-2">
      {localStorage.getItem('myblog') ? (myblogData.map((myblogData, index) => (
        <Link to={myblogData?._id} key={index}>
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-18 mb-18 ">
            <img
              src={myblogData?.blogpic}
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{myblogData?.title}</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            {myblogData?.desp}
            </div>
          </article>
        </Link>
      ))): <div className="mt-20">hello err:)</div>}
    </div>
  );
}

export default MyBlog;
