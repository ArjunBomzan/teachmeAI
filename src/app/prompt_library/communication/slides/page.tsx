import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Slides for Google or Powerpoint with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create content for your Google slides or Powerpoint
        presentations; just replace each bracket with the information for each
        rubric. If the Chatbot has image generation capabilities, you can also
        create unique images (e.g., Ideogram, Midjourney, GPT-4).
      </p>
      <h3 className="font-bold m-2"> Create Slides Prompt</h3>
      <p>
        You are an expert teacher and instructional designer, skilled in
        creating engaging educational content that effectively achieves learning
        objectives. Your task is to create the content for a slide deck on
        [TOPIC / SUBJECT] for my [GRADE] class. The slides should be formatted
        with a header and then a set of bullets for each slide. Change the
        variety of each slide including questions for students and activities.
        The last slide should include text for a formative
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher and instructional designer, skilled in
        creating engaging educational content that effectively achieves learning
        objectives. Your task is to create the content for a slide deck on
        mitosis for my 9th grade class. The slides should be formatted with a
        header and then a set of bullets for each slide. Change the variety of
        each slide including questions for students and activities. The last
        slide should include text for a formative assessment. Also include a
        description of any image that should be included on the slide.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Get specific! The more specific you are with how you’d like your
          slides formatted, the better the chatbot will perform.
        </li>
        <li>
          Ask the chatbot to create mini-lessons and breakout sessions for
          students based on the slides.
        </li>
        <li>
          Ask the chatbot to flip instruction by creating the slides for
          students to review at home and then create a hands-on lesson for the
          classroom based on the same content.
        </li>
      </ul>
    </div>
  );
}

export default page;
