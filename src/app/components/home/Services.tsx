import Link from 'next/link'
import React from 'react'
function Services({ data }: any) {

  return (
    <div className=' grid lg:grid-cols-3 gap-5 lg:gap-14 mt-5'>
      {
        data?.map((el: any) => {
          return <div key={el.title} className='flex-1 relative  cursor-pointer bg-[#EAEAEE] p-5 rounded-md transition-all hover:scale-[1.06]'  >
            <Link href={el.url}>
              <p className='font-bold '>{el.title}</p>
              <p className='mt-2'>{el.description}</p>
            
                </Link>
        </div>
        
    })
}
    </div >
  )
}

export default Services