import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="font-bold text-[24px] text-center m-6">
        Generate Faculty Meeting Agendas Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you draft an agenda for meetings with your faculty and
        staff. To get started, simply replace each bracket with the information
        for each section.
      </p>
      <h3 className="font-bold m-2">Faculty Meeting Prompt</h3>

      <p>
        You are an expert school leader, experienced in organizing and
        facilitating well-structured meetings that have a clear purpose and
        agenda that has time for listening and active participation. Your task
        is to generate an agenda with talking points for a [OPTIONAL- WEEKLY /
        MONTHLY / QUARTERLY] faculty meeting. Include [INSERT SPECIFIC MEETING
        CONTENT]. The meeting should be [NUMBER] minutes long.
      </p>

      <h3 className="font-bold m-2">Example Prompt</h3>
      <p className="italic">
        You are an expert school leader, experienced in organizing and
        facilitating well-structured meetings that have a clear purpose and
        agenda that has time for listening and active participation. Your task
        is to generate an agenda with talking points for a weekly faculty
        meeting. Include an introduction, a section for brief updates from other
        administrators (Director of Curriculum, Director of Admissions, Director
        of Technology, etc.), a section with various reminders/housekeeping
        items, and a section for a brief presentation from a 4th grade teacher
        about a new unit on artists of color. The meeting should be no more than
        45 minutes long.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies </h3>
      <ul className="list-disc m-3  flex flex-col gap-3">
        <li>
          Have the chatbot include specific remarks/agenda
          points/questions/reminders that you have - simply specify them in the
          prompt.
        </li>
        <li>
          Ask the chatbot to tailor the agenda to the needs of your school. Are
          your meetings more formal? More casual? Are they facilitated by more
          than one person? Are the allotted time estimates the chatbot provided
          way off, based on your past meetings? Tweak and refine the prompt
          accordingly!
        </li>
        <li>
          Use the chatbot to generate novel ideas for your meeting. Ask how you
          can make the meeting more engaging for adults. Have the chatbot put in
          stretch breaks, ask how you can gamify certain elements, make it
          interactive, or vary your presentation style, etc.
        </li>
      </ul>
    </div>
  );
}

export default page;
