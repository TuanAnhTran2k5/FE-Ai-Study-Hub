import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
   <div className='bg-[rgb(196,226,255)]'>
    <Header />
    <main>  
        {/* Main content goes here */}
        <Outlet />
    </main>
    <Footer />
   </div>
  )
}

export default MainLayout
