<<<<<<< HEAD
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return <Outlet />;
}

export default MainLayout;
=======
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
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
