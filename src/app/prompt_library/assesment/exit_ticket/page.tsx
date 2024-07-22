import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Exit Tickets Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you create exit tickets for the end of lessons. To get
        started, just replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2">Exit Tickets Prompt</h3>
      <p>
        You are an expert educator and lesson planner, skilled at creating
        engaging, hands-on activities for students that help reinforce their
        learning. Your task is to create [NUMBER] “exit ticket” ideas I can use
        in my [GRADE LEVEL AND SUBJECT] class at the end of a [TOPIC] lesson on
        [SPECIFIC CONTENT]. The exit ticket activities/questions should be very
        brief and should serve as a form of assessment to gauge students’
        understanding of the material covered.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator and lesson planner, skilled at creating
        engaging, hands-on activities for students that help reinforce their
        learning. Your task is to create 5 “exit ticket” ideas I can use in my
        4th grade math class at the end of a geometry lesson on identifying,
        labeling, and measuring angles. The exit ticket activities/questions
        should be very brief and should serve as a form of assessment to gauge
        students’ understanding of the material covered.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Have the chatbot adapt the exit ticket ideas to the needs of your
          students. Ask to make them more/less challenging, or ask to have them
          be activities that are done independently/in pairs. Ask the chatbot to
          generate additional ideas if you're stuck!
        </li>
        <li>
          Use the chatbot to create specific exit tickets if you have a
          consistent form for your classroom. For example, if your exit tickets
          are always multiple choice questions, ask for 5 exit tickets in the
          form of multiple choice questions.
        </li>
        <li>
          Enlist the chatbot to help you make your activities as engaging as
          possible. Ask the chatbot, "What are ways I can make exit tickets more
          interesting or exciting?"
        </li>
      </ul>
    </div>
  );
}

export default page;
