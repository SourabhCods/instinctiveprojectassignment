"use client";
import React from 'react'
import Ruler from './Ruler';

const TimeLine = () => {
  return (
    <>  
        <div className='h-auto w-[96%] border border-t-white/50 border-l-white border-r-white pl-5 bg-stone-800 absolute top-170 left-5'>
            <img src={'./video.png'} className='h-[4rem]'/>
        </div>
        <div className='h-auto w-[96%] border border-white border-t-white/50 flex flex-col gap-7 absolute top-186.5 left-5'>
            <div className='flex justify-between items-center'>
                <p className='text-white text-2xl ml-5 mt-5'>Camera List</p>
                <Ruler/>
            </div>
            <div className='flex justify-left items-center'>
                <img src={'./camera.png'} className='h-[1rem] w-[1rem] ml-5 mr-10'/>
                <p className='text-white'>Camera-1</p>
                <img src={'./accessmarker.png'} className='relative left-[53rem] h-[2rem] w-[15rem]'/>
            </div>
            <div className='flex justify-left items-center'>
                <img src={'./camera.png'} className='h-[1rem] w-[1rem] ml-5 mr-10'/>
                <p className='text-white'>Camera-2</p>
                <img src={'./facemarker.png'} className='relative left-[25rem] h-[2rem] w-[12rem]'/>
            </div>
            <div className='flex justify-left items-center'>
                <img src={'./camera.png'} className='h-[1rem] w-[1rem] ml-5 mr-10'/>
                <p className='text-white'>Camera-3</p>
                <img src={'./eventsmarker.png'} className='relative left-[35rem] h-[2rem] w-[12rem]'/>
                <img src={'./gunmarker.png'} className='relative left-[67rem] h-[2rem] w-[10rem]'/>
            </div>
            <div className='flex justify-left items-center'>
                <img src={'./camera.png'} className='h-[1rem] w-[1rem] ml-5 mr-10'/>
                <p className='text-white'>Camera-4</p>
                <img src={'./trafficmarker.png'} className='relative left-[15rem] h-[2rem] w-[12rem]'/>
                <img src={'./facemarker.png'} className='relative left-[54rem] h-[2rem] w-[12rem]'/>
            </div>

        </div>   
    </>
  )
}

export default TimeLine