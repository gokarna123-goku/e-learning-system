import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#course", label: "Course" },
        { href: "#resources", label: "Resources" },
        { href: "#instructos", label: "Instructors" },
    ];

    const handleClick = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <nav className='w-full h-[8ch] bg-neutral-100 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50'>
            {/* Logo Section */}
            <Link to="/" className='text-xl text-neutral-800 font-bold mr-16'>
                <span className="text-violet-600">G</span>-LMS
            </Link>
            {/* Toggle button */}
            <button onClick={handleClick} className="flex-1 lg:hidden text-neutral-600 hover:text-violet-600 ease-in-out duration-300 flex items-center justify-end">
                {open ?
                    <LiaTimesSolid className='text-xl' />
                    :
                    <FaBars className='text-xl' />
                }
            </button>

            <div
                className={`flex-1 ${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent sm:bg-blue-50 bg-blue-50 md:shadow-none sm:shadow-md shadow-md rounded-md`}
            >
                <ul className="list-none flex md:items-center sm:items-start items-start gap-x-5 gap-y-1 flex-wrap md:flex-row sm:flex-col flex-col">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link to={item.href} className='hover:text-violet-600 ease-in-out duration-300'>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex md:items-center sm:items-start items-start gap-x-5 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base font-medium text-neutral-800">
                    <button className="bg-violet-600 px-4 py-2 rounded-full border border-violet-600 text-sm text-neutral-50 font-medium hover:bg-violet-600/5 hover:text-violet-600 ease-in-out duration-300">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Nav Items and Button Section 
            <div className={`flex-1 md:flex ${open ? 'flex flex-col' : 'hidden'} items-center md:justify-between justify-end`}>
                 Nav Items 
                <ul className="list-none flex items-center md:flex-row flex-col gap-x-7 gap-y-4 text-base text-neutral-600 font-medium">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link to={item.href} className='hover:text-violet-600 ease-in-out duration-300'>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                 Button 
                <button className="bg-violet-600 px-4 py-2 rounded-full border border-violet-600 text-sm text-neutral-50 font-medium hover:bg-violet-600/5 hover:text-violet-600 ease-in-out duration-300">
                    Get Started
                </button>
            </div> */}
        </nav>
    )
}

export default Navbar