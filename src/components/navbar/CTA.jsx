import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="relative bg-violet-200 flex flex-col h-[8ch] md:flex-row justify-between md:items-center lg:px-36 md:px-28 sm:px-10 px-6 md:gap-0">
            {/* Logo section */}
            <a href="/index.html" className="text-decoration-none text-2xl font-bold text-indigo-700 mr-12 flex mb-0 md:mt-0 mt-3">
                LOGO
            </a>
            {/* Nav links and buttons */}
            <div
                id="navItems"
                className={`flex-1 ${isNavOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent sm:bg-blue-50 bg-blue-50 md:shadow-none sm:shadow-md shadow-md rounded-md`}
            >
                <ul className="list-none flex md:items-center sm:items-start items-start gap-x-5 gap-y-1 flex-wrap md:flex-row sm:flex-col flex-col">
                    <li>
                        <a href="/index.html" className="text-decoration-none text-lg font-medium text-stone-800 hover:text-stone-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/index.html" className="text-decoration-none text-lg font-normal text-stone-800 hover:text-stone-600">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/index.html" className="text-decoration-none text-lg font-normal text-stone-800 hover:text-stone-600">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/index.html" className="text-decoration-none text-lg font-normal text-stone-800 hover:text-stone-600">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="/index.html" className="text-decoration-none text-lg font-normal text-stone-800 hover:text-stone-600">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="flex md:items-center sm:items-start items-start gap-x-5 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base font-medium text-neutral-800">
                    <a
                        href="#"
                        className="bg-indigo-600 rounded-full px-5 py-1.5 flex items-center justify-center text-stone-100 text-base font-normal"
                    >
                        Create Account
                    </a>
                </div>
            </div>
            <button id="btnToggle" className="block md:hidden absolute top-6 right-10" onClick={toggleNav}>
                {isNavOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
        </nav>
    );
};

export default NavBar;
