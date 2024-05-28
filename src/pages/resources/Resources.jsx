import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import ResourcesCard from '../../components/resourcescard/ResourcesCard'

const Resources = () => {
    return (
        <div className='w-full h-auto lg:px-28 md:px-16 sm:px-7 px-4 pb-8 mt-[2ch]'>
            <h1 className='text-center text-3xl font-bold text-violet-600 mb-8'>
                Available Resources
            </h1>
            {/* Resources Cards */}
            <div className="w-full grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
                <ResourcesCard imgUrl={"https://cdn.pixabay.com/photo/2020/08/03/09/51/pencil-5459686_1280.png"} title={"React Note"} />
                <ResourcesCard imgUrl={"https://cdn.pixabay.com/photo/2021/05/08/10/40/pen-6238177_1280.png"} title={"React Note"} />
                <ResourcesCard imgUrl={"https://cdn.pixabay.com/photo/2018/03/18/12/02/notes-3236566_1280.jpg"} title={"React Note"} />
                <ResourcesCard imgUrl={"https://cdn.pixabay.com/photo/2024/02/02/22/05/audio-8549150_1280.jpg"} title={"React Note"} />
                <ResourcesCard imgUrl={"https://cdn.pixabay.com/photo/2020/08/03/09/51/pencil-5459684_1280.png"} title={"React Note"} />
                <ResourcesCard imgUrl={"https://cdn.pixabay.com/photo/2015/06/25/07/14/list-820965_1280.jpg"} title={"React Note"} />
            </div>

            <div className="w-full mt-10 flex items-center justify-center">
                <button className="bg-violet-600 hover:bg-transparent text-neutral-50 hover:text-violet-600 border border-violet-600 px-5 py-2 rounded-md ease-in-out duration-300 flex items-center gap-x-2">
                    View All <FaArrowRightLong className='text-sm' />
                </button>
            </div>
        </div>
    )
}

export default Resources