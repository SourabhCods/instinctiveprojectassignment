'use client'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-[100%] h-[80px] border fixed flex justify-between items-center bg-zinc-900 rounded-br-2xl rounded-bl-2xl shadow-2xl shadow-yellow-500/20 border-b-stone-50'>

      {/* company logo & name */}
      <div className='p-4 cursor-pointer'>
        <img src={'./logo.png'} className='h-8'/>
      </div>

      {/* nav items */}
      <div className='grid grid-cols-5 gap-7 font-mono font-medium'>
        <p className="flex items-center gap-2 text-white cursor-pointer">
          <img src={'./dashboard.png'} className='w-[1rem] h-[1rem]'/>
          DashBoard 
        </p>

        <p className="flex items-center gap-2 text-white cursor-pointer">
          <img src={'./camera.png'} className='w-[1rem] h-[1rem]'/>
          Cameras
        </p>

        <p className="flex items-center gap-2 text-white cursor-pointer">
          <img src={'./scenes.png'} className='w-[1rem] h-[1rem]'/>
          Scenes
        </p>

        <p className="flex items-center gap-2 text-white cursor-pointer">
          <img src={'./incidents.png'} className='w-[1rem] h-[1rem]'/>
          Incidents
        </p>

        <p className="flex items-center gap-2 text-white cursor-pointer">
          <img src={'./user.png'} className='w-[1rem] h-[1rem]'/>
          Users
        </p>
      </div>

      {/* account details */}
      <div className='cursor-pointer flex justify-around items-center gap-4 h-auto w-auto'>
        <img src={'./profilelogo.png'} className='h-15 p-2'/>
        <div className='flex flex-col p-2'>
          <p className='text-white font-mono'>Sourabh Goyal</p>
          <p className='text-white font-mono'>devsonu478@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
