import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="m-5 font-bold text-center text-[24px]">
        Developing Workflows with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to identify efficiencies and structure your workflow,
        streamlining administrative tasks and increasing productivity.
      </p>
      <h3 className="font-bold m-3">Develop Workflows Prompt</h3>
      <p>
        Act as an experienced teacher and productivity expert. Your task is to
        help me maximize my efficiency in order to complete all of my work for
        the coming month. Here are my tasks: [DESCRIBE TASKS WITH ESTIMATED TIME
        TO COMPLETION FOR EACH]. I have [DESCRIBE CONSTRAINTS ON YOUR TIME].
        Help me identify the most efficient workflow for completing all of my
        required tasks within [DESIRED TIMEFRAME].
      </p>
      <h3 className="font-bold m-2">Example Prompt</h3>
      <p className="italic">
        Act as an experienced teacher and productivity expert. Your task is to
        help me maximize my efficiency in order to complete all of my work for
        the coming month. Here are my tasks: write weekly lesson plans (2 hours
        a week), prepare weekly lesson materials (2 hours a week), grade 75
        argumentative essays (4 hours), clean and organize my classroom (1 hour
        a week), prepare materials for 15 annual review meetings (1.5 hours
        each), contact 15 families to discuss students’ failing grades (20
        minutes each), and prepare a 15-minute presentation for my professional
        learning community on summer professional development opportunities (1
        hour). I have a 90 minute preparation period each day, and one hour
        after school on Mondays, Wednesdays, and Thursdays to complete these
        tasks. Help me identify the most efficient workflow for completing all
        of my required tasks within the next 30 days.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc m-3  flex flex-col gap-3">
        <li>
          Ask the chatbot to account for unexpected interruptions such as fire
          drills, snow days, illness, etc.
        </li>
        <li> Ask the chatbot for help prioritizing tasks.</li>
        <li>
          Prompt the chatbot to automate certain tasks for you, such as writing
          presentation outlines, meeting agendas, and email templates
        </li>
        <li>
          Enter your current workflow or schedule and have the chatbot identify
          inefficiencies{" "}
        </li>
      </ul>
    </div>
  );
}

export default page;
