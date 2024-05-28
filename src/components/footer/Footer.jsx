import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 pb-8 bg-neutral-200">
      <div className="w-full py-14 grid md:grid-cols-5 grid-cols-2 gap-5">

        <div className="w-full col-span-2">
          <Link to="/" className='text-5xl text-neutral-800 font-bold mb-4 block'>
            <span className="text-violet-600">G</span>-LMS
          </Link>
          <p className="text-base text-neutral-500 font-normal mb-3 pr-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe eum adipisci omnis, officiis perspiciatis sequi iusto obcaecati incidunt magni qui neque laboriosam assumenda aliquam.
          </p>
        </div>

        <div className="w-full col-span-2">
          <h2 className="title-font font-medium text-neutral-900 text-lg mb-3">Popular Courses</h2>
          <nav className="list-none">
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                React training from Beginner to Advance
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                UX/UI Course from Scratch
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                Full-Stack Developer
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                Web 3.0 and Metaverse
              </Link>
            </li>
          </nav>
        </div>

        <div className="w-full col-span-1">
          <h2 className="title-font font-medium text-neutral-900 text-lg mb-3">Quick Links</h2>
          <nav className="list-none">
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                About G-LMS
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                Our Team
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                Our Courses
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                FAQs
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-neutral-600 hover:text-violet-600 ease-in-out duration-300">
                Terms & Conditions
              </Link>
            </li>
          </nav>
        </div>
      </div>

      <div className="w-full flex items-center md:justify-between justify-center gap-y-5 border-t border-neutral-400/50 pt-5 flex-wrap">
        <p className="text-neutral-500 text-sm text-center">
          © 2024 G-LMS. All Rights Reserved —
          <Link to="https://youtube.com/@g-techofficial" className="text-violet-600 ml-1" target="_blank" rel="noopener noreferrer">@g-techofficial</Link>
        </p>
        <div className="flex items-center gap-x-3">
          <Link to={"/"} className="text-violet-600">
            <FaFacebookF className='text-lg' />
          </Link>
          <Link to={"/"} className="text-violet-600">
            <FaYoutube className='text-lg' />
          </Link>
          <Link to={"/"} className="text-violet-600">
            <FaInstagram className='text-lg' />
          </Link>
          <Link to={"/"} className="text-violet-600">
            <FaTwitter className='text-lg' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer