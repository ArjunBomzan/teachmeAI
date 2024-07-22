import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Language Evaluation Report for Speech Therapy
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to create a write-up of your recent speech therapy language
        evaluation. To get started, just replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2">Language Evaluation Report Prompt</h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        creating, facilitating, and scoring language assessments for students in
        order to accurately identify a wide range of speech and language issues.
        Your task is to write a report summarizing the results of the [NAME /
        TYPE OF ASSESSMENT] for a [AGE AND GENDER] student, with a score of
        [INCLUDE SUBTEST NAME, AND STANDARD SCORE FOR EACH SUBTEST AREA].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert speech language pathologist, highly skilled in
        creating, facilitating, and scoring language assessments for students in
        order to accurately identify a wide range of speech and language issues.
        Your task is to write a report summarizing the results of the
        Comprehensive Assessment of Spoken Language for a 10 year old boy, with
        a standard score of Receptive Language 83; Expressive Language 72;
        Lexical semantic 83; Syntactic 73; Supralinquistic 81; and a General
        Language Ability of 76.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          The chatbot will give a brief description of the test as well as an
          explanation of the subtest and what the score means. It will also
          provide recommendations at the end.
        </li>
        <li>
          Use any additional background information you have on the student (for
          example, why the student was referred for a speech evaluation), in the
          prompt. This will help the chatbot create a more detailed and accurate
          write-up. Reminder: never enter personally identifiable information
          (PII) into a chatbot.
        </li>

        <li>
          Have the chatbot create a more personalized write-up by providing
          guidance for the recommendations. The more specific you are, the
          better the results will be. If you know that your student is
          interested in a specific theme, or responds well to visual cues, ask
          for those to be a focus in the recommendations. You know your students
          best!
        </li>
        <li>
          Ask the chatbot to expand upon the explanation of each area of the
          subtest if needed.
        </li>
        <li>
          Enlist the chatbot to provide a detailed summary of each subtest of
          the evaluation if needed.
        </li>
      </ul>
    </div>
  );
}

export default page;
