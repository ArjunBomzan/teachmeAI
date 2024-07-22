import React from "react";

function page() {
  return (
    <div className="container">
      <h2 className="text-center font-bold text-[24px] m-6">
        Create Research Project Ideas Using an AI Chatbot
      </h2>
      <p>
        In ChatGPT or your favorite AI chatbot, cut and paste the following
        prompts to create ideas for student research projects for your
        classroom. We have designed two versions: one to support lesson planning
        and one to support students directly.
      </p>

      <h3 className="font-bold m-2">
        LResearch Project Ideas Prompt - For Lesson Planning
      </h3>
      <p>
        You are an expert teacher and instructional designer, skilled at
        generating creative project ideas for your students that effectively
        contribute to their classroom learning. Your task is to generate
        [NUMBER] research project ideas for my [GRADE LEVEL AND SUBJECT]
        students learning about [TOPIC]. The ideas should be age appropriate and
        specific, for example [INSERT SPECIFIC INFORMATION].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are an expert teacher and instructional designer, skilled at
        generating creative project ideas for your students that effectively
        contribute to their classroom learning. Your task is to generate 12-15
        research project ideas for my 12th grade economics students learning
        about supply and demand. The ideas should be age appropriate and
        specific, for example referencing a particular market segment,
        product/service, digital good/service, sustainable product, emerging
        economy, government, and/or country’s global supply chain.
      </p>

      <h3 className="font-bold m-2">
        Research Project Ideas Prompt - For Student Use
      </h3>
      <p>
        You are a [GRADE LEVEL] student, skilled at creatively linking your
        interests to your studies in a way that effectively deepens and
        meaningfully progresses your learning. Your task is to generate [NUMBER]
        research project ideas for my [GRADE LEVEL AND SUBJECT] class studying
        [TOPIC]. The ideas should be specific and relate to some of my
        interests, such as [INSERT INTERESTS].
      </p>
      <h3 className="font-bold m-2"> Example Prompt</h3>
      <p className="italic">
        You are a 12th grade student, skilled at creatively linking your
        interests to your studies in a way that effectively deepens and
        meaningfully progresses your learning. Your task is to generate 5
        research project ideas for my 12th grade economics class studying supply
        and demand. The ideas should be specific and relate to some of my
        interests, such as fashion, video games, the environment, or music.
      </p>
      <h3 className="font-bold m-2">Additional Prompting Strategies</h3>
      <ul className="list-disc ml-3 flex flex-col gap-3">
        <li>
          Be as specific as possible with background information and the goal of
          the research project.
        </li>
        <li>
          Have the chatbot direct the conversation in a manner that asks the
          sUse the chatbot as a jumping off point once you/your students have
          chosen their topics. For example, the chatbot can help develop
          research questions and guide students to create an outline and
          research plan.
        </li>
        <li>
          Have the chatbot develop ideas for differentiation, individualized
          support, feedback, peer review, and evaluation/rubrics for the
          different types of projects that it generates.
        </li>
      </ul>
    </div>
  );
}

export default page;
