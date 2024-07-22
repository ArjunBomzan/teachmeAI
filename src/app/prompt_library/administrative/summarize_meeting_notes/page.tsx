import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Summarize Meeting Notes with an AI Chatbot
      </h2>
      <p>
        Upload meeting notes into Claude or your favorite AI chatbot* that
        allows document attachment (be sure to remove all personally
        identifiable information first). Alternatively, you can copy and paste
        the text of the document into the chatbot. Then copy and paste the
        following prompt to summarize the document for distribution to
        stakeholders.
      </p>
      <p>
        *Note-this prompt is most effective with chatbots such as Claude that
        allow users to attach documents to prompts.
      </p>
      <h3 className="font-bold m-2">
        {" "}
        Summarize Meeting Notes Prompt - If attaching a file:
      </h3>
      <p>
        You are a veteran teacher, skilled at communicating clearly with
        colleagues and students’ caregivers. Your task is to draft a summary of
        this [TYPE OF MEETING] based on the notes in the attached file.
        [ADDITIONAL INSTRUCTIONS.] [ATTACH MEETING NOTES]
      </p>
      <h3 className="font-bold m-2">Example Prompt</h3>
      <p className="italic">
        Act as a veteran teacher, skilled at communicating clearly with
        colleagues and students’ caregivers. Your task is to draft a summary of
        this annual review meeting based on the notes in the attached file.
        Clearly identify the actionable items, who will take ownership of each
        actionable item, and next steps for the family. [ATTACH MEETING NOTES]
      </p>
      <h3 className="font-bold m-2">
        Summarize Meeting Notes Prompt - If copy/pasting text:
      </h3>
      <p>
        YYou are a veteran teacher, skilled at communicating clearly with
        colleagues and students’ caregivers. Your task is to draft a summary of
        this [TYPE OF MEETING] based on the notes I will enter below in triple
        quotes. [ADDITIONAL INSTRUCTIONS.] “””[INSERT TEXT]”””
      </p>
      <h3 className="font-bold m-2">Example Prompt</h3>
      <p className="italic">
        {" "}
        You are a veteran teacher, skilled at communicating clearly with
        colleagues and students’ caregivers. Your task is to draft a summary of
        this annual review meeting based on the notes I will enter below in
        triple quotes. Clearly identify the actionable items, who will take
        ownership of each actionable item, and next steps for the
        family.“””[INSERT TEXT]”””
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc flex flex-col gap-3 ">
        <li>
          Have the chatbot translate the summary into the caregivers’ native
          language (we do advise having a native speaker check AI-generated
          translations when possible)
        </li>
        <li>
          Ask the chatbot to locate specific information within a longer
          document
        </li>
        <li>
          Prompt the chatbot to explain a complex concept or jargon within the
          document in layperson terms
        </li>
        Use the document as the basis for generating new content with the
        chatbot (schedules, follow-up emails, workflows, etc.)
      </ul>
    </div>
  );
}

export default page;
