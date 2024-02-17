import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import useCheckToken from '../hooks/useCheckToken'

function MainLayout() {
    useCheckToken ();
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
      
    </div>
  )
}

export default MainLayout
