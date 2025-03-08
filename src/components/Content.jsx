// In Content.jsx
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

const Content = () => {
  const { name } = useParams();
  const [blogContent, setblogContent] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BURL}/blog/${name}`, { withCredentials: true });
                setblogContent(res.data); // Update local state
            } catch (err) {
                console.error("Error fetching user", err);
            }
        };
        fetchUser();
    }, []);
  return (
  <div className=''>
    {blogContent ? 
    <div className='mt-18 flex flex-col items-center'>
    <img src={blogContent.blogpic} alt="blogpic" className='absolute h-65  rounded-2xl p-2'/>
    <h2 className='relative pt-50 pl-5 text-white font-sans'>{blogContent.title}</h2>
    <p className='absolute pt-65 pl-5 pr-5 pb-17 text-black font-sans w-sm '>{blogContent.content}
    </p>
    </div>: null}
  </div>
);
};

export default Content;
