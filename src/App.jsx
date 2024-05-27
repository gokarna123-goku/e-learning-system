import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './pages/hero/Hero';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-50 flex flex-col">
          <Navbar />
          <Hero />
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  )
}

export default App
