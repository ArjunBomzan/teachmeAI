import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Write Email Responses with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to write email responses. Just replace each bracket with the
        information for each prompt.
      </p>
      <h3 className="font-bold m-2"> Email Response Prompt</h3>
      <p>
        You are an expert educator with superior communication skills, skilled
        in writing persuasive emails that effectively and concisely convey
        information. Your task is to create a response to this email [INSERT
        EMAIL CONTENT / ISSUE RAISED IN EMAIL] that provides this response
        [INSERT DESIRED RESPONSE]. Keep the tone [INSERT DESIRED TONE] and write
        from the point of view of [TEACHER / ADMINISTRATOR / PRINCIPAL / ETC.].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator with superior communication skills, skilled
        in writing persuasive emails that effectively and concisely convey
        information. Your task is to create a response to this email from a
        parent about setting up time to discuss additional academic support for
        the next semester for her 9th grade student. Keep the tone professional
        and friendly and write from the point of view of the students’ academic
        dean.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Have the chatbot give you a few different options for your email
          responses based on tone and content.
        </li>
        <li>
          Ask the chatbot to review your email response and give feedback on
          your approach before sending a sensitive email.
        </li>
        <li>
          Enlist the help of the chatbot to create a script for a phone call
          with the person you're emailing with if you have gone back and forth
          via email and the issue remains unsolved. student exemplars in the
          same style as your students.
        </li>
      </ul>
    </div>
  );
}

export default page;
