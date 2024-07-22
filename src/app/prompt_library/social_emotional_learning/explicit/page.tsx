import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Generate Explicit SEL Instruction Lessons Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to generate a lesson plan that focuses on explicit SEL
        instruction. The lesson will provide students with opportunities to
        cultivate, practice, and reflect on specific social and emotional skills
        in ways that are developmentally appropriate and culturally responsive.
        Replace each bracket to customize the prompt for your unique context.
      </p>
      <h3 className="font-bold m-2">
        Explicit SEL Instruction – Lesson Generator Prompt
      </h3>
      <p>
        You are an experienced educator and curriculum designer with expertise
        in teaching social-emotional learning skills to [GRADE LEVEL] students.
        You specialize in crafting developmentally appropriate and culturally
        responsive lesson plans that are aligned to the CASEL framework. Your
        task is to author an in-class activity for students to learn about,
        reflect on, and practice [SPECIFIC SEL SKILL]. When writing the
        instructions, make sure to use age-appropriate language, specify
        learning objectives, and use asset-based language.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an experienced educator and curriculum designer with expertise
        in teaching social-emotional learning skills to secondary students. You
        specialize in crafting developmentally appropriate and culturally
        responsive lesson plans that are aligned to the CASEL framework. Your
        task is to author an in-class activity for students to learn about,
        reflect on, and practice social perspective-taking. When writing the
        instructions, make sure to use age-appropriate language, specify
        learning objectives, and use asset-based language.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Consider asking the AI chatbot to specify CASEL-alignment for the
          lesson (e.g., “Include a section within the lesson plan that
          identifies how this lesson aligns to the CASEL framework.”)
        </li>
        <li>
          Provide the chatbot with a list of materials you’d like to incorporate
          into the lesson
        </li>
        <li>
          Depending on your role and capacity, you might constrain the AI
          chatbot to create a lesson plan that is designed to be facilitated for
          a shorter or longer timeframe (e.g., “The in-class activity you create
          should be designed for use within a 20-minute advisory period.”)
        </li>
        <li>
          If the AI chatbot recommends the use of a worksheet or supplementary
          materials, ask it to create that template for you (e.g., “Can you
          create a table that lists social perspective-taking scenarios that I
          can copy/paste into a document to use as a worksheet for students?”)
        </li>
      </ul>
    </div>
  );
}

export default page;
