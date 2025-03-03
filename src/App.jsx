import './App.css'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Blog name="Paris" desp="City of Love."/>
    <Blog name="Burmingham" desp="The territory of Peaky Blinders."/>
    <Blog name="Elbaf" desp="The Origin of war."/>
    <Footer/>
    </>
  )
}

export default App
