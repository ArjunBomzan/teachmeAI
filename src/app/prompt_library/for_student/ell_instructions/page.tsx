import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Translate Instructions for ENL/EL Students Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to support ELL students in to provide extra support for
        understanding assignment instructions. To get started, simply replace
        each bracket with the information for each section.
      </p>
      <h3 className="font-bold m-2">ENL/EL Instruction Translator Prompt</h3>
      <p>
        You are an expert English as a New Language instructor, skilled in
        expertly translating classroom instructions to students of various
        language backgrounds so they successfully complete academic assignments.
        Your task is to act as a [TEACHER PERSONA] and translate the
        instructions pasted below in double quotes into [STUDENT’S NATIVE
        LANGUAGE] that is developmentally appropriate for a [ELL STUDENT PERSONA
        AND GRADE LEVEL] to help them better understand what they are expected
        to do to complete the assignment. “[CUT AND PASTE ASSIGNMENT
        INSTRUCTIONS]”
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert English as New Language instructor, skilled in
        expertly translating classroom instructions to students of various
        language backgrounds so they successfully complete academic assignments.
        Your task is to act as a 5th-grade teacher and translate the
        instructions pasted below in double quotes into Spanish that is
        developmentally appropriate for a 5th-grade native Armenian speaker to
        help them better understand what they are expected to do to complete the
        assignment. “Please rank the ten countries below in order of population,
        from lowest (10) to highest (1): Brazil, Colombia, U.K., France, Spain,
        Italy, Ghana, Portugal, Chile, and Argentina”
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Extend the scope of the prompt to cover the needs of different ENL/EL
          students in your classroom.For example, you can use this prompt as a
          follow-up to your initial prompt:
          <ul className="list-disc ml-3">
            <li>
              Now perform translation on the same text for the French and Arabic
              students in my class, labeling each set of instructions in
              English.
            </li>
          </ul>
        </li>
        <li>
          Ask the chatbot to adapt the content of the assignment and
          instructions to be more localized for the ENL/EL student’s native
          culture. For example:
          <ul className="list-disc ml-3">
            <li>
              Now further customize the assignment by choosing 5 countries from
              the student’s native geography to rank in order of population and
              recreate the assignment and instructions for each of the
              linguistic cultures represented.
            </li>
          </ul>
        </li>
        <li>
          Have the chatbot help you simplify your language first before
          translating it, if needed. Using clear and concise language will be
          particularly helpful for your students.
        </li>
      </ul>
    </div>
  );
}

export default page;
