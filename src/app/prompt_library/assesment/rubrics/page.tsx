import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Rubrics with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create your own rubrics. Just replace each bracket with the
        information for each rubric.
      </p>
      <h3 className="font-bold m-2">Rubric Prompt</h3>
      <p>
        You are an expert teacher and curriculum writer, skilled in creating
        assessments and evaluating student work. Your task is to create a rubric
        for my [GRADE LEVEL AND SUBJECT] class studying [TOPIC]. My students are
        completing [ASSIGNMENT TITLE], in which they [ASSIGNMENT DESCRIPTION].
        Format the rubric as a chart and include a 5 point scale.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher and curriculum writer, skilled in creating
        assessments and evaluating student work. Your task is to create a rubric
        for my 5th grade science class studying engineering. My students are
        doing a STEM experiment, the “egg drop challenge,” in which they use
        specific materials to design and build a container to protect the egg
        from cracking as it is dropped from increasingly higher heights. Format
        the rubric as a chart and include a 5 point scale.
      </p>
      <h3 className="font-bold m-2">Rubric with Directions Prompt</h3>
      <p>
        Act as an experienced [TYPE OF TEACHER], skilled at giving targeted,
        actionable feedback with expertise in using generative AI in the
        classroom. Create a [#] point rubric for my [GRADE LEVEL AND SUBJECT]
        that assesses [ASSIGNMENT DESCRIPTION]. Take into account in the rubric
        that the students were allowed to use generative AI for [DESCRIPTION OF
        TASKS STUDENTS CAN USE GENAI]. Include a criteria on the appropriate
        citing of generative AI using [CITATION STYLE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        Act as an experienced high school English teacher, skilled at giving
        targeted, actionable feedback with expertise in using generative AI in
        the classroom. Create a 4 point rubric for my 11th grade English class
        that assesses a presentation on rhetorical devices in famous political
        speeches from the 21st century. Take into account in the rubric that the
        students were allowed to use generative AI for initial brainstorming,
        refining their ideas, and creating imagery. Include a criteria on the
        appropriate citing of generative AI using MLA format.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Enlist the chatbot to include which criteria you’d like to include in
          your rubric - the more specific you can be in your prompt, the better.
          In the egg example you could say, “Include design, creativity,
          presentation, and 2 other categories for a total of 5 criteria
          students will be evaluated on.”
        </li>
        <li>
          Have the chatbot change the format of the rubric to a list or
          checklist depending on what works best for your assignment.
        </li>
        <li>
          Ask the chatbot for help in the next step, as well. Use it to create
          feedback for students who may have struggled with the project,
          particularly in specific categories.
        </li>
        <li>
          Use the chatbot to generate the rubric in advance and pass it out to
          students. If there is a particular area students seem unprepared for,
          as a class, have the chatbot generate ideas for how they can practice
          and prepare.
        </li>
      </ul>
    </div>
  );
}

export default page;
