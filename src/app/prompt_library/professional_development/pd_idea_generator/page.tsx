import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Professional Development Ideas Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you generate professional development ideas for
        educators. To get started, just replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2">Professional Development Ideas Prompt</h3>
      <p>
        You are an expert educational consultant, expert in planning and
        organizing workshops that are relevant and impactful. Your task is to
        generate [number] ideas for professional development presentations on
        the topic of [TOPIC]. The presentations should be [TIME DURATION] each.
        The presentations should focus on: [SPECIFIC CONTENT]. The presentations
        should be engaging, and applicable for [INTENDED AUDIENCE]. Each
        presentation should utilize principles of [PEDAGOGICAL / THEORETICAL
        FRAMEWORK].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educational consultant, expert in planning and
        organizing workshops that are relevant and impactful. Your task is to
        generate 5 ideas for professional development presentations on the topic
        of education technology. The presentations should be 1.5 – 3 hours each.
        The presentations should focus on: digital literacy, technological tools
        for teachers and how to integrate technology into the classroom. The
        presentations should be engaging, and applicable for middle and high
        school educators. Each presentation should utilize principles of adult
        learning theory.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to connect the presentations and have them build off
          of each other if you are designing a professional development
          unit/course.
        </li>
        <li>
          Enlist the chatbot to help you determine a general topic for
          professional development first if you're not sure. For example, you
          could test out potential presentation ideas for social justice,
          conducting parent-teacher conferences, classroom management
          strategies, curriculum design, etc.
        </li>
        <li>
          Have the chatbot provide you with a detailed presentation outline,
          including key speaking points, once you choose a specific idea from
          the ones offered by the chatbot.
        </li>
      </ul>
    </div>
  );
}

export default page;
