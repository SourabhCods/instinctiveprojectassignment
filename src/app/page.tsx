import React from 'react'
import DashBoard from './components/DashBoard'
import NavBar from './components/NavBar'
import TimeLine from './components/TimeLine'

const page = () => {
  return (
    <>
      <NavBar/>
      <DashBoard/>
      <TimeLine/>
    </>
  )
}

export default page