import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Banner = () => {
    return (
        <div className='w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 pb-8'>
            <div className="w-full h-auto bg-zinc-950/90 text-center flex items-center justify-center flex-col space-y-10 rounded-md px-10 py-12">
                <h1 className="text-5xl font-bold text-neutral-100 capitalize leading-tight">
                    Are you ready to start your <br /> learning journey?
                </h1>
                <button className="bg-violet-600 hover:bg-transparent text-neutral-50 border border-violet-600 px-8 py-3 rounded-full ease-in-out duration-300 flex items-center gap-x-2">
                    Enroll Now <FaArrowRightLong className='text-sm' />
                </button>
            </div>
        </div>
    )
}

export default Banner