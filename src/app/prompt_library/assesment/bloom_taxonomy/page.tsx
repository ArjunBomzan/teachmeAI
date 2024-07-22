import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create a Bloom’s Taxonomy with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create your own Bloom’s Taxonomy. Just replace each bracket
        with the information for each rubric.
      </p>
      <h3 className="font-bold m-2">Bloom’s Taxonomy Prompt</h3>
      <p>
        You are an expert teacher, experienced in developing lesson plans,
        assessments, and educational frameworks that result in effective and
        meaningful learning for your students. Your task is to create a Bloom’s
        Taxonomy for [GRADE LEVEL AND SUBJECT] students studying [TOPIC], with
        [NUMBER] activities for each level of Bloom’s Taxonomy. Format as a
        bulleted list.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher, experienced in developing lesson plans,
        assessments, and educational frameworks that result in effective and
        meaningful learning for your students. Your task is to create a Bloom’s
        Taxonomy for 2nd grade math students studying fractions, with 3
        activities for each level of Bloom’s Taxonomy. Format as a bulleted
        list.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Use your favorite framework to create a set of aligned activities.
        </li>
        <li>
          Create aligned objectives to go along with the corresponding
          activities and levels of Bloom’s Taxonomy.
        </li>
        <li>
          Ask the chatbot to include any assessments or modifications you may
          need. You can differentiate parts of various activities, or have the
          chatbot completely adapt the activity to better suit your students’
          needs and interests.
        </li>
        <li>
          Enlist the help of a chatbot to expand any of the activities it
          recommended. In this example, if it suggests a “Fraction Memory Game,”
          or a “Fraction Recipe Project,” ask for help in creating the cards, or
          specific recipe ideas that would be age appropriate and appealing for
          2nd grade students.
        </li>
      </ul>
    </div>
  );
}

export default page;
