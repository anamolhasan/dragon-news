import React from 'react'
import logo from '../assets/logo.png'
import { format } from 'date-fns'
// import dayjs from 'dayjs';
// import 'dayjs/locale/bn'; // বাংলা লোকেল ইমপোর্ট করো
// dayjs.locale('bn'); // বাংলা লোকেল সেট করো

const Header = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 mt-10 mb-5'>
        <img className='w-[400px]' src={logo} alt="" />
        <p className='text-accent'>Journalism Without Fear or Favour</p>
        <p className='font-semibold text-accent'>{format(new Date(), 'EEEE, MMMM MM,  yyyy')}</p>
        {/* <p>{dayjs().format('dddd, D MMMM YYYY')}</p> */}
    </div>
  )
}

export default Header