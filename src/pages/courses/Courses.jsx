import React from 'react'
import CourseCard from '../../components/coursecard/CourseCard'
import { FaArrowRightLong } from 'react-icons/fa6'

const Courses = () => {
    return (
        <div className='w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 pb-8'>
            <h1 className='text-center text-3xl font-bold text-violet-600 mb-8'>Our Courses</h1>
            <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                {/* Course Card */}
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg"} title={"React training from Beginner to Advance"} category={"Website"} price={"$120"} rating={"4.7"} totalStudents={"100"} />
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg"} title={"Figma from Beginner to Advance Course"} category={"UX/UI Design"} price={"$100"} rating={"4.8"} totalStudents={"100"} />
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg"} title={"HTML, CSS, & JavaScript from Scratch"} category={"Website"} price={"$89"} rating={"5"} totalStudents={"100"} />
                <CourseCard imgUrl={"https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg"} title={"Become a Full-Stack App Developer"} category={"UX/UI Design"} price={"$160"} rating={"4.9"} totalStudents={"100"} />
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