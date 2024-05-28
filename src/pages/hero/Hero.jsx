import React from 'react'
import { FaArrowRightLong, FaCircle, FaGraduationCap } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='w-full md:h-[calc(100vh-8ch)] bg-gradient-to-br from-violet-100 to-violet-50 lg:px-28 md:px-16 sm:px-7 px-4 mt-[8ch] flex items-center justify-center'>
            <div className="w-full h-auto bg-violet-950 rounded-md md:p-14 sm:p-10 p-8 flex items-center justify-between relative overflow-hidden flex-wrap">
                {/* Top Left circle */}
                <FaCircle className='absolute -top-28 -left-28 text-[200px] text-violet-500' />

                <div className='md:w-[45%] w-full flex flex-col gap-4 text-neutral-400 z-30 md:mb-0 mb-10'>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-neutral-50 capitalize'>
                        {/* Navigate your <span className="text-neutral-100">learning</span> journey */}
                        Explore, Discover, & Learn
                    </h1>

                    <p className='md:text-base text-sm md:mb-6 mb-4'>
                        G-LMS: Your Gateway to Online Learning. Explore our curated courses designed for your success. Learn at your own pace, anywhere, anytime. Join us today and unlock your potential
                    </p>

                    <div className="flex items-center md:gap-7 gap-5 md:mb-10 mb-4 flex-wrap">
                        <button className='bg-violet-700 text-neutral-50 px-4 py-2 rounded-md ease-in-out duration-300'>
                            Explore Courses
                        </button>

                        <button className='bg-transparent border-2 border-violet-600 text-neutral-50 px-4 py-2 rounded-md flex items-center gap-x-2'>
                            Apply Now <FaArrowRightLong className='text-sm' />
                        </button>
                    </div>

                    <div className="flex items-center gap-x-16 gap-y-6 flex-wrap">
                        <div className="flex flex-col items-center">
                            <h3 className='text-2xl font-bold text-neutral-50'>
                                1K+
                            </h3>
                            <p className='text-neutral-400'>
                                Students
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h3 className='text-2xl font-bold text-neutral-50'>
                                100+
                            </h3>
                            <p className='text-neutral-400'>
                                Courses
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h3 className='text-2xl font-bold text-neutral-50'>
                                100+
                            </h3>
                            <p className='text-neutral-400'>
                                Instructors
                            </p>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 w-full flex items-center justify-end relative z-30'>
                    <img src="https://cdn.pixabay.com/photo/2021/02/05/22/11/laptop-5986208_1280.jpg" alt="hero img" className="w-full aspect-[5/4] rounded-md object-cover object-center" />
                    {/*  */}
                    <div className="absolute top-20 right-20 whitespace-nowrap w-fit h-auto rounded-md px-3 py-1 bg-violet-950/70 text-base text-neutral-100 font-medium md:block hidden">
                        Congratulations on reaching this milestone.
                    </div>

                    {/* Graduation cap */}
                    <FaGraduationCap className='absolute -top-10 -left-10 z-30 text-[100px] text-violet-500' />
                </div>

                {/* Bottom Right circle */}
                <FaCircle className='absolute -bottom-20 -right-20 text-[200px] text-red-500' />

            </div>

            {/* Pickup line website links */}
            {/* https://www.theknot.com/content/pick-up-lines */}

        </div >
    )
}

export default Hero