import React from 'react'
import AboutImg from "../../assets/about.png"
import { FaArrowRightLong, FaBook, FaExplosion, FaTeamspeak } from 'react-icons/fa6'

const About = () => {
    return (
        <div className='w-full h-auto lg:pr-28 md:pr-16 sm:pr-7 pr-4 flex items-center justify-between gap-7'>
            {/* About Img section */}
            <div className="w-[45%] flex items-center justify-start">
                <img src={AboutImg} alt="about img" className="w-full h-auto object-cover object-center rounded-md" />
            </div>
            {/* About Content section */}
            <div className="w-[45%] h-auto">
                <h1 className="text-3xl font-bold text-violet-600 mb-3">About Us</h1>
                <p className="text-base text-neutral-500 mb-4">
                    We are providing the best service in the country. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi, nihil ipsum officiis autem nam expedita consequatur accusantium totam delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptates!
                </p>
                {/* Why us */}
                <p className="text-base text-neutral-500 font-semibold mb-3">
                    Why Us?
                </p>
                <div className="w-full grid grid-cols-4 gap-7 mb-8">
                    <div className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-neutral-200/60 rounded-md px-3 py-5">
                        <div className="w-16 h-16 rounded-full bg-zinc-950/10 flex items-center justify-center text-3xl">
                            <FaBook />
                        </div>
                        <p className="text-base text-neutral-700 font-semibold text-center">
                            Online Courses
                        </p>
                    </div>
                    <div className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-neutral-200/60 rounded-md px-3 py-5">
                        <div className="w-16 h-16 rounded-full bg-zinc-950/10 flex items-center justify-center text-3xl">
                            <FaTeamspeak />
                        </div>
                        <p className="text-base text-neutral-700 font-semibold text-center">
                            Expert Instructors
                        </p>
                    </div>
                    <div className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-neutral-200/60 rounded-md px-3 py-5">
                        <div className="w-16 h-16 rounded-full bg-zinc-950/10 flex items-center justify-center text-3xl">
                            <FaExplosion />
                        </div>
                        <p className="text-base text-neutral-700 font-semibold text-center">
                            Sufficient Resources
                        </p>
                    </div>
                </div>
                {/* Button section */}
                <button className="bg-violet-600 hover:bg-transparent text-neutral-50 hover:text-violet-600 border border-violet-600 px-5 py-2 rounded-md ease-in-out duration-300 flex items-center gap-x-2">
                    Learn More <FaArrowRightLong className='text-sm' />
                </button>
            </div>
        </div>
    )
}

export default About