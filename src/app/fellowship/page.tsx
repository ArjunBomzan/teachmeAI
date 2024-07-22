import React from 'react'

function page() {
    return (
        <div className='container mt-10'>
            <div>
                <p className='text-[24px] font-bold'>Program Objectives:</p>
                <div className=' flex flex-col lg:flex-row  justify-center items-center gap-10' >
                    <div>
                        <li className='mt-3'><span className='font-bold'>Empower Individuals: </span>Equip fellows with comprehensive AI knowledge and teaching skills.</li>
                        <li className='mt-3'><span className='font-bold'>Expand AI Literacy:</span>Disseminate AI education in schools, especially in underserved areas. </li>
                        <li className='mt-3'><span className='font-bold'>Foster Innovation: </span> Encourage creative applications of AI in local communities.                </li>
                        <li className='mt-3'><span className='font-bold'>Promote Inclusivity: </span>Ensure AI education is accessible to all, irrespective of background.</li>
                    </div>
                    <img src='/images/banner3.jpg' className=' h-[40vh] w-auto rounded-2xl' />
                </div>
            </div>

            <div className='mt-10'>
                <p className='text-[24px] font-bold m-5'>Fellowship Structure:  </p>
                <div className='grid lg:grid-cols-2 ml-5 gap-10'>
                    <div>
                        <p className='mb-5 text-[#15cccc] font-semibold text-[20px] ml-3'>Application and Selection: </p>
                        <ul className='list-disc ml-8'>
                            <li><span className='font-bold'>Application Period: </span>Open twice a year.</li>

                            <li className='mt-3'>
                                <p className='font-bold'>Eligibility Criteria:</p>
                                <ul className='flex flex-col gap-2 list-decimal ml-10'>
                                    <li>Must have a bachelor's degree in any field.
                                    </li>
                                    <li>Demonstrated passion for education and technology.</li>
                                    <li>Strong communication and interpersonal skills.</li>
                                    <li>Ability to commit to the full duration of the fellowship.</li>
                                    <li>Prior experience in teaching or training is preferred but not mandatory.</li>
                                    <li>Basic understanding of AI and machine learning concepts is advantageous.</li>
                                </ul>
                            </li>
                            <li className='mt-3'><span className='font-bold'>Selection Process:</span> Includes an online application, a video submission, and interviews to assess candidates’ motivation and potential impact.</li>
                        </ul>
                    </div>
                    <div>
                        <p className='mb-5 text-[#15cccc] font-semibold text-[20px] ml-3'>Training Phase (Induction Training): </p>
                        <ul className='ml-8 list-disc '>
                            <li><span className='font-bold'>Duration:</span> 45 Days
                            </li>
                            <li className='mt-3'><span className='font-bold'>Curriculum</span>
                                <ul className='lg:ml-5'>
                                    <li><span className='font-bold'>Month 1:</span> Fundamentals of AI, machine learning, and ethical considerations. Advanced AI concepts, practical projects, and teaching methodologies. Classroom management, curriculum development, and hands-on training sessions.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-3'>

                                <span className='font-bold'>Mentorship:</span>Each fellow is paired with an experienced AI professional for guidance and support.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className='mb-5 text-[#15cccc] font-semibold text-[20px] ml-3'>Deployment Phase:</p>
                        <ul className='lg:ml-8'>
                            <li className='mt-3'><span className='font-bold'>Duration:</span>9 months.</li>
                            <li className='mt-3'><span className='font-bold'>Placement:</span> Fellows are assigned to schools across various regions.</li>
                            <li className='mt-3'><span className='font-bold'>Training Delivery:</span> Conduct workshops, seminars, and after-school programs.</li>
                            <li className='mt-3'><span className='font-bold'>Support:</span> Ongoing support from Teach Me AI, including resources, materials, and continuous professional development opportunities.</li>

                        </ul>
                    </div>
                    <div>
                        <p className='mb-5 text-[#15cccc] font-semibold text-[20px] ml-3'>Impact Assessment:</p>
                        <ul className='lg:ml-8 '>
                            <li className='mt-3'><span className='font-bold'>Evaluation Metrics:</span> Pre- and post-training assessments, student feedback, and community engagement metrics.</li>
                            <li className='mt-3'><span className='font-bold'>Reporting:</span> Fellows submit monthly reports on their activities and impact.</li>
                            <li className='mt-3'><span className='font-bold'>Alumni Network: </span>Graduates join a network for continued collaboration and learning.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-10 bg-[#EAEAEE] p-5'>
          
            <p className='text-[24px] font-bold mt-5'>Program Benefits:</p>
            <ul className='grid lg:grid-cols-2 gap-10 ml-8'>
                <li>
                   <p className=' text-[#15cccc] font-semibold text-[20px] -ml-6'>For Fellows:</p> 
                    <ul className='list-disc lg:ml-3'>
                        <li>Comprehensive AI training.</li>
                        <li>Mentorship and professional development.</li>
                        <li>A stipend to cover living expenses during the fellowship.</li>
                        <li>Certification upon completion.</li>

                    </ul>
                </li>
               

                <li>
                <p className=' text-[#15cccc] font-semibold text-[20px] -ml-6'>For Schools:</p>
                    <ul className='list-disc lg:ml-3'>
                        <li> Access to high-quality AI education.</li>
                        <li> Enhanced learning experiences for students.</li>
                        <li> Support in integrating AI into the school curriculum.</li>

                    </ul>
                </li>
                <li>
                   <p className=' text-[#15cccc] font-semibold text-[20px] -ml-6'> For the Community:</p>
                    <ul className='list-disc lg:ml-3'>
                       <li> Increased AI literacy and awareness.</li>
                       <li> Empowerment of local talent.</li>
                       <li> Promotion of inclusive technological growth.</li>

                    </ul>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default page