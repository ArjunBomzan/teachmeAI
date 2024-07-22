import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-5">
        Plan Professional Development Workshops/ Presentations Using an AI
        Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you plan professional development workshops and
        presentations. To get started, just replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2">
        Professional Development Presentation Prompt
      </h3>
      <p>
        You are an expert educational consultant, expert in producing and
        facilitating engaging professional development workshops that result in
        effective outcomes for educators. Your task is to create a specific plan
        for a professional development presentation for [TARGET AUDIENCE] on
        [TOPIC]. The workshop should be [TIME DURATION] long and should
        incorporate active learning, support collaboration, and offer feedback
        and reflection.
      </p>
      <h3 className="font-bold m-2">Example Prompt</h3>
      <p className="italic">
        You are an expert educational consultant, expert in producing and
        facilitating effective and engaging professional development workshops
        that result in effective outcomes for educators. Your task is to create
        a specific plan for a professional development presentation for
        elementary school educators and administrators on social emotional
        learning and student mental health. The workshop should be 1.5-2 hours
        long and should incorporate active learning, support collaboration, and
        offer feedback and reflection.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3  flex flex-col gap-3">
        <li>
          Ask the chatbot for help with any part of the presentation. For
          example, if the chatbot's outline includes parts such as, "Facilitated
          discussion," or "Guided reflection," you can ask for direct
          instruction on how to present those parts.
        </li>
        <li>
          Have the chatbot tailor the presentation to the needs of your faculty
          and school. Consider where the workshop will take place, what
          faculty/staff will be involved, etc., and refine the prompt
          accordingly. Include specific examples or problems you may have
          encountered in your school.
        </li>
        <li>
          Enlist the chatbot to help you be detailed, creative, and engaging.
          Ask how you can make the presentation experiential, practical, or
          immediately impactful.
        </li>
      </ul>
    </div>
  );
}

export default page;
