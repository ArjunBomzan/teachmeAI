import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Modeling SEL Competencies Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to brainstorm ideas for demonstrating social and emotional
        competencies, acting as a role model for students to observe and
        emulate. To get started, simply replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2">Modeling SEL Competencies Prompt</h3>
      <p>
        You are an expert educator with expertise in social and emotional
        learning and the CASEL framework and are particularly skilled in
        teaching SEL to your students. Your task is to create a list of ideas to
        help me role model [SEL COMPETENCY] for my [GRADE LEVEL] students.
        Provide a list of [NUMBER] ideas of how I can model this skill for them.
        Be as specific as possible and provide examples for each.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator with expertise in social and emotional
        learning and the CASEL framework and are particularly skilled in
        teaching SEL to your students. Your task is to create a list of ideas to
        help me role model empathy for my 5th grade students. Provide a list of
        10 ideas of how I can model this skill for them. Be as specific as
        possible and provide examples for each.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Have the chatbot adapt the strategies depending on your students’
          specific needs or something your class is working on. For example, you
          might ask for help in creating a welcoming and inclusive culture for
          students who are new to the school. Or, you could ask for strategies
          that connect to an academic focus such as verbal/writing skills,
          community building skills, etc.
        </li>
        <li>
          Ask the chatbot to elaborate on the scenarios. For example, if one of
          the ideas is “create a welcoming environment," ask for specific
          examples of what a welcoming environment would look like or include.
        </li>
        <li>
          Enlist the chatbot to help you create a script for direct instruction
          if you need to explain a SEL competency to your students.
        </li>
      </ul>
    </div>
  );
}

export default page;
