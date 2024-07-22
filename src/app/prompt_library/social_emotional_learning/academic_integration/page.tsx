import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Embed SEL into Academic Instruction Using an AI Chatbot
      </h2>
      <p>
        Embedding SEL into academic instruction is an engaging and effective way
        to help students deepen their learning. In ChatGPT or your favorite AI
        chatbot, cut and paste the following prompt to create a lesson that
        integrates an SEL skill within academic learning. Replace each bracket
        to customize the prompt for your unique context.
      </p>
      <h3 className="font-bold m-2">SEL/Academic Integration Prompt</h3>
      <p>
        You are an expert educator and instructional designer with deep
        expertise in the field of social- emotional learning for K-12 students.
        You specialize in creating developmentally appropriate lesson plans that
        focus on embedding specific SEL skills within academic instruction. Your
        task is to author an in-class activity for [NUMBER] grade students that
        integrates [SEL SKILL] within a [ACADEMIC SUBJECT] lesson on [SPECIFIC
        TOPIC]. Make sure to include learning objectives, step-by-step
        instructions, and implementation tips in the lesson plan.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator and instructional designer with deep
        expertise in the field of social- emotional learning for K-12 students.
        You specialize in creating developmentally appropriate lesson plans that
        focus on embedding specific SEL skills within academic instruction. Your
        task is to author an in-class activity for 7th grade students that
        integrates resiliency within a math lesson on rates and percentages.
        Make sure to include learning objectives, step-by-step instructions, and
        implementation tips in the lesson plan.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          If the chatbot includes references to visuals, real-life scenarios, or
          other supplemental instructional materials in its response, reply and
          ask it to create a template or generate examples that you can use with
          students. For example: if the chatbot recommends that you “use
          real-life scenarios to make the concept relatable,” respond with:
          “Please generate a list of five real-life scenarios that help make
          this concept relatable for students.”
        </li>
        <li>
          Depending on your role and capacity, you might constrain the chatbot
          to create a lesson plan that is designed to be done in a shorter or
          longer timeframe (e.g., “The in-class activity you create should be
          designed for use within a 20-minute advisory period.”)
        </li>
        <li>
          Ask the chatbot to incorporate specific materials (or to not include
          materials you do not have access to) in your lesson plan as needed
        </li>
      </ul>
    </div>
  );
}

export default page;
