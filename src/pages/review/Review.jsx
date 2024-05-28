import React from 'react'
import ReviewCard from '../../components/reviewcard/ReviewCard'

const Review = () => {
    return (
        <div className='w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 pb-8 mt-[2ch]'>
            <h1 className='text-center text-3xl font-bold text-violet-600 mb-8'>
                Our Students Review
            </h1>
            {/* Review Cards */}
            <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                <ReviewCard imgUrl={"https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg"} name={"John Doe"} username={"@john"} review={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora?"} date={"2022-01-01"} />
                <ReviewCard imgUrl={"https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg"} name={"John Doe"} username={"@john"} review={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora?"} date={"2022-01-01"} />
                <ReviewCard imgUrl={"https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266_1280.jpg"} name={"John Doe"} username={"@john"} review={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora?"} date={"2022-01-01"} />
            </div>
        </div>
    )
}

export default Review