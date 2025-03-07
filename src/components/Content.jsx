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
  <div className=' mt-18'>
    Content for {blogContent ? <div>{blogContent.title}</div> : null}
  </div>
);
};

export default Content;
