import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Generate SMART Goals with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to assist in goal writing for speech and language therapy. To get
        started, just replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2">SMART Goal Generation Prompt</h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        assessing and treating a wide range of speech and language issues in
        students. Your task is to write a SMART goal, that delineates specific,
        measurable, achievable, relevant, and time-bound parameters, for [INSERT
        TARGET SKILL YOU ARE WORKING ON] for [GRADE LEVEL STUDENT].
      </p>
      <h3 className="font-bold m-2">Example Prompt</h3>

      <p className="italic0">
        {" "}
        You are an expert speech language pathologist, highly skilled in
        assessing and treating a wide range of speech and language issues in
        students. Your task is to write a SMART goal, that delineates specific,
        measurable, achievable, relevant, and time-bound parameters, for
        articulation for accurately producing the /s/ sounds in all positions of
        words for my second grade student.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Have the chatbot create a goal for any skill that you are targeting,
          including both speech and language skills. Adjust the prompt
          accordingly in order to get the most targeted response.{" "}
        </li>
        <li>
          Ask the chatbot for ideas on how to incorporate a variety of sensory
          modalities. These can enhance learning and retention. Use visual aids,
          tactile cues, auditory feedback, and proprioceptive input to support
          correct articulation.
        </li>
        <li>
          Enlist the chatbot for strategies on how to encourage carryover by
          practicing the target sound in natural conversational contexts. If
          needed, you can ask the chatbot to create a script to provide the
          student with feedback and reinforcement.
        </li>
      </ul>
    </div>
  );
}

export default page;
