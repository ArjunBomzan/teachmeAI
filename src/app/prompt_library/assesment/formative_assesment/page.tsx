import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Formative Assessments with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompt to create formative assessments for your classroom. Simply
        replace each bracket with the information for each prompt.
      </p>
      <h3 className="font-bold m-2">Assessment Ideas Prompt</h3>
      <p>
        You are an expert educator, skilled at creating well-developed
        assessments that thoroughly evaluate your students’ skills and learning.
        Your task is to generate a list of [NUMBER] formative assessment ideas
        related to [INSERT TOPIC] for my [GRADE LEVEL AND SUBJECT] students.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator, skilled at creating well-developed
        assessments that thoroughly evaluate your students’ skills and learning.
        Your task is to generate a list of 10 formative assessment ideas related
        to still life drawing for my 11th grade visual arts students.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to align your formative assessments with specific
          learning objectives and/or your summative assessments.
        </li>
        <li>
          Differentiate your formative assessments by asking the chatbot to give
          you 5 assessment ideas using a variety of modalities (e.g., exit
          tickets, quick quizzes, graphic organizers, etc.)
        </li>
        <li>
          Have the chatbot tailor your assessment ideas to the needs of your
          students - ask for more challenging ideas for advanced students, or
          ask how you can accommodate students with specific learning needs.
        </li>
        <li>
          Enlist the help of the chatbot to provide strategies for preparing
          your students, particularly in response to a specific assessment. For
          example you could type, “What are some lessons/activities that could
          best prepare my students for example assessment 3?”
        </li>
      </ul>
    </div>
  );
}

export default page;
