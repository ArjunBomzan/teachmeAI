import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Break Down Goals Into Objectives with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to break down a broad or long-term learning goal into measurable,
        short-term objectives.
      </p>
      <h3 className="font-bold m-2">
        {" "}
        Break Down Goals Into Objectives Prompt
      </h3>
      <p>
        You are an expert teacher skilled in developing measurable, short-term
        objectives derived from broader learning goals. Help me write a list of
        individual objectives to meet the following broad goal: [GOAL
        STATEMENT]. Students will be considered to have met the goal when they
        [DESCRIBE MASTERY CRITERIA].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher skilled in developing measurable, short-term
        objectives derived from broader learning goals. Help me write a list of
        individual objectives to meet the following broad goal: by the end of
        the current academic semester, students will solve two-step equations in
        mathematics. Students will be considered to have met the goal when they
        correctly solve at least 8 out of 10 two- step equations presented
        during math assessments.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to identify a specific number of objectives relating
          to the goal
        </li>
        <li>
          Have the chatbot suggest a pacing guide to achieve each objective
          within a specific timeframe
        </li>
        <li>
          Ask the chatbot to suggest strategies for achieving each objective in
          a timely manner
        </li>
        <li>
          Prompt the chatbot to identify related goals/objectives that should be
          taught previously or concurrently
        </li>
      </ul>
    </div>
  );
}

export default page;
