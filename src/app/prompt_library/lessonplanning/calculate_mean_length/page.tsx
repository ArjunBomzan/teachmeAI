import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Calculate MLU in a Language Sample
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you analyze the mean length of utterance for your speech
        therapy language sample. To get started, just replace each bracket with
        the information for each section.
      </p>
      <h3 className="font-bold m-2">Calculating MLU Prompt</h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        analyzing language samples for mean length of utterance to determine how
        well a student’s language skills are developing. Your task is to analyze
        the following language sample and calculate the mean length of
        utterance. Here is the language sample: [INSERT LANGUAGE SAMPLE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert speech language pathologist, highly skilled in
        analyzing language samples for mean length of utterance to determine how
        well a student’s language skills are developing. Your task is to analyze
        the following language sample and calculate the mean length of
        utterance. Here is the language sample: [INSERT LANGUAGE SAMPLE].
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ensure that the language sample does not include personally
          identifiable information (PII).
        </li>
        <li>
          Enlist the chatbot to calculate percentage grammatical utterances
          (PGU). If your student is putting words together but they are not as
          long or as complicated as you want, the PGU measurement can help you
          hone in on grammar goals and make a plan for treatment.s
        </li>

        <li>
          In calculating MLU, type in just the utterance that was stated, not
          the articulation corrections. For example, if your student says, “dat
          is wight.” And you type it as “dat/that is wight/right.” The AI
          chatbot will calculate it as 5 morphemes, not 3.
        </li>
        <li>
          Note, the chatbot cannot distinguish between male and female pronouns
          without context. If your student refers to his mom as “He,” the
          chatbot will not understand that the pronoun is incorrect unless you
          also use the proper noun “Mom” in the sample.
        </li>
        <li>
          The chatbot cannot completely replace your knowledge as an SLP. While
          it can quickly calculate and analyze grammar and syntax, please also
          review all of your information before submitting your final report or
          reporting to parents.
        </li>
        <li>
          The chatbot cannot completely replace your knowledge as an SLP. While
          it can quickly calculate and analyze grammar and syntax, please also
          review all of your information before submitting your final report or
          reporting to parents.
        </li>
      </ul>
    </div>
  );
}

export default page;
