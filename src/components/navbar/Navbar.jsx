import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full h-[8ch] bg-neutral-100 flex items-center lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50'>
            {/* Logo Section */}
            <Link to="/" className='text-xl text-neutral-800 font-bold mr-16'>
                <span className="text-violet-600">G</span>-LMS
            </Link>
            {/* Nav Items and Button Section */}
            <div className="flex-1 flex items-center justify-between">
                {/* Nav Items */}
                <ul className="list-none flex items-center gap-x-7 gap-y-4 text-base text-neutral-600 font-medium">
                    <li>
                        <Link to="/" className='text-violet-600 ease-in-out duration-300'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='hover:text-violet-600 ease-in-out duration-300'>About</Link>
                    </li>
                    <li>
                        <Link to="/courses" className='hover:text-violet-600 ease-in-out duration-300'>Courses</Link>
                    </li>
                    <li>
                        <Link to="/resources" className='hover:text-violet-600 ease-in-out duration-300'>Resources</Link>
                    </li>
                    <li>
                        <Link to="/instructors" className='hover:text-violet-600 ease-in-out duration-300'>Instructors</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='hover:text-violet-600 ease-in-out duration-300'>Contact</Link>
                    </li>
                </ul>
                {/* Button */}
                <button className="bg-violet-600 px-4 py-2 rounded-full border border-violet-600 text-sm text-neutral-50 font-medium hover:bg-violet-600/5 hover:text-violet-600 ease-in-out duration-300">
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Navbar