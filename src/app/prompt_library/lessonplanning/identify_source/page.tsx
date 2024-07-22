import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Gestalt Language Processor: Identifying the Source of a Script
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you determine what TV or movie a script is from. To get
        started, just replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2">Using GLP to Determine a Script Prompt</h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        recognizing and understanding how children learn and process speech and
        language. You are working with a student who is a gestalt language
        processor, using language and scripts from childrens’ TV shows. Recently
        my [AGE / GRADE LEVEL] student said, [INSERT SCRIPT / PHRASE]. Your task
        is to tell me what TV show this script is from.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert speech language pathologist, highly skilled in
        recognizing and understanding how children learn and process speech and
        language. You are working with a student who is a gestalt language
        processor, using language and scripts from kids’ TV shows. Recently my
        Kindergarten student said, "Muddy mountain. Mountain. Let’s go up the
        mountain. Backyardigans. Morning melt. Mountain. Muddy mountain. Bridge
        go over muddy mountain. There we go. There we go. Go around. Pick them
        up. Where’d it go? Powerful, full, full." Your task is to tell me what
        kids’ TV show this script is from.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Note that not all chatbots will find the TV show or movie. Some will
          say copyright laws do not allow them to share. Try a second Chatbot to
          find the information you need.
        </li>
        <li>
          UAsk the chatbot to expand upon familiar scripts from TV shows,
          movies, or books that the child enjoys by contributing to the story
          using the same style of language. These scripts can serve as
          scaffolding for your student’s language development and can help them
          feel more comfortable and confident in communication.
        </li>

        <li>
          Enlist the chatbot to create for your student a similar script to the
          one they enjoy, but one that also incorporates repetition. Children
          who are gestalt language processors benefit from repetition.
        </li>
      </ul>
    </div>
  );
}

export default page;
