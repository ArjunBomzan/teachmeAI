import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Student Exemplars with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create your own student exemplars. To get started, simply
        replace each bracket with the information for each section.
      </p>
      <h3 className="font-bold m-2"> Student Exemplar Prompt</h3>
      <p>
        You are an expert [GRADE LEVEL AND SUBJECT] teacher, skilled in creating
        detailed, useful educational resources for your students. Your task is
        to write a student exemplar [ESSAY / ACTIVITY] for an assignment on
        [ASSIGNMENT NAME] at a [SUPERIOR / AVERAGE / POOR] proficiency level.
        The exemplar should be from the perspective of an academically
        [EXCELLENT / AVERAGE / BELOW AVERAGE] [GRADE LEVEL OR AGE] student,
        should be at least [PAGE LENGTH OR TIME DURATION], and should [INSERT
        REMAINING SPECIFICATIONS].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert 10th grade English teacher, skilled in creating
        detailed, useful educational resources for your students. Your task is
        to write a student exemplar essay for an assignment on “symbolism in The
        Great Gatsby” at a superior proficiency level. The exemplar essay should
        be from the perspective of an academically excellent 10th grade student,
        should be at least 2 pages long, and should illustrate an ideal example
        of how to structure an essay and answer the question of the assignment.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to add some specific grammatical mistakes or other
          skills/issues that you want students to focus on (no matter the
          proficiency level).
        </li>
        <li>
          Create a student persona (e.g., a ten year old girl that loves
          Fortnite) to be the “writer” of the student exemplar.
        </li>
        <li>
          Cut and paste anonymized versions of past submissions to have the
          chatbot create new student exemplars in the same style as your
          students.
        </li>
        <li>
          Go over “below average” or “poor” writing exemplars together as a
          class, and come up with strategies for how to improve the essay. Then,
          as a class, ask the chatbot for strategies and compare your ideas.
        </li>
      </ul>
    </div>
  );
}

export default page;
