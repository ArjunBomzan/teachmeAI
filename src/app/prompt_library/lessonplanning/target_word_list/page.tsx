import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Vocabulary and Target Word Lists for Speech Therapy
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to create vocabulary or target word lists to use in speech
        therapy. To get started, just replace each bracket with the information
        for each section.
      </p>
      <h3 className="font-bold m-2">Vocabulary and Target Word Lists Prompt</h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        supporting and enriching students’ speech and language growth and
        development. Your task is to create a list of [TARGET SKILL WORDS] for
        [GRADE LEVEL] students. The list should include [NUMBER SPECIFICATIONS].
        The words should be [DESIRED TONE / DESCRIPTION / THEME].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert speech language pathologist, highly skilled in
        supporting and enriching students’ speech and language growth and
        development. Your task is to create a list of synonyms for a 3rd grade
        student. The list should include at least 15 words, with 5 synonyms for
        each. The words should be interesting and challenging, yet appropriate
        for 3rd graders.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Use this prompt to create different target types of target lists.
          Examples of target word lists that you can prompt for:
          <ul className="list-disc ml-6">
            <li>Synonyms</li>
            <li>Antonyms</li>
            <li>General vocabulary lists</li>
            <li>Figurative language</li>
            <li>Similes</li>
            <li>Idioms</li>
          </ul>
        </li>
        <li>
          Prompt the chatbot to align the exercises with your students’
          individual learning needs. For example, if your students have specific
          language goals or areas of improvement, such as expanding their
          expressive vocabulary or understanding synonyms in context, select
          synonyms that target those particular goals.
        </li>

        <li>
          Have the chatbot provide contextual examples or sentences using each
          synonym to illustrate its meaning in different contexts. This can help
          students grasp the nuances of each word and how they can be used
          appropriately in conversation or writing.
        </li>
      </ul>
    </div>
  );
}

export default page;
