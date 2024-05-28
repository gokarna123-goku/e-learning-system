import React from 'react'
import { FaCalendar } from 'react-icons/fa6'

const ReviewCard = ({ imgUrl, name, date, username, review }) => {
    return (
        <div className='w-full h-auto bg-neutral-200/80 rounded-md p-3 border border-neutral-100'>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-x-2">
                    <img src={imgUrl} alt="student pp" className="w-11 h-11 object-cover object-center rounded-full border border-neutral-200" />
                    <div className="">
                        <p className="text-neutral-700 font-semibold text-base">{name}</p>
                        <p className="text-neutral-500 font-normal text-xs">{username}</p>
                    </div>
                </div>
                {/* date */}
                <div className="flex items-center gap-x-2">
                    <FaCalendar className='text-xs text-neutral-400' />
                    <p className="text-neutral-500 font-normal text-sm">{date}</p>
                </div>
            </div>
            <p className="text-sm text-neutral-500 font-normal">
                {review}
            </p>
        </div>
    )
}

export default ReviewCard