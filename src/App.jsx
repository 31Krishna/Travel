import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import About from './Components/About'
import Place from './Components/Place'
import Adventure from './Components/Adventure'
import AdventureCard from './Components/AdventureCard'
import Why from './Components/Why'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {
  return (
    <div className='bg-zinc-600 max-h-screen-xl w-full '>
      <Navbar/>
      <Slider/>
      <About/>
      <Place/>
      <Adventure/>
      <AdventureCard/>
      <Why/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default App