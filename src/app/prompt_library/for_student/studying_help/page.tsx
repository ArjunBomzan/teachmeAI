import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Help Students Study with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, have your students cut and paste
        the following prompt to help them study for an upcoming assessment. To
        get started, simply replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2">Study Help Prompt</h3>
      <p>
        I am a conscientious [GRADE LEVEL AND SUBJECT] student skilled in
        creating detailed study resources based on my organized notes, that
        effectively help me achieve academic success. I am preparing for an
        upcoming [TOPIC AND SPECIFIC TYPE OF ASSESSMENT]. Below are the notes
        I’ve taken for the test. Your task is to generate a practice test, based
        on my notes below, to help me prepare.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        I’m a conscientious 9th grade biology student skilled in creating
        detailed study resources based on my organized class notes, that
        effectively help me achieve academic success. I am preparing for an
        upcoming multiple choice unit test on vertebrates. Below are the notes
        I’ve taken for the test. Your task is to generate a practice test, based
        on my notes below, to help me prepare. [INSERT CLASS NOTES].
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Change it up and have the chatbot develop other types of study tools:
          study guides, worksheets, graphic organizers, mnemonic devices,
          flashcards, etc.
        </li>
        <li>Ask the chatbot to interview the student about the topic.</li>
        <li>
          Have the chatbot focus on certain information that may be weighted
          more heavily in the exam.
        </li>
        <li>
          Study with a friend. Each person can use the chatbot to create a
          different type of test (multiple choice, fill in the blank, short
          answer, etc.). Swap tests and complete the other person’s test, and
          then swap back and grade the one that they took.
        </li>
      </ul>
    </div>
  );
}

export default page;
