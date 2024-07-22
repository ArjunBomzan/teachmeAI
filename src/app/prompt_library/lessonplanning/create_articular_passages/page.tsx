import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Speech Therapy Articulation Passages
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to create articulation passages for your speech therapy students
        based on their interests and target sounds. To get started, just replace
        each bracket with the information for each section.
      </p>
      <h3 className="font-bold m-2">Create Articulation Passages Prompt</h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        crafting articulation passages designed for your students to produce and
        articulate their target sounds. Your task is to create an articulation
        passage using [TARGET SOUND] that is [THEME PREFERENCE]. The passage
        should be [NUMBER] [WORDS / LINES / PAGES] long and at a [READING
        FRAMEWORK] reading level.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert speech language pathologist, highly skilled in
        crafting articulation passages designed for your students to produce and
        articulate their target sounds. Your task is to create an articulation
        passage using vocalic /r/ that is Marvel character themed. The passage
        should be one page long and at a 6th grade reading level.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Enlist the chatbot to be specific and creative with your prompt theme
          preference in order to make it unique and engaging for your students.
        </li>
        <li>
          Use the chatbot for ideas on how to incorporate visual aids. In the
          example above, you could use pictures of Marvel characters or scenes
          from the Avengers movies. Depending on what the passage is, ask the
          chatbot for visual aid ideas to support comprehension and engagement,
          especially for younger or visual learners.
        </li>

        <li>
          Ask the chatbot to differentiate the prompt depending on your
          student’s articulation needs. In the example above, you could have the
          chatbot focus more or less on the vocalic /r/ sounds in the initial,
          medial, or final parts of a word depending on what word positions the
          student struggles to articulate the sound
        </li>
      </ul>
    </div>
  );
}

export default page;
