import './App.css'
import Blog from './components/Blog'
import Content from './components/Content';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {

  return (
    <>
    <main className='h-screen overflow-y-scroll scrollbar-hide'>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Blog name="Paris" desp="City of Love"/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/:name" element={<Content name='1'/>} />
    </Routes>
    <Footer/>
    </main>
    </>
  )
}

export default App
