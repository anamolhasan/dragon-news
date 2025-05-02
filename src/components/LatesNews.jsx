import React from 'react'
import Marquee from 'react-fast-marquee'

const LatesNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-3'>
        <p className='text-base-100 bg-secondary px-3 py-2'>Lates</p>
        <Marquee pauseOnHover={true}>
           <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At molestiae itaque quod natus officiis, neque nobis nesciunt et libero illo delectus facilis. Repellat odit maxime rerum, obcaecati ex voluptates? Sequi.</p>
       </Marquee>
    </div>
  )
}

export default LatesNews