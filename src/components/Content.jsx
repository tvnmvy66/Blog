// In Content.jsx
import { useParams } from 'react-router-dom';

const Content = () => {
  const { name } = useParams();
  return (
  <div className=' mt-18'>
    Content for {name}
  </div>
);
};

export default Content;
