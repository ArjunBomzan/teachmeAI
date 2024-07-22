import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create an AAC Word List
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help determine appropriate vocabulary targets to teach your
        AAC (augmentative and alternative communication) user. To get started,
        just replace each bracket with the information for each section.
      </p>
      <h3 className="font-bold m-2">AAC Word List Prompt</h3>
      <p>
        You are a [AGE / GRADE] student who uses augmentative and alternative
        communication, mostly relying on [TYPES OF AAC] to communicate with
        those around you. Your vocabulary includes [DESCRIBE VOCABULARY SYSTEM].
        You spend most of your time [INSERT MAIN ACTIVITIES / MAIN COMMUNICATION
        NEEDS]. Your task is to give me [DESCRIBE DESIRED VOCABULARY].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an 8-year-old augmentative and alternative communication user,
        mostly relying on core vocabulary and gestures to communicate with those
        around you. Your vocabulary includes a multi- level dynamic display
        system with 60 core words per page. You spend most of your time going to
        school, playing with friends, and playing soccer. Your task is to give
        me 25, 2-word core word combinations to use to communicate some of my
        common needs.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>Ask the chatbot to include any number of word combinations.</li>
        <li>
          Have the chatbot include a specific type of vocabulary that you need
          (i.e. core words, action words, nouns, descriptive words, etc.).
        </li>

        <li>
          Or, give the chatbot a theme or need to provide communication
          vocabulary for, such as a child going to a birthday party, or a
          student working on a group project, or going hiking.
        </li>
        <li>
          Enlist the chatbot to include the specific vocabulary system you
          student uses if needed (i.e. TouchChat with WordPower 60 basic
          vocabulary; Lamp Words for Life 84 sequenced).
        </li>
      </ul>
    </div>
  );
}

export default page;
