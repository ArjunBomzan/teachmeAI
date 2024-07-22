import React from 'react'
import { resources } from '../../data'


function page() {
    return (
        <div className='container'>
            <div className='grid lg:grid-cols-3 gap-10 mt-10'>


                {
                    resources.map((el) => {
                        return <div key={el.title} className=' hover:scale-[1.08] transition-al ' >
                            <a href={el.link} target='_blank' className=''>
                                <img src={`${el.banner}`} className='h-[160px] aspect-video object-contain' />
                                <p className='font-medium text-[#15cccc] mt-2 '>{el.title}</p>
                            </a>
                        </div>
                    })
                }
            </div>
            
            
        </div>
    )
}

export default page