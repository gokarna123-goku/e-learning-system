import React from 'react'
import { FaCircle, FaGraduationCap } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='w-full md:h-[calc(100vh-8ch)] bg-gradient-to-br from-violet-100 to-violet-50 lg:px-28 md:px-16 sm:px-7 px-4 mt-[8ch] flex items-center justify-center'>
            <div className="w-full h-auto bg-violet-950 rounded-md p-14 flex items-center justify-between relative overflow-hidden">
                {/* Top Left circle */}
                <FaCircle className='absolute -top-28 -left-28 text-[200px] text-violet-500' />


                <div className='w-[45%] flex flex-col gap-4 text-neutral-400'>
                    <h1 className='text-5xl font-bold leading-tight text-neutral-50 capitalize'>
                        {/* Navigate your <span className="text-neutral-100">learning</span> journey */}
                        Explore, Discover, & Learn
                    </h1>

                    <p className='text-base mb-6'>
                        {/* Learn from anywhere, anytime with G-LMS System */}
                        G-LMS: Your Gateway to Online Learning. Explore our curated courses designed for your success. Learn at your own pace, anywhere, anytime. Join us today and unlock your potential
                    </p>

                    <div className="flex items-center gap-7 mb-10">
                        <button className='bg-violet-700 text-neutral-50 px-4 py-2 rounded-md ease-in-out duration-300'>
                            Explore Courses
                        </button>

                        <button className='bg-transparent border-2 border-violet-600 text-neutral-50 px-4 py-2 rounded-md'>
                            Contact Us
                        </button>
                    </div>

                    <div className="flex items-center gap-x-16">
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

                <div className='w-1/2 flex items-center justify-end relative z-30'>
                    {/* <img src="https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg" alt="hero img" className="w-full aspect-[5/4] rounded-md object-cover object-center" /> */}
                    {/* <img src="https://cdn.pixabay.com/photo/2021/10/17/20/41/online-meeting-6719379_1280.png" alt="hero img" className="w-full aspect-[5/4] rounded-md object-contain object-center" /> */}
                    <img src="https://cdn.pixabay.com/photo/2021/02/05/22/11/laptop-5986208_1280.jpg" alt="hero img" className="w-full aspect-[5/4] rounded-md object-cover object-center" />
                    {/*  */}
                    <div className="absolute top-20 right-20 whitespace-nowrap w-fit h-auto rounded-md px-3 py-1 bg-violet-950/70 text-base text-neutral-100 font-medium">
                        Congratulations on reaching this milestone.
                        {/* Congratulations your admission is completed */}
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