import React from 'react'

function page() {
    return (
        <div className='container'>
            <div className=' flex  flex-col lg:flex-row gap-16 mt-[10px]'>
                <div className=' '>
                    <p className='font-bold '>Staff & Leadership Training</p>
                    <p className='font-medium pl-2'>-Gen AI Workshops & Professional Development</p>
                    <p>Teach Me Ai's expert facilitators provide in-person or virtual hands-on workshops for staff and leadership teams. We offer a host of training topics and can also craft new workshops based on your unique needs.</p>
                </div>
                <div className=''>
                    <div className='bg-[#EAEAEE]  w-full shadow-black shadow-lg p-10 '>
                        <p>" <span className='font-bold'>Thank you for a fabulous session</span> today. You expertly navigated a complex topic and created raving fans along the way - each noting ways in which they can imagine leveraging their newly acquired skills and insights to improve their practice. It was truly a highlight for our school with regard to Professional Development in my 13 years here.” </p>

                    </div>


                </div>

            </div>

            <div className='my-10 flex flex-col lg:flex-row  gap-5 lg:gap-10'>
                <div>
                    <p className='font-bold'>Train-the-Trainer Institutes</p>
                    <p>Our Train-the-Trainer programs are designed to cultivate a deep understanding of key Generative AI concepts for lead staff so they can provide high-quality professional development across a school or district.</p>

                </div>
                <div>
                    <p className='font-bold'> Courses</p>
                    <p className=''>Our FREE 1-hour, hands-on course is designed to help educators get started using free GenAI tools like ChatGPT to save time, engage students, and implement AI responsibly.</p>

                </div>
            </div>
        </div>
    )
}

export default page