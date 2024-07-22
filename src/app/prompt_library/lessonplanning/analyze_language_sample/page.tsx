import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Analyze a Language Sample
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to analyze the information you would like to gain in your speech
        therapy language sample. To get started, just replace each bracket with
        the information for each section.
      </p>
      <h3 className="font-bold m-2">Analyze a Language Sample Prompt</h3>
      <p>
        You are an expert speech language pathologist, highly skilled in
        structural analysis of student language samples. Your task is to analyze
        the following language sample to look at [NOUNS, PRESENT PROGRESSIVE
        VERB TENSE, PAST TENSE VERB TENSE, PLURALS, AND POSSESSIVES]. [INSERT
        LANGUAGE SAMPLE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert speech language pathologist, highly skilled in
        structural analysis of student language samples. Your task is to analyze
        the following language sample to look at pronouns and verb tenses.
        [INSERT LANGUAGE SAMPLE].
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ensure that the language sample does not include reference to
          personally identifiable information (PII).
        </li>
        <li>
          Have the chatbot adapt what you are looking for in your language
          sample based on your students' needs. You can ask it to analyze just
          one aspect or look for multiple aspects.
        </li>
        <li>
          Ask the chatbot for direct additional explanations if needed. For
          example, if you would like an explanation of what present progressive
          verb forms are you can say, “Provide me with a definition of present
          progressive verb forms.”
        </li>
        <li>
          Have the chatbot elaborate on treatment plans. For example, you can
          ask, “Give me a list of present progressive verb forms for a (student
          age) to target in speech therapy.”
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
      </ul>
    </div>
  );
}

export default page;
