import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        {" "}
        AI-Assisted Assessments Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompt to help you create AI- assisted assessments for your students. To
        get started, just replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2"> AI-Assisted Assessment Prompt</h3>
      <p>
        You are an expert educator and curriculum writer, skilled at developing
        thoughtful and creative assessments that effectively evaluate your
        students’ learning. Your task is to design an assessment to evaluate
        what [GRADE LEVEL AND SUBJECT] students have learned in our unit on
        [TOPIC]. Follow these directions:
      </p>
      <ul className="list-disc ml-3  mt-3flex flex-col gap-3">
        <li>Include questions about: [SPECIFIC CONTENT].</li>
        <li>
          Act as a brainstorming partner and make the assessment collaborative.
        </li>
        <li>
          Include elements like feedback mechanisms, role-playing, and peer
          teaching so my students can incorporate an AI chatbot in their
          assessment.
        </li>
        <li>
          The AI chatbot is only to be used to creatively enhance the students’
          learning experience; do not include instructions for the chatbot to
          research information or fact check [SPECIFIC TOPIC].
        </li>
      </ul>

      <h3 className="font-bold m-2">Example Prompt</h3>
      <p>
        You are an expert educator and curriculum writer, skilled at developing
        thoughtful and creative assessments that effectively evaluate your
        students’ learning. Your task is to design an assessment to evaluate
        what my 8th grade social studies class students have learned in our unit
        on The Great Depression and The New Deal. Follow these directions:
      </p>
      <ul className="list-disc ml-3  mt-3 flex flex-col gap-3">
        <li>
          Include questions about: their historical context and causes; cultural
          responses; and any societal and political effects and consequences.
        </li>
        <li>
          Act as a brainstorming partner and make the assessment collaborative.
        </li>
        <li>
          Include elements like feedback mechanisms, role-playing, and peer
          teaching so my students can incorporate an AI chatbot in their
          assessment.
        </li>
        <li>
          The AI chatbot is only to be used to creatively enhance the students’
          learning experience; do not include instructions for the AI chatbot to
          research information or fact check historical events.
        </li>
      </ul>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3  mt-3 flex flex-col gap-3">
        <li>
          Have the chatbot tailor the assessment to your students’ needs.
          Include specific standards for your grade/class, ask for questions to
          be more/less challenging, have the chatbot make the assessment a
          specific duration of time, etc.
        </li>
        <li>
          Ask the chatbot to include specific questions if you already have
          ideas. For example, “Have the chatbot role play with my students as
          FDR; the chatbot will be the former president and students can ask him
          questions about his experience.”
        </li>
        <li>
          can ask him questions about his experience.” Enlist the chatbot to
          make the assessment more relatable to your students or to your
          demographic. Ask, “Can you make this more relevant for 14 year olds
          who live in a major city and are interested in social media and video
          games?”
        </li>
        <li>
          Use the chatbot for ideas to incorporate multidisciplinary assessment
          questions. In this example, students could write historical fiction
          set in the Great Depression, they could evaluate the economic impact,
          analyze migration patterns, create and study artwork from that era,
          etc.
        </li>
      </ul>
    </div>
  );
}

export default page;
