import React from 'react'
import InstructorCard from '../../components/instructorcard/InstructorCard'

const Instructor = () => {
    return (
        <div className='w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 pb-8 mt-[2ch]'>
            <h1 className='text-center text-3xl font-bold text-violet-600 mb-8'>
                Meet Our Instructors
            </h1>
            {/* Instructor Card */}
            <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
                <InstructorCard imgUrl={"https://cdn.pixabay.com/photo/2019/07/26/12/49/learn-4364729_1280.jpg"} fullname={"David Johnson"} position={"Instructor"} />
                <InstructorCard imgUrl={"https://cdn.pixabay.com/photo/2018/09/15/16/56/teacher-3679814_1280.jpg"} fullname={"David Johnson"} position={"Instructor"} />
                <InstructorCard imgUrl={"https://cdn.pixabay.com/photo/2024/04/01/20/17/teacher-8669711_1280.png"} fullname={"David Johnson"} position={"Instructor"} />
                <InstructorCard imgUrl={"https://cdn.pixabay.com/photo/2019/04/07/07/27/woman-4109075_1280.jpg"} fullname={"David Johnson"} position={"Instructor"} />
                <InstructorCard imgUrl={"https://cdn.pixabay.com/photo/2021/03/18/17/09/teacher-6105336_1280.png"} fullname={"David Johnson"} position={"Instructor"} />
            </div>
        </div>
    )
}

export default Instructor