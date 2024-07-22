import React from 'react'

function Courses() {
  return (
    <div>
        
      <div className='mt-10'>
        <p className='text-center  font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px]'>Introduction to AI for Students </p>

        <p className='font-bold'>Lesson 1: Interview a Chatbot</p>
        <div>
          <p> Lesson Overview</p>
          <ul className='italic mx-10'>
            <li>Length: 90 mins</li>
            <li> Grade: 7-9 and 10-12 versions</li>
            <li> Subject: English (ELA), Computer Science (ICT), Humanities</li>
          </ul>
          <p className='italic my-5'>In this hands-on lesson, students will be introduced to the functions, opportunities, and risks of large language model chatbots and broader artificial intelligence (AI).</p>
          <p className='italic'> After identifying AI and chatbots they already interact with, students will draft questions and ‘interview’ a chatbot like ChatGPT. At the end of the lesson, students will peer review the interviews and reflect on what they learned.</p>

        </div>
        
        <div>
          <p className='font-bold'> By the end of the lesson, students will be able to:</p>
          <ul className='mx-10'>

            <li> Identify and share examples of AI and chatbots they use in their every day life</li>
            <li>Create thought-provoking questions about the power and potential of AI</li>
            <li>Conduct and record a chatbot interview using prepared questions</li>
            <li> Assess a peer's chatbot interview and provide feedback</li>
            <li> Reflect on the risks and opportunities of LLM chatbots and AI.</li>
          </ul>
        </div>

        <div className='my-10'>
          <p className='font-bold'> What’s next?</p>
          <p>This is the first in a 4-lesson sequence introducing middle and high school students to the power, potential and risks of generative AI with a focus on ChatGPT.</p>
          <p> Upcoming lessons explore how large language models are trained and generate answers, the risks of AI hallucination and bias, and co-create a student AI policy.</p>
          <ul className='flex flex-col gap-10'>
            <li> Lesson 2: The Mind of the Machine</li>
            <li>  Lesson 3: Hallucination Detective</li>
            <li>   Lesson 4: Co-Creating an AI School Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Courses