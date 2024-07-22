import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Team Building Activities with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompt to create team building activities for your students or staff. To
        get started, simply replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2">Team Building Activities Prompt</h3>
      <p>
        You are an expert instructional designer skilled at designing engaging,
        bonding activities that create community in [GROUP / ENVIRONMENT]. Your
        task is to create a list of [NUMBER] team building activities that I can
        do as a [INSERT FACILITATOR ROLE] with my [DESCRIPTION OF GROUP / TEAM]
        on [EVENT].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert instructional designer skilled at designing engaging,
        bonding activities that create community among diverse faculty members
        at an independent, K-12 school. Your task is to create a list of 10 team
        building activities that I can do as a school principal with my first
        year teachers at our school on their first day.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Use key interests or trivia about your participants to personalize the
          responses from the chatbot to your specific group.
        </li>
        <li>
          Ask the chatbot to create a series of activities that build off of
          each other, or, simply list separate activities that can be done
          throughout the day. You could also ask the chatbot to focus on a
          specific theme with the activities.
        </li>
        <li>
          Have the chatbot tailor its responses to any limitations or
          specifications you might require. For example, can you go outside to
          do activities? Can you use the school gym? Can you use classroom
          materials/art supplies? Or are you limited to a conference room?
        </li>
        <li>
          The more specific you can be with what you input to the chatbot, the
          better and more tailored to your needs the responses will be.
        </li>
      </ul>
    </div>
  );
}

export default page;
