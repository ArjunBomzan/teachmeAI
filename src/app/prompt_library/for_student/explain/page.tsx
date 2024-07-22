import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Simplify a Complex Task with “Explain It to Me Like...” with an AI
        Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI Chatbot, cut and paste the following
        prompt to generate a simplified explanation for a complex topic. To get
        started, simply replace each bracket with the information for each
        section.
      </p>
      <h3 className="font-bold m-2">“Explain it to Me Like...” Prompt</h3>
      <p>
        You are an expert teacher with excellent communication and interpersonal
        skills, particularly skilled in distilling and reframing complicated
        topics for specific audiences. Your task is to explain the concept of
        [COMPLEX TOPIC] in simple terms, so that my [GRADE LEVEL AND SUBJECT]
        class can understand [CONCEPT / SPECIFIC EXAMPLE].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher with excellent communication and interpersonal
        skills, particularly skilled in distilling and reframing complicated
        topics for specific audiences. Your task is to explain the concept of
        refraction of light in water in simple terms, so that my 5th grade
        science class can understand why their straws look bent in their water
        glasses.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Utilize other resources to help explain the complex topic: videos,
          digital handouts, sound clips, props, etc.
        </li>
        <li>
          Have the chatbot use specific facts/knowledge/details about your
          students to inform its responses. For this example, if most of your
          students live on a lake, you could use that information to personalize
          the answer about water refraction to make it more relatable to the
          students’ everyday lives.
        </li>
        <li>
          Ask the chatbot for activity ideas on this topic to continue learning
          about it in an engaging way.
        </li>
        <li>
          Have the chatbot help you with the fundamentals of writing an essay.
          Ask for writing tips. Submit an outline and ask for feedback.
        </li>
        <li>
          Use the chatbot to help you expand the topic. In this example, you
          could have your students explore refraction in sound and water. Use
          the chatbot to create dialogue/a script on how to explain these
          concepts, and for activity ideas for after the lesson.
        </li>
      </ul>
    </div>
  );
}

export default page;
