import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create a Self-Care Plan for Students Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to brainstorm ideas for creating a self-care plan for students or
        having them create their own. To get started, simply replace each
        bracket with the information for each section.
      </p>
      <h3 className="font-bold m-2">
        Self-Care Plan for Students Prompt (Lesson Planning Use)
      </h3>
      <p>
        You are an expert mental health educator and instructional designer
        skilled in working with teens to help them successfully build a healthy
        lifestyle. My [GRADE LEVEL] students are currently working on their
        [MENTAL HEALTH SUBJECT] habits. Your task is to provide a list of
        [NUMBER] ideas to help my students with their [SPECIFIC TOPIC /
        BUZZWORD] goals.
      </p>
      <h3 className="font-bold m-2"> Example Prompt (Lesson Planning Use)</h3>
      <p className="italic">
        You are an expert mental health educator and instructional designer
        skilled in working with teens to help them successfully build a healthy
        lifestyle. My 12th grade students are currently working on their sleep
        habits. Your task is to provide a list of 5-10 ideas to help my students
        with their sleep hygiene goals.
      </p>
      <h3 className="font-bold m-2">
        Self-Care Plan for Students Prompt (Student Use)
      </h3>
      <p>
        You are an expert mental health educator and instructional designer
        skilled in working with teens to help them successfully build a healthy
        lifestyle. I am a [GRADE LEVEL] student that is looking to improve [AREA
        OF NEED]. Currently I have [DESCRIPTION OF ISSUE]. I am currently using
        these strategies: [STRATEGY DESCRIPTIONS]. Your task is to provide a
        list of [NUMBER] ideas to help me meet my goals.
      </p>
      <h3 className="font-bold m-2"> Example Prompt (Student Use)</h3>
      <p className="italic">
        You are an expert mental health educator and instructional designer
        skilled in working with teens to help them successfully build a healthy
        lifestyle. I am a 12th grade student that is looking to improve my
        nutrition. Currently I have little time to eat healthy and often eat
        fast food. I am currently using these strategies: keeping a protein bar
        in my backpack and trying to make my lunch before school. Your task is
        to provide a list of 5 ideas to help me meet my goals.
      </p>

      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Use the chatbot to help your students achieve their goal by creating a
          schedule, monthly plan, SMART goals, etc.
        </li>
        <li>
          Add specific information whenever possible to personalize the
          chatbot’s responses avoiding personally identifiable information.. For
          example, ask for suggestions for management of stress and anxiety for
          students with ADHD who find meditation and sitting still very
          difficult. Or meal prep ideas when you have specific food allergies
          and preferences.
        </li>
        <li>
          Have the chatbot help you create lessons around specific mental health
          topics that your students are struggling to comprehend.
        </li>
      </ul>
    </div>
  );
}

export default page;
