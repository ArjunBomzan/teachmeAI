import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Generate Conflict Resolution Role-Playing Activities Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to generate role playing activities that help students navigate
        difficult situations and resolve conflict. This strategy also helps
        students develop problem-solving skills and build healthier
        relationships. To get started, simply replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2">Conflict Resolution Role-Play Prompt</h3>
      <p>
        You are an expert educator, with expertise in social and emotional
        learning and the CASEL framework skilled in helping your students learn
        to navigate conflict. Your task is to create [NUMBER] detailed
        role-playing scenarios for my [GRADE LEVEL] students to help them
        practice [DESCRIBE DIFFICULT SITUATION]. Include guidance on
        facilitating the role play and include a reflection question for
        students to engage with after completing the activity.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator, with expertise in social and emotional
        learning and the CASEL framework skilled in helping your students learn
        to navigate conflict. Your task is to create 4 detailed role-playing
        scenarios for my 4th grade students to help them practice resolving
        disputes that happen while playing team sports such as soccer or
        basketball. Include guidance on facilitating the role play and include a
        reflection question for students to engage with after completing the
        activity.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Have the chatbot adapt the strategies depending on your students’
          needs, specific situations, or conflicts that have arisen. For
          example, if students are having difficulty during recess, you can
          tailor the prompt to help them work through conflicts that occur in
          that particular setting. You can even include details about what type
          of games or equipment are involved in the dispute, or personality
          traits that may be contributing factors.
        </li>
        <li>
          Ask the chatbot for direct instruction or additional explanations if
          needed. Ask the chatbot to expand on a scenario with a suggested
          script for students to use. The more specific the better (lexile
          level, key vocabulary, target strategies, etc.).
        </li>
        <li>
          Invite students to write or develop concepts for their own
          role-playing scenarios and use the chatbot to revise the scenarios to
          be more creative, diverse, or relevant to their lives.
        </li>
      </ul>
    </div>
  );
}

export default page;
