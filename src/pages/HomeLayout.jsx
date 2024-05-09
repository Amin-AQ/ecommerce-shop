import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, ImageCarousel } from '../components'


const HomeLayout = () => {


  return (
    <>
    <Header />

    <Outlet />
    <Footer />
    </>
  )
}

export default HomeLayout