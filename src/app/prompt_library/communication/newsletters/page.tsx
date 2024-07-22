import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Write School or Classroom Newsletters Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you draft classroom and school newsletters for your
        students’ families. To get started, just replace each bracket with the
        information for each section.
      </p>
      <h3 className="font-bold m-2"> Classroom Newsletter Prompt</h3>
      <p>
        You are an expert educator and skilled marketer with expertise in
        writing newsletters that are engaging and click-worthy for families.
        Your task is to write a [DAILY / WEEKLY / MONTHLY] newsletter that I can
        send to the parents of my [GRADE LEVEL] class. Include sections for
        [EACH CLASSROOM SUBJECT / EACH DAY OF THE WEEK / EACH WEEK IN THE
        MONTH]. For each [SUBJECT / DAY / WEEK], write a brief paragraph
        summarizing the main activities the students did for that [SUBJECT / DAY
        / WEEK], including any [SPECIFIC TYPES OF ACTIVITIES]. Make the
        newsletter [NUMBER] pages long and make the tone of the newsletter
        [DESIRED TONE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert educator and skilled marketer with expertise in
        writing newsletters that are engaging and click-worthy for families.
        Your task is to write a weekly newsletter that I can send to the parents
        of my kindergarten class. Include sections for each day of the week. For
        each day of the week, write a brief paragraph summarizing the main
        activities the students did that day, including any literacy, math,
        science, movement, music, sensory, and free play activities. Make the
        newsletter 1-1.5 pages long and make the tone of the newsletter
        professional and friendly.
      </p>
      <h3 className="font-bold m-2"> School Newsletter Prompt</h3>
      <p>
        You are an experienced and esteemed [school level] school leader,
        proficient in writing engaging and thoughtful school communications.
        Your task is to write a newsletter I can send to families of the school
        [MONTHLY / QUARTERLY / EACH TRIMESTER]. Include an introductory
        paragraph, which will summarize key school events and/or communicate
        important messages, as well as sections for each grade level, [INSERT
        GRADE RANGE]. For each grade level, write a brief paragraph summarizing
        notable projects students did and main themes/units they studied that
        month. Include a closing paragraph, looking ahead to the next month.
        Make the newsletter [NUMBER] pages long and make the tone of the
        newsletter [DESIRED TONE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an experienced and esteemed elementary school leader, proficient
        in writing engaging and thoughtful school communications. Your task is
        to write a newsletter I can send to families of the school monthly.
        Include an introductory paragraph, which will summarize key school
        events and/or communicate important messages, as well as sections for
        each grade level, K-4. For each grade level, write a brief paragraph
        summarizing notable projects students did and main themes/units they
        studied that month. Include a closing paragraph, looking ahead to the
        next month. Make the newsletter 1-1.5 pages long and make the tone of
        the newsletter professional and cordial.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to add sections at the bottoms of your classroom
          newsletter like “Reminders,” to remind parents to bring something in,
          or “Looking Ahead” to call attention to important upcoming dates.
        </li>
        <li>
          Have the chatbot refer to your students in the way that best suits
          your school. Ask the chatbot to call your classroom “Homeroom 3A,” or
          to refer to all the students in your school as “friends.”
        </li>
        <li>
          Enlist the help of the chatbot to draft an email to parents if the
          classroom newsletter will be sent as a pdf/attachment to an email (as
          opposed to the email itself). For the school newsletter, ask the
          chatbot to draft an email to teachers each month for information on
          their recent classroom activities/units.
        </li>
        <li>
          Use the chatbot to help you be creative and make both types of
          newsletters engaging. Ask the chatbot, “I want to make sure parents
          read the newsletters. What are ways to make the newsletters more
          interesting or visually appealing?”
        </li>
      </ul>
    </div>
  );
}

export default page;
