import React from 'react'
import Courses from '../components/Course'

function page() {
  return (
    <div className='container my-10'>
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div>
          <p className='font-bold'>Student AI Literacy Curriculum</p>
          <p>To support students’ AI literacy, Teach Me AI has developed a free guide which  provides training and implementation support for educators.  </p>
        </div>
        <div>
          <p className='font-bold'>Student Workshops</p>
          <p>We also provide workshops geared to middle and high school students introducing them to the responsible use of Generative AI.</p>
          <ul className='italic'>
            <li>Introduction to Generative AI for Students</li>
            <li>Prompt Engineering for Students</li>
            <li> Ethical Use of AI for Students</li>
          </ul>


        </div>
      </div>
      <Courses/>
    </div>
  )
}

export default page