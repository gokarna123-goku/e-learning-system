import React from 'react'
import CourseCard from '../../components/coursecard/CourseCard'
import { FaArrowRightLong } from 'react-icons/fa6'

const Courses = () => {
    return (
        <div className='w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 pb-8'>
            <h1 className='text-center text-3xl font-bold text-violet-600 mb-8'>Our Courses</h1>
            <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                {/* Course Card */}
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png"} title={"React training from Beginner to Advance"} category={"Website"} price={"$120"} rating={"4.7"} totalStudents={"100"} />
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2016/04/21/13/27/computer-1343393_1280.jpg"} title={"Figma from Beginner to Advance Course"} category={"UX/UI Design"} price={"$100"} rating={"4.8"} totalStudents={"100"} />
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2022/06/16/11/14/web-development-7265717_1280.png"} title={"HTML, CSS, & JavaScript from Scratch"} category={"Website"} price={"$89"} rating={"5"} totalStudents={"100"} />
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2022/07/08/05/38/freelance-work-7308505_1280.png"} title={"Become a Full-Stack App Developer"} category={"UX/UI Design"} price={"$160"} rating={"4.9"} totalStudents={"100"} />
            </div>
            <div className="w-full mt-10 flex items-center justify-center">
                <button className="bg-violet-600 hover:bg-transparent text-neutral-50 hover:text-violet-600 border border-violet-600 px-5 py-2 rounded-md ease-in-out duration-300 flex items-center gap-x-2">
                    View All <FaArrowRightLong className='text-sm' />
                </button>
            </div>
        </div>
    )
}

export default Courses