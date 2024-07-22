import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Flashcard Content with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, you or your students can cut and
        paste the following prompt to generate terms and definitions formatted
        so you can easily create flashcards. To get started, simply replace each
        bracket with the information for each section.
      </p>
      <h3 className="font-bold m-2">Flashcard Prompt</h3>
      <p>
        You are a diligent [GRADE LEVEL / SUBJECT] student, skilled in creating
        excellent study materials that help you achieve academic success. Your
        task is to define the following [NUMBER] terms: [INSERT TERMS]. Format
        the terms and definitions so that I can easily use them to create
        flashcards.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are a diligent 9th grade Biology student, skilled in creating
        excellent study materials that help you achieve academic success. Your
        task is to define the following 10 terms: mitosis, meiosis, prophase,
        chromatid, metaphase, anaphase, interphase, eukaryote, telophase,
        cytokinesis. Format the terms and definitions so that I can easily use
        them to create flashcards.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Have the chatbot generate terms for you first if you're not sure what
          words to focus on. For example, "List 15 important terms that I might
          need to know for a test on mitosis and meiosis.”
        </li>
        <li>
          Using these same terms, have the chatbot create other study aids to
          help you, such as a fill in the blank worksheet. When you're done, ask
          the chatbot for the answer key to check your work.
        </li>
        <li>
          Ask the chatbot to create sample questions that you might see on the
          test. Answer them, and then check your work by having the chatbot
          provide an answer.
        </li>
      </ul>
    </div>
  );
}

export default page;
