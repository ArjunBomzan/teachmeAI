import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Authentic Assessments Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompt to help you create authentic assessments for your students. To
        get started, simply replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2">Authentic Assessment Prompt</h3>

      <p>
        You are an expert teacher, proficient in developing innovative and
        effective authentic assessments that enable students to develop and
        exhibit their learning. Your task is to create [NUMBER] authentic
        [FORMATIVE OR SUMMATIVE] assessments for my [GRADE LEVEL AND SUBJECT]
        class studying [TOPIC]. The assessments should measure [CONTENT
        STANDARD]. The assessments should emphasize real-world application,
        complex tasks, varied response formats, and meaningful feedback.
        [OPTIONAL IF SUMMATIVE: INCLUDE VERIFICATION THAT THE STANDARD WAS
        ACHIEVED]. The [FORMATIVE OR SUMMATIVE] assessments should engage
        students and effectively demonstrate their learning, as well as enhance
        their skills and understanding of the subject in meaningful ways. Be
        creative and unique, do not [INSERT ANY REMAINING SPECIFICATIONS].
      </p>

      <h3 className="font-bold m-2">Example Prompt</h3>
      <p className="italic">
        You are an expert teacher, proficient in developing innovative and
        effective authentic assessments that enable students to develop and
        exhibit their learning. Your to task is to create 5 authentic summative
        assessments for my 9th grade English class completing an author study on
        Maya Angelou. The assessments should measure their understanding of
        Angelou's history, what impacted her work, and the common themes in her
        writing. The assessments should emphasize real-world application,
        complex tasks, varied response formats, and meaningful feedback. Also,
        include verification that the standard was achieved. The summative
        assessments should engage students and effectively demonstrate their
        learning, as well as enhance their skills and understanding of the
        subject in meaningful ways. Be creative and unique, do not include any
        essay options.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Ask the chatbot to include or not include specific types of
          assessments depending on your subject, students, or desired outcomes.
          For this author study example, the chatbot was asked not to include
          essay options as those are similar to standard assessments.
        </li>
        <li>
          Use the chatbot to zero in on a specific theme if you already have a
          type of authentic assessment in mind. For example, if you'd like your
          students to do a performance, ask the chatbot to have all of the task
          options include a performance component.
        </li>
        <li>
          Enlist the chatbot to help you generate feedback from the tasks, as
          that is an important component for authentic assessments. Once you've
          found a project you like, such as a Maya Angelou podcast series in
          this example, ask the chatbot for the best way to provide feedback to
          students on their work to help deepen their learning.
        </li>
      </ul>
    </div>
  );
}

export default page;
