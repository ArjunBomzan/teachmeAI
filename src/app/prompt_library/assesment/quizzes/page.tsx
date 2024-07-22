import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Quizzes, with and without Content, Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to help you design quizzes, with and without lesson content, for
        your students. To get started, just replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2">Quiz Prompt without Content</h3>
      <p>
        You are an expert teacher, skilled in producing detailed student
        assessments that effectively demonstrate their learning. Your task is to
        create a [TYPE] quiz for [GRADE LEVEL AND SUBJECT] students learning
        about [TOPIC]. Include [INSERT SKILLS]. Provide an answer key for the
        teacher.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher, skilled in producing detailed student
        assessments that effectively demonstrate their learning. Your task is to
        create a 25-question, multiple-choice quiz for my 5th grade social
        studies students learning about Colonial America. Include key concepts,
        vocabulary terms, and relevant timelines, geography, and historical
        outcomes. Provide an answer key for the teacher.
      </p>
      <h3 className="font-bold m-2">
        Quiz Prompt with Content (for ChatGPT 4 or Claude)
      </h3>
      <p>
        You are an expert teacher, skilled in producing detailed student
        assessments that effectively demonstrate their learning. Your task is to
        create a [TYPE] quiz, based on the following [TEXT / VIDEO TRANSCRIPT],
        for [GRADE LEVEL AND SUBJECT] students learning about [TOPIC]. Include
        [INSERT SKILLS]. OPTIONAL: INCLUDE [PAGES / VIDEO TIMES YOU WANTED
        COVERED]. Provide a word bank for students (OPTIONAL: IF USING A
        FILL-IN-THE-BLANK QUIZ), and an answer key for the teacher.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher, skilled in producing detailed student
        assessments that effectively demonstrate their learning. Your task is to
        create a 20-question, fill-in-the-blank quiz, based on the following
        text from the classroom textbook, for my 5th grade social studies
        students learning about Colonial America. Include key concepts,
        vocabulary terms, and make sure to cover
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to modify anything it creates to ensure that it is
          perfect for your students. In this example you could ask, "Add 10 more
          questions," "Make the questions more challenging," "Make the responses
          have 5 options instead of 4," "Make the quiz more relatable to 12 year
          old students" etc.”
        </li>
        <li>
          Use specific learning objectives if you have them. You can say, “Make
          sure each question aligns to these learning objectives.”
        </li>
        <li>
          Enlist the chatbot to help create study guides or other materials to
          help students study and prepare for the quiz. "Create a study guide to
          help my 5th grade students prepare for this quiz."
        </li>
        <li>
          Ask the chatbot how it can help you make the quiz more accessible to
          students with special needs.
        </li>
        <li>
          Have the chatbot help you create feedback, such as model answers for
          any open-ended questions, or correct answer explanations, or even a
          rubric for a more detailed assessment.
        </li>
      </ul>
    </div>
  );
}

export default page;
