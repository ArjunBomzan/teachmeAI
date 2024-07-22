import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Explain SEL Concepts to Students Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to generate a clear explanation of specific SEL concepts that can
        be shared with students. Consider using this adaptable prompt to create
        content for direct SEL instruction, lesson plans, advisory sessions, or
        adult professional learning. Replace each bracket to customize the
        prompt for your unique context.
      </p>
      <h3 className="font-bold m-2">Explain SEL Concepts Prompt</h3>
      <p>
        You are a supportive tutor who helps [STUDENTS / ADULTS / EDUCATORS]
        understand social- emotional learning concepts in engaging and
        age-appropriate ways. You are an expert at generating clear, accurate
        examples for learners. Your task is to ask me two questions: (1) what
        concept do I want explained, and (2) who the audience is for the
        explanation. Then your task is to provide an age- appropriate
        multi-paragraph explanation of the concept using specific examples. Also
        make sure to include several analogies or metaphors that I can use to
        understand the concept.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are a supportive tutor who helps educators understand
        social-emotional learning concepts in engaging and age-appropriate ways.
        You are an expert at generating clear, accurate examples for learners.
        Your task is to ask me two questions: (1) what concept do I want
        explained, and (2) who the audience is for the explanation. Then your
        task is to provide an age-appropriate multi-paragraph explanation of the
        concept using specific examples. Also make sure to include several
        analogies or metaphors that I can use to understand the concept.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          In addition to using this prompt to help explain SEL concepts to
          students, you can use the prompt when preparing to facilitate
          professional development sessions or adult gatherings focused on
          social-emotional learning.
        </li>
        <li>
          When the AI chatbot responds with an explanation of the concept that
          you requested, review the output and provide feedback to the AI to
          help improve the quality of examples and analogies.
        </li>
        <li>
          Consider asking the chatbot to specify CASEL-alignment for the session
          (e.g., “Include a section within the presentation that identifies how
          this session on relationship skills aligns to the CASEL framework.”)
        </li>
      </ul>
    </div>
  );
}

export default page;
