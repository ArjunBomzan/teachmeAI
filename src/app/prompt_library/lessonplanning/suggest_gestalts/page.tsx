import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Suggest Gestalts to Model in Therapy
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to guide language modeling of gestalts that are relevant to your
        student. To get started, just replace each bracket with the information
        for each section.
      </p>
      <h3 className="font-bold m-2">
        Gestalt Scripts to Model in Therapy Prompt
      </h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        recognizing, communicating with, and treating people who are gestalt
        language processors. You are working with a gestalt language processor
        who scripts from [INSERT TV SHOW / MOVIE]. Your task is to provide me
        with [NUMBER] sample scripts to teach in speech therapy. Each script
        should be about [NUMBER] lines long and include at least [NUMBER]
        characters. Make sure the scripts [INSERT ANY REMAINING SPECIFICATIONS].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert speech language pathologist, highly skilled in
        recognizing, communicating with, and treating people who are gestalt
        language processors. You are working with a gestalt language processor
        who scripts from the show Dora the Explorer. Your task is to provide me
        with 5 sample scripts to teach in speech therapy. Each script should be
        about 20 lines long and should include at least two characters. Make
        sure the scripts are in English and provide opportunities to practice
        vocabulary expansion, improving sentence structure, and practicing
        social communication skills.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Note: not all chatbots will provide scripts from TV shows or movies
          based on copyright laws. Try a second chatbot if the one you are using
          will not provide you options.
        </li>
        <li>
          Use the chatbot to tailor the script ideas for therapy sessions to the
          specific needs and goals of your student. Consider their current
          language abilities, areas of strengths and weaknesses, and any
          additional communication challenges they may face. Be specific and
          include any relevant details into the prompt to yield the most helpful
          response.
        </li>

        <li>
          Enlist the chatbot for ideas on how to incorporate multimodal
          learning. Gestalt language processors may benefit from learning
          experiences that engage multiple senses. Combine auditory, visual, and
          kinesthetic modalities to enhance learning and communication.
        </li>
        <li>
          Have the chatbot facilitate the generalization and transfer of
          language skills learned from scripts to real-life situations and
          contexts. For example, ask “How can I encourage my gestalt language
          processor student to apply newly acquired social communication skills
          from Dora the Explorer scripts to everyday interactions beyond the
          therapy setting?”
        </li>
      </ul>
    </div>
  );
}

export default page;
