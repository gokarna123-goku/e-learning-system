import React from 'react'

const InstructorCard = ({ imgUrl, fullname, position }) => {
    return (
        <div className='w-full h-auto rounded-md hover:shadow ease-in-out duration-500 overflow-hidden cursor-pointer'>
            <img src={imgUrl} alt="instructor img" className="w-full h-[28vh] object-cover object-center" />
            <div className="p-3 text-center">
                <h1 className="text-lg text-neutral-800 font-semibold mb-1">{fullname}</h1>
                <p className="text-base text-neutral-500 font-medium mb-3">{position}</p>
            </div>
        </div>
    )
}

export default InstructorCard