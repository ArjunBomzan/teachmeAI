import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Transform an Existing Lesson with an AI Chatbot
      </h2>
      <p>
        Upload an existing lesson plan file into Claude or your favorite AI
        chatbot* that allows document attachment. Alternatively, you can copy
        and paste the text of the lesson plan into the chatbot. Then cut and
        paste the following prompt to add elements such as an engaging hook,
        opportunities for collaboration, additional standards, and more. To get
        started, replace each bracket with the information for each section.
      </p>
      <p className="py-3">
        *Note-this prompt is most effective with chatbots such as Claude that
        allow users to attach documents to prompts.
      </p>
      <h3 className="font-bold m-2">
        Transform an Existing Lesson Prompt- If attaching a file:
      </h3>
      <p>
        Act as an expert teacher and instructional designer, skilled at creating
        engaging, hands-on learning experiences for all types of learners. I
        have attached a lesson plan on [TOPIC OF LESSON]. Your task is to revise
        the lesson to include [DESCRIBE DESIRED CHANGES].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        Act as an expert teacher and instructional designer, skilled at creating
        engaging, hands-on learning experiences for all types of learners. I
        will copy the text of a lesson plan on [TOPIC OF LESSON] below in triple
        quotes. Your task is to revise the lesson to include [DESCRIBE DESIRED
        CHANGES].“””[INSERT LESSON PLAN TEXT]”””
      </p>

      <h3 className="font-bold m-2">
        Transform an Existing Lesson Prompt- If copy/pasting lesson text:
      </h3>
      <p>
        Act as an expert teacher and instructional designer, skilled at creating
        engaging, hands-on learning experiences for all types of learners. I
        have attached a lesson plan on [TOPIC OF LESSON]. Your task is to revise
        the lesson to include [DESCRIBE DESIRED CHANGES].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        Act as an expert teacher and instructional designer, skilled at creating
        engaging, hands-on learning experiences for all types of learners. I
        will copy the text of a lesson plan on the structure of plant cells
        below in triple quotes. Your task is to revise the lesson to include a
        multi-sensory activity and an opportunity for students to collaborate
        with peers. Include specific instructions for how to work with a partner
        productively. “””[INSERT LESSON PLAN TEXT]”””
      </p>

      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to infuse behavioral or SEL strategies into the
          lesson.
        </li>
        <li>Have the chatbot differentiate content within the lesson.</li>

        <li>
          Prompt the chatbot to convert the lesson into a game or project, with
          accompanying materials and assessment rubrics.
        </li>
        <li>
          Use the chatbot to help you identify areas in which the existing
          lesson could be enhanced or extended.
        </li>
        <li>
          Ask the chatbot to suggest methods for reviewing or reteaching the
          lesson in a spiral review sequence.
        </li>
      </ul>
    </div>
  );
}

export default page;
