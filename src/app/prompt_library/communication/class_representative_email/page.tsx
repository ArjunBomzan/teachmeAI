import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Write Emails to Your Classroom Representatives Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompt to help you draft emails to the parent classroom representatives
        for your classroom. To get started, just replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2"> Parent Rep Email Prompt</h3>
      <p>
        You are an experienced educator with excellent communication skills,
        skilled in creating engaging messages that clearly and concisely deliver
        important information. Your task is to write an email to the parent
        representatives of [GRADE LEVEL] classroom, asking them to help organize
        [INSERT EVENT / DUTY] for [PARENTS / FACULTY / STUDENTS]. In the email,
        ask them to [ORGANIZE A SIGN-UP / SEND AN EMAIL / BRING IN SPECIFIC
        ITEM(S) / CHAPERONE UPCOMING TRIP] for [NUMBER] students. The tone of
        the email should be [INSERT DESIRED TONE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an experienced educator with excellent communication skills,
        skilled in creating engaging messages that clearly and concisely deliver
        important information. Your task is to write an email to the parent
        representatives of my 3rd grade classroom, asking them to help organize
        a Valentine’s Day party for the students. In the email, ask them to
        organize a sign-up for classroom parents to bring in the following items
        for 30 students: festive napkins, cups, and paper plates; plastic
        silverware; classroom decorations; disposable tablecloths; brownie mix;
        frosting; festive sprinkles; heart stickers; white paper bags for the
        students to collect their valentines. The tone of the email should be
        friendly and professional.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Use the chatbot for a variety of parent communications, but make sure
          to be specific. Tweak the prompt in order to reach out to class reps
          to: schedule Parents' Night, organize a special snack schedule, bring
          in materials not covered by a classroom budget, create and distribute
          a parent reader sign-up, etc.
        </li>
        <li>
          Enlist the help of the chatbot to adjust and refine your communication
          until it's right for you/your school. Depending on how the chatbot
          responds, you can say, "Make it more concise," "Make it more casual,"
          "Reference [X] event we successfully planned together," etc.
        </li>
        <li>
          Refer back to the chatbot for any help needed with a response to the
          email. You can go back to the specific chat, copy and paste an email
          (or write something similar that you need help with), and ask, "How
          can I respond to this response in a professional way?"ew student
          exemplars in the same style as your students.
        </li>
      </ul>
    </div>
  );
}

export default page;
