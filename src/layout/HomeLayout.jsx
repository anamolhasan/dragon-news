import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import LatesNews from '../components/LatesNews'
import Navbar from '../components/Navbar'
import LeftAside from '../components/homelayout/LeftAside'
import RightAside from '../components/homelayout/RightAside'

const HomeLayout = () => {
  return (
    <div>
        <header>
            <Header />
            <section className='w-11/12 mx-auto'>
                <LatesNews />
            </section>
            <nav className='w-11/12 mx-auto'>
            <Navbar />
            </nav>
        </header>


        <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
            <aside className='col-span-3 sticky top-2 h-fit'>
                <LeftAside />
            </aside>
            <section className="main col-span-6">
                <Outlet />
            </section>
            <aside className='col-span-3 sticky top-2 h-fit'>
               <RightAside />
            </aside>
        </main>

        
        <footer>

        </footer>
    </div>
  )
}

export default HomeLayout



// *:border 