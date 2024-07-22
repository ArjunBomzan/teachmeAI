import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Write Reference Letters Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you write a reference letter/character reference. To get
        started, simply replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2"> Reference Letter Prompt</h3>
      <p>
        You are an expert writer, experienced in writing reference letters and
        particularly skillful at conveying a person’s abilities and attributes.
        Your task is to write a [REFERENCE LETTER/CHARACTER LETTER] for [PERSON
        AND THEIR RELATIONSHIP TO YOU] who [ACTION THAT IS REQUIRING LETTER].
        Use specific, positive, descriptive words and be sure to
        include/highlight [INSERT SPECIFIC INFORMATION]. Also note [ANY
        ADDITIONAL INFORMATION]. Do not [INSERT ANY SPECIFIC
        REQUIREMENTS/GUIDELINES].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert writer, experienced in writing reference letters and
        particularly skillful at conveying a person’s abilities and attributes.
        Your task is to write a reference letter for my 11th grade AP US History
        student, who is applying to Georgetown University. Use specific,
        positive, descriptive words and be sure to highlight my student’s
        outstanding academic achievement, exceptional personal qualities, and
        dedication to the field of history through her own historical research
        project on Winston Churchill. Also note her extracurricular activity
        involvement in varsity field hockey, student government, and
        volunteering at urban preschools. Do not make the reference letter more
        than one page and do not report specific grades.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Use the chatbot to create different types of reference letters. Adjust
          the prompt above to have the chatbot write a reference letter for a
          student applying to an extracurricular program, a job recommendation
          letter for a colleague, or a character reference for a colleague
          applying for a membership.
        </li>
        <li>
          Check your outputs to ensure there is no unintended bias in the
          reference letter based on gender, race, ethnicity, etc.
        </li>
        <li>
          Ask the chatbot to refine your letter until it feels right and strikes
          the appropriate tone. You can change it by saying, "Make the letter
          more concise," "Make it more formal," "Don't use this phrase," etc.
        </li>
        <li>
          Have the chatbot use specific information or anecdotes without sharing
          any personally identifiable information on the subject of the letter.
        </li>
      </ul>
    </div>
  );
}

export default page;
