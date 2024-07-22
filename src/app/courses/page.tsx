import React from 'react'
import Courses from '../components/Course'
import Link from 'next/link'

function page() {
  return (
    <div className='container'>
        <Courses/>
        <div>
            <button className='btn'> <Link href={"/contact"}>Contact</Link></button>
        </div>
    </div>
  )
}

export default page