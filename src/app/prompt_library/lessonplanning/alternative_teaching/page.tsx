import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Brainstorm Alternative Teaching Methods with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to brainstorm a list of alternative teaching strategies for any
        topic. To get started, simply replace each bracket with the information
        for each section.
      </p>
      <h3 className="font-bold m-2">
        Brainstorm Alternative Teaching Methods Prompt
      </h3>
      <p>
        You are a [GRADE LEVEL / CONTENT AREA] teacher with over 20 years of
        experience designing effective learning experiences for students with
        diverse learning needs. Suggest [DESIRED NUMBER] alternate instructional
        strategies for teaching my [GRADE LEVEL] students [TOPIC]. I have
        already tried [DESCRIBE STRATEGIES USED]. My students are having
        difficulty with [DESCRIBE DIFFICULTIES]. They are [DESCRIBE STUDENTS].
        Tailor the alternate strategies to this description.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an elementary school teacher with over 20 years of experience
        designing effective learning experiences for students with diverse
        learning needs. Suggest three to five alternate instructional strategies
        for teaching my 2nd grade student how to decode vowel digraphs. I have
        already used direct instruction and demonstration. My students are
        having difficulty with the digraph “ea” as in “thread” and “ea” as in
        “beach”. My students are visual and tactile learners who struggle to
        focus on a task after five to ten minutes. Tailor the alternate
        strategies to this description.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to follow up with details on how to implement some of
          its suggested activities.
        </li>
        <li>
          Use the chatbot to help create suggested supplementary resources, such
          as word lists or game rules.
        </li>
        <li>
          Customize the activity even further by adding in student interests
          (e.g., baseball, horses, technology, etc.).
        </li>
        <li>
          Build on the initial response by asking for strategies in related
          areas of difficulty.
        </li>
        <li>
          Narrow the prompt to focus on an individual student as opposed to a
          group (Note-never enter personally identifiable information into a
          chatbot).
        </li>
      </ul>
    </div>
  );
}

export default page;
