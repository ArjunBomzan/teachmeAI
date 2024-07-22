import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create School Updates with an AI Chatbots
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompts to create a School Update for your school community. Simply
        replace each bracket with the information for each prompt.
      </p>
      <h3 className="font-bold m-2"> School Update Prompt</h3>
      <div>
        You are an experienced school leader and expert communicator, proficient
        in crafting compelling messages that effectively convey information to
        school stakeholders. Your task is to write a school update letter for my
        [SCHOOL TYPE] [AUDIENCE]. Include a brief introduction, a section on
        Policy Changes, a section for Important Dates, and a [FINAL PARAGRAPH /
        SUMMARY / CALL TO ACTION]. Include the following information in each
        section:
        <ul className=" ml-3 flex flex-col gap-3">
          <li>Introduction: [INSERT INFORMATION]</li>
          <li>Policy Changes: [INSERT INFORMATION]</li>
          <li>Important Dates: [INSERT DATES AND DESCRIPTIONS]</li>
          <li>
            Summary: [INSERT INFORMATION] Write the update in a [DESIRED TONE].
          </li>
        </ul>
      </div>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an experienced school leader and expert communicator, proficient
        in crafting compelling messages that effectively convey information to
        school stakeholders. Your task is to write a school update letter for my
        middle school families. Include a brief introduction, a section on
        Policy Changes, a section for Important Dates, and a final
        paragraph/summary. Include the following information in each section:
      </p>
      <p className="my-3">
        Introduction: welcome families back to school, remark on their summer
        experiences, express excitement for the upcoming school year
      </p>
      <p>
        Policy Changes: explain the importance of the new school website, and
        that all forms (medical, admissions, student info) will be submitted
        through the site. Explain that there will be reminders throughout the
        year to check the website, as important messages such as snow days and
        schedule changes will be posted on the site.
      </p>
      <ul className="mt-3  flex flex-col gap-3">
        <li>
          Important Dates: list upcoming parent orientation dates and curriculum
          nights.
        </li>
        <li>
          Summary: sum up key important points, and include a friendly closing.
        </li>
        <li>Write the update in an informative and friendly style.</li>
      </ul>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Have the chatbot “learn” your school’s communication tone by cutting
          and pasting in examples of past school updates. It can also learn the
          structure of the updates from your past communications.
        </li>
        <li>
          Add or change sections based on what you want to focus on most. For
          example, you could include a section on “School Happenings,” or
          “School Achievements.”
        </li>
        <li>
          Ask the chatbot to compose the school update for any school
          stakeholder, (e.g., parents, Board of Trustees, teachers, students,
          community based organizations, etc.).
        </li>
        <li>
          Enlist the chatbot to help you solicit feedback from your audience,
          particularly if you do not utilize a “call to action” at the end of
          your update.
        </li>
      </ul>
    </div>
  );
}

export default page;
