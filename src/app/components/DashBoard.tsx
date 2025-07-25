'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import ListBox from './ListBox'
import { Prisma } from '@prisma/client';

type IncidentWithCamera = Prisma.IncidentGetPayload<{ include: { camera: true } }>;

const DashBoard = () => {
  const [selectedIncident, setSelectedIncident] = useState<IncidentWithCamera | null>(null);
  // Pass this function to ListBox
  const handleThumbnailClick = (incd: IncidentWithCamera) => {
    console.log(incd)
    setSelectedIncident(incd);
  };

  return (
    <div className='flex justify-around items-center h-screen p-[1rem]'>
      {/* mp4 video play/static image */}
      <div className='w-[54rem] h-[30rem] flex items-center justify-center border-1 border-dotted border-white rounded-xl p-1'>
        {selectedIncident ? (
          <img src={selectedIncident.thumbnailUrl} alt='Selected' className='object-cover h-full w-full rounded-lg' />
        ) : (
          <p className='text-gray-500'>click on thumbnail to view recording</p>
        )}
      </div>
      <div className='h-auto w-auto bg-stone-900/55 z-40 absolute top-48 left-15 flex justify-around p-1'>
        <img className='w-[25px] h-[25px] mt-[3.48px] ml-[1.5px] mr-[3.5px]' src={'./calendar.png'}/>
        <p className='text-stone-50 mt-1 ml-1'>21/06/25&nbsp;-&nbsp;14:40:00</p>
      </div>
      <div className='h-auto w-[9rem] bg-stone-900/55 z-40 absolute bottom-52 left-15 flex justify-evenly p-1'>
        <img className='w-[32px] h-[32px] mt-[3.48px] ml-[1.5px] mr-[3.5px]' src={'./video-camera.png'}/>
        <p className='text-stone-50 text-lg mt-1'>{selectedIncident?.camera?.name}</p>
      </div>
      <div className='h-auto w-[13rem] bg-stone-900/75 z-40 absolute bottom-44 left-110 flex justify-evenly p-1 inline rounded-xl cursor-pointer'>
        <p className='text-stone-50 text-1xl text-mono bg-black rounded-tl-xl'>&nbsp;&nbsp;Camera-1</p>
        <img className='mt-[3.48px] rounded-xl' src={'https://ars.els-cdn.com/content/image/1-s2.0-S0893608020303361-gr6.jpg'}/>
      </div>
      <div className='h-auto w-[13rem] bg-stone-900/75 z-40 absolute bottom-44 left-165 flex justify-evenly p-1 inline rounded-xl cursor-pointer'>
        <p className='text-stone-50 text-1xl text-mono bg-black rounded-tl-xl'>&nbsp;&nbsp;Camera-3</p>
        <img className='mt-[3.48px] rounded-xl' src={'https://www.shutterstock.com/shutterstock/videos/29424535/thumb/7.jpg?ip=x480'}/>
      </div>
      

      {/* ListBox gets the prop */}
      <ListBox onThumbnailClick={handleThumbnailClick}/>
    </div>
  );
};

export default DashBoard;
