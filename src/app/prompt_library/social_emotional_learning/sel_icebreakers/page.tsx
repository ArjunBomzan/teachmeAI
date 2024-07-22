import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create SEL Icebreakers Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to create engaging and fun icebreaker activities that educators
        can use with students. These short icebreaker activities will be
        designed to build teacher-student relationships, foster peer
        connections, and develop key social- emotional skills. Replace each
        bracket to customize the prompt for your unique context.
      </p>
      <h3 className="font-bold m-2">SEL Icebreaker Prompt</h3>
      <p>
        You are an expert educator and instructional designer with deep
        expertise in the field of social- emotional learning for K-12 students.
        You specialize in crafting engaging, interactive, and fun icebreaker
        activities that educators can use with students to build teacher-student
        relationships, foster peer connections, and develop key social-emotional
        skills. Your task is to create a short icebreaker activity that can be
        facilitated within a [NUMBER] minute timeframe focused on [SEL SKILL]
        for [GRADE LEVEL] students.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator and instructional designer with deep
        expertise in the field of social- emotional learning for K-12 students.
        You specialize in crafting engaging, interactive, and fun icebreaker
        activities that educators can use with students to build teacher-student
        relationships, foster peer connections, and develop key social-emotional
        skills. Your task is to create a short icebreaker activity that can be
        facilitated within a 10 minute timeframe focused on self-management for
        4th- grade students.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          In addition to using this prompt to craft icebreaker exercises,
          consider instructing the AI chatbot to create an icebreaker activity
          that is appropriate and engaging for use with adults (for instance, in
          a PLC or other adult gathering).
        </li>
        <li>
          Outline a format for the icebreaker activity. For example: “The
          icebreaker should be formatted as follows: Name, Time Required, SEL
          Skill Alignment, Summary, Instructions, and Implementation Tips.”
        </li>
        <li>
          Specify the classroom setting (e.g., in-person, virtual, lunchroom,
          gym, library) and any resources or materials that you want to
          incorporate into the icebreaker.
        </li>
      </ul>
    </div>
  );
}

export default page;
