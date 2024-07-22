import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold m-5 text-[24px]">
        Draft Interview Questions Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you draft questions for an interview of a new teacher,
        administrator, or school leader. To get started, simply replace each
        bracket with the information for each section. To ensure candidate
        privacy, do not include any personally identifiable information in your
        prompt.
      </p>
      <h3 className="font-bold m-2">Interview Questions Prompt</h3>
      <p>
        You are an expert school leader, highly skilled in recruitment, employee
        management and retainment, decision making, organization, and interview
        skills. Your task is to draft [NUMBER] questions for a potential
        [CANDIDATE ROLE] for my [ORGANIZATION DESCRIPTION] that emphasizes
        [OPTIONAL SPECIFICATION]. The candidate is coming in for [INTERVIEW TYPE
        / DESCRIPTION] for [ROLE]. They have [INSERT PREVIOUS WORK EXPERIENCE
        INFORMATION].
      </p>
      <h3 className="font-bold m-2">Example Prompt</h3>
      <p className="italic">
        You are an expert school leader, highly skilled in recruitment, employee
        management and retainment, decision making, organization, and interview
        skills. Your task is to draft 10-15 questions for a potential first
        grade Head Teacher for my K-12, all-girls', independent school that
        emphasizes community, joyful discovery, and life-long learning. The
        candidate is coming in for a first-round panel interview for a 8th grade
        Math teaching role. They have 5 years of previous teaching experience as
        an assistant teacher at a co-ed, public school with experience in middle
        school math teaching.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-5 flex flex-col gap-3">
        <li>
          Have the chatbot adapt the prompt for any type of interview. For
          example, specify a different type of role (such as a Department Chair,
          Dean, etc.), or a different type of interview (such as a phone
          screening, or a joint interview with two teachers who would be working
          together).
        </li>
        <li>
          If you work at a certain type of school or there are particularly
          important aspects of your institution's mission, make sure to include
          that information in the prompt.
        </li>
        <li>
          Ask the chatbot to help you conduct pre- and post- interview tasks,
          such as emailing candidates. Ask the chatbot, "Draft a brief,
          professional yet friendly email to a candidate who interviewed letting
          them know they will not be moving forward in the process."
        </li>
      </ul>
    </div>
  );
}

export default page;
