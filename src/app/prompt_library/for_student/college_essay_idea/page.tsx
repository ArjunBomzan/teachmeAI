import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create College Essay Topic Ideas Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompt to generate topic ideas for writing the essay portion of your
        college application. To get started, just replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2">College Essay Topic Prompt</h3>
      <p>
        I am a [GRADE LEVEL] student preparing to apply to college. Your task is
        to brainstorm [NUMBER] topics for me to write my college essay on as
        part of [APPLICATION INFORMATION]. The essay should be specific, like
        about a particular experience, and reveal something personal, like what
        students value, how they think, what their strengths are, or a
        particular part of their background. Essays should be thoughtful,
        creative, simple, and meaningful.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        I am a junior high school student preparing to apply to college. Your
        task is to brainstorm 10 topics for me to write my college essay on as
        part of the Common Application. The essay should be specific, like about
        a particular experience, and reveal something personal, like what
        students value, how they think, what their strengths are, or a
        particular part of their background. Essays should be thoughtful,
        creative, simple, and meaningful.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to identify a specific number of objectives relating
          to the goal
        </li>
        <li>
          Utilize the chatbot as a thought partner. Use the response as a
          brainstorm to get you thinking about good essay topics that will work
          for you. For example, if the response includes a topic about a
          specific strength or fear that doesn't apply to you (like your love
          for rock climbing, or your fear of snakes), think of examples that fit
          (your piano expertise or social anxiety). You can use the chatbot
          again to refine the wording once you've identified the topic.
        </li>
        <li>
          Use a more specific prompt if you know the general topic you want to
          write about but are not sure what angle to take. For example, you want
          to talk about your love of painting but are not sure how.
        </li>
        <li>
          Have the chatbot help you with the fundamentals of writing an essay.
          Ask for writing tips. Submit an outline and ask for feedback.
        </li>
      </ul>
    </div>
  );
}

export default page;
