import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold m-5 text-[24px]">
        {" "}
        Create Formatted Classroom Observation Documents with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create formatted classroom observations based on your notes;
        just replace each bracket with the information for each rubric. Do not
        provide any personally identifiable information in your prompt to ensure
        privacy.
      </p>
      <h3 className="font-bold m-2">
        {" "}
        Classroom Observation Prompt (Simplified)
      </h3>
      <p className="italic">
        You are an expert educational administrator of a [SCHOOL TYPE] with
        expertise in providing actionable feedback to teachers based on
        classroom observations. Your task is to create an observation report
        using [INSERT FRAMEWORK]. I will provide you with the lesson plan, and
        your task is to [RATE THE FOLLOWING COMPONENTS / PROVIDE ACTIONABLE
        FEEDBACK / ANALYZE THIS PART OF THE OBSERVATION / ETC]. This is the
        lesson plan: [LESSON CONTENT].
      </p>
      <h3 className="font-bold m-2">Example Prompt (Simplified)</h3>
      <p className="italic">
        You are an expert educational administrator of an independent middle
        school with expertise in providing actionable feedback to teachers based
        on classroom observations. Your task is to create an observation report
        using the Danielson Framework. I will provide you with the lesson plan,
        and your task is to analyze the use of assessment in the instruction
        based on the lesson. This is the lesson plan: [CUT AND PASTE LESSON
        CONTENT].
      </p>
      <h3 className="font-bold m-2">Classroom Observation Prompt (Detailed)</h3>
      <p>
        You are an expert educational administrator of a [SCHOOL TYPE] with
        expertise in providing actionable feedback to teachers based on
        classroom observations. Your task is to create an observation report
        using [INSERT FRAMEWORK]. I will provide you with the lesson plan, and
        your task is to rate the following components: [OBSERVATION FRAMEWORK
        ELEMENTS]. Also take into account these classroom notes: [INSERT NOTES].
        This is the lesson plan: [LESSON CONTENT].
      </p>
      <h3 className="font-bold m-2">Example Prompt (Detailed)</h3>
      <p>
        You are an expert educational administrator of an urban high school with
        expertise in providing actionable feedback to teachers based on
        classroom observations. Your task is to create an observation report
        using the Danielson Framework. I will provide you with the lesson plan,
        and your task is to rate the following components; 1a: Demonstrating
        knowledge of content and pedagogy, 1e: Designing coherent instruction,
        3b: Using questioning and discussion techniques, 3c: Engaging students
        in learning, and 3d: Using assessment in instruction based on the
        lesson. Also take into account these classroom notes [NOTES]. This is
        the lesson plan: [CUT AND PASTE LESSON CONTENT].
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc flex flex-col gap-2">
        <li>
          Get specific! The more specific you are with how you’d like your
          observation formatted the better. If you don’t have a full lesson
          plan, describe it as clearly as you can.{" "}
        </li>
        <li>
          Ask the chatbot to create specific strategies for the teacher to move
          up in his/her proficiency based on the framework.
        </li>
        <li>
          Enlist the chatbot for help in creating a script to deliver the
          feedback, particularly if you want to maintain a specific tone or make
          sure to mention specific points from the lesson.
        </li>
        <li>
          Use the chatbot to generate ideas/create follow up lesson plans for
          the teacher to use, and make sure the chatbot incorporates the
          strategies the teacher needs to work on in the lesson plans.{" "}
        </li>
      </ul>
    </div>
  );
}

export default page;
