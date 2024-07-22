import React from "react";

function page() {
  return (
    <div className="container mt-10">
      <h2 className="text-center font-bold m-5 text-[24px]">
        Create Classroom Management Strategies with an AI Chatbot{" "}
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create classroom management strategies for your classroom.
        Simply replace each bracket with the information for each prompt.
      </p>
      <h3 className=" font-bold mt-5">Classroom Management Prompt</h3>
      <p>
        You are an expert educator with unparalleled classroom management
        skills, proficient in recognizing and effectively responding to your
        students’ needs and issues. Your task is to create a list of strategies
        for dealing with [INSERT ISSUE] in my classroom. The issue is occurring
        in my [GRADE, SUBJECT, TIME OF DAY]. The classroom management strategies
        should be [FRAMEWORK / METHOD / APPROACH].{" "}
      </p>
      <h3 className="font-bold mt-5 "> Example Prompt</h3>
      <p className="italic">
        {" "}
        You are an expert educator with unparalleled classroom management
        skills, proficient in recognizing and effectively responding to your
        students’ needs and issues. Your task is to create a list of strategies
        for dealing with lost instructional time during transitions in my
        classroom. The issue is occurring in my 7th grade math classroom right
        after lunch. The classroom management strategies should follow PBIS.
      </p>
      <h3 className=" font-bold mt-5"> Additional Prompting Strategies </h3>
      <ul className="list-disc ml-5 flex flex-col gap-3">
        <li>
          Have students work with the chatbot to co-produce their own classroom
          management strategies for issues in the classroom. You could even
          create a “Classroom Pledge,” so students are encouraged to act in a
          way that supports their classroom community.
        </li>
        <li>
          Use the chatbot to create supporting documentation for strategies
          (e.g. contracts, policies, routines).
        </li>
        <li>
          Enlist the chatbot for help in next steps if the behavior issues
          escalate. For example, you can draft a script to speak with school
          administration or the students’ parents about the issue.
        </li>
      </ul>
    </div>
  );
}

export default page;
