import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './pages/hero/Hero';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Courses from './pages/courses/Courses';
import Resources from './pages/resources/Resources';
import Banner from './pages/banner/Banner';
import Review from './pages/review/Review';
import Instructor from './pages/instructor/Instructor';

function App() {

  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-50 flex flex-col">
          <Navbar />
          <Hero />
          <About />
          <Courses />
          <Resources />
          <Banner />
          <Review />
          <Instructor />
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
