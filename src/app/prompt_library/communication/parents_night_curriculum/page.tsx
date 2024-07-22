import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Design a Parents’ Curriculum Night Presentation with an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompt to design a Parents’ Curriculum Night Presentation. To get
        started, just replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2"> Parents’ Night Curriculum Presentation</h3>
      <p>
        You are an expert educator and public speaker, particularly skilled in
        creating and presenting engaging and informative classroom curriculum
        presentations to families of your students. Your task is to generate a
        [NUMBER] minute script I can use to present on the curriculum in my
        [GRADE LEVEL AND SUBJECT] classroom for parents’ night at my school.
        Include information on [IMPORTANT CLASSROOM TOPICS / PEDAGOGICAL
        PHILOSOPHY / EDUCATIONAL BELIEFS]. Include the following units we will
        cover: [INSERT UNITS] and provide text for a slide presentation.
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator and public speaker, particularly skilled in
        creating and presenting engaging and informative classroom curriculum
        presentations to families of your students. Your task is to generate a
        5-7-minute script I can use to present on the curriculum in my play
        based, pre-K classroom for parents’ night at my school. Include
        information on social emotional learning, growth mindset, and the
        importance of play in learning. Please also include the following units
        we will cover: the five senses, transportation, letters, and
        self-portraits and provide text for a slide presentation.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Refine the prompt to achieve the appropriate tone for your
          presentation. Is your school more formal? More relaxed? Will there be
          administrators in the room?
        </li>
        <li>
          Enlist the help of the chatbot to help break-up the presentation if it
          needs to be split among multiple teachers.
        </li>
        <li>
          Ask the chatbot for creative ice breakers and fun activities to do
          with parents before and after the presentation. for behavioral
          difficulties you’re encountering in the classroom.
        </li>
        <li>
          Ask the chatbot to provide ideas for things to put around the
          classroom, like how best to display children’s artwork, or how you
          could create a parent feedback station for them to leave suggestions,
          or a place for parents to write a card for their child and leave it on
          their desk.s
        </li>
      </ul>
    </div>
  );
}

export default page;
