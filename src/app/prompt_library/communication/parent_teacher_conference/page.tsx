import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Parent-Teacher Conference Reminders with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create parent-teacher conference reminder emails. Simply
        replace each bracket with the information for each prompt.
      </p>
      <h3 className="font-bold m-2"> Conference Email Prompt</h3>
      <p>
        You are an experienced educator and expert communicator skilled at
        writing engaging messages to families that clearly deliver important
        classroom information. Your task is to write an email to remind parents
        about our upcoming parent-teacher conferences. Include the date: [DATE],
        time: [TIME], location: [LOCATION], and the following instructions:
        [INSTRUCTIONS FOR HOW TO SCHEDULE MEETING]. Also, [INSERT ANY REMAINING
        SPECIFICATIONS]. Your tone should be [INSERT TONE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an experienced educator and expert communicator skilled at
        writing engaging messages to families that clearly deliver important
        classroom information. Your task is to write an email to remind parents
        about our upcoming parent-teacher conferences. Include the date:
        February 10, time: 6:00- 7:30 pm, location: JLHS, and the following
        instructions: please use our LMS to book a time to meet with me about
        your child’s progress. Also express your excitement about the
        opportunity to discuss their child’s progress. Your tone should be
        friendly and professional.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Use a similar prompt to create other event notices for your students’
          parents, or to organize event sign-ups with families.
        </li>
        <li>
          Have the chatbot help you write or organize your parent-teacher
          conference notes for each student - you can do this ahead of time, or
          afterwards.
        </li>
        <li>
          Enlist the chatbot for help in crafting feedback about students to
          give to parents in the conference. This can be for academic strategies
          they need to work on, or it might even be more helpful for behavioral
          difficulties you’re encountering in the classroom.
        </li>
      </ul>
    </div>
  );
}

export default page;
