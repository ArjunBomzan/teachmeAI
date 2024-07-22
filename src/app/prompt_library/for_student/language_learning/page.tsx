import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create a Language Practice Partner Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to support students in experiencing independent and immersive
        foreign language practice conversations. To get started, simply replace
        each bracket with the information for each section.
      </p>
      <h3 className="font-bold m-2">
        Language Learning Practice Partner Prompt
      </h3>
      <p>
        For this interaction, you will take on the persona of a [PERSONA] from
        [CITY AND/OR COUNTRY]. I will ask you a series of questions in
        [LANGUAGE], and your task is to respond in a conversational way in
        [LANGUAGE]. You are to act as my conversational partner as I practice my
        ability to type/speak this language.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        For this interaction, you will take on the persona of a high school
        student from Genoa, Italy. I will ask you a series of questions in
        Italian, and your task is to respond in a conversational way in Italian.
        You are to act as my conversational partner as I practice my ability to
        type/speak this language.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Tailor the prompt for a specific topic of conversation. For example,
          “Now direct the conversation to ask about a recent trip to the
          supermarket.”
        </li>
        <li>
          Have the chatbot direct the conversation in a manner that asks the
          student to apply different tenses of verbs. For example, the chatbot
          can be directed to ask the student to recount details about memories
          of their first pet or plans for their future.
        </li>
        <li>
          Ask the chatbot to provide feedback to the student on their use of the
          language. For example, the chatbot could provide feedback on both
          comprehension and language mechanics for each response/input provided
          by the student.
        </li>
      </ul>
    </div>
  );
}

export default page;
