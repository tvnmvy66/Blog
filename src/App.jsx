import './App.css'
import Blog from './components/Blog'
import Content from './components/Content';
import CreateBlog from './components/CreateBlog';
import Footer from './components/Footer'
import MyBlog from './components/MyBlog';
import Navbar from './components/Navbar'
import Search from './components/Search'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {

  return (
    <>
    <main className='h-screen overflow-y-scroll scrollbar-hide'>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Blog/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/:name" element={<Content/>} />
          <Route path="/newpost" element={<CreateBlog/>} />
          <Route path="/myblog" element={<MyBlog/>} />
    </Routes>
    <Footer/>
    </main>
    </>
  )
}

export default App
