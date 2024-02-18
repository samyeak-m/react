import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import useCheckToken from '../hooks/useCheckToken'
import AiChatWidget from '../components/AiChatWidget'

function MainLayout() {
    useCheckToken ();
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
        <AiChatWidget />
    </div>
  )
}

export default MainLayout
