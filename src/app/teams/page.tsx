import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";

const teams = [
  {
    image: "/teams/img10.webp",
    name: "Darshan Parajuli- Founder  ",
    description:
      "Darshan is the Founder and CEO of Teach Me AI, an innovative company dedicated to enhancing education and professional development  through artificial intelligence. In 2017, he co-founded Offering Happiness, his first entrepreneurial venture. With a background as a development worker and master trainer for the Duke of Edinburgh's International Award, Darshan brings a deep understanding of the complexities and potential of AI. He is a consultant, speaker, and writer on AI in education, frequently leading workshops and professional development sessions across the world.  Darshan is committed to empowering schools and teachers to harness the power of AI in an ethical and equitable manner.",
    connect: "https://www.linkedin.com/in/darshan-parajuli/ ",
  },
  {
    image: "/teams/img15.webp",
    name: "Sunil Chaulagain ",
    description:
      "Sunil is a highly skilled Senior Software Developer and Cloud Engineer with over 10 years of experience in software development. He has extensive expertise in both the LAMP and MERN stacks, and is proficient in deploying and managing applications on AWS infrastructure. His deep understanding of these technologies and his commitment to excellence make him an invaluable asset to the Teach Me AI team. Sunil is dedicated to leveraging his skills to advance the field of artificial intelligence in education, ensuring robust, scalable, and efficient solutions for schools and teachers.",
    connect: "https://www.linkedin.com/in/schaulagain/?originalSubdomain=np",
  },
  {
    image: "/teams/img16.webp",
    name: "Devadas Rajaram-",
    description:
      "Devadas Rajaram is an experienced educator and journalist specializing in Digital Journalism, Social Media, Data Journalism, Mobile, AR, VR Storytelling, Generative AI, and Prompt Engineering. With over 15 years in journalism, he has served as Senior Editor-in-Chief at Info2Cell.com and co-founded www.nowagestorytelling.co. Devadas has successfully bridged print and digital journalism in the Middle East and the UK. He holds a master's degree in International Multimedia Journalism from Newcastle University, UK, and has taught at esteemed institutions globally. Recognized as one of the top 20 innovative journalism educators by MediaShift in 2018, he continues to push the boundaries of media and technology.",
    connect: "https://www.linkedin.com/in/devadasrajaram/",
  },
];
function page() {
  return (
    <div className="container">
      <p className="text-center my-10 font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px]">
        Our team
      </p>

      <div className="grid lg:grid-cols-3 gap-10">
        {teams.map((el) => {
          return (
            <div key={el.name} className="flex flex-col  gap-5">
              <img
                alt="img"
                src={el.image}
                className="h-full w-full object-cover max-h-[300px]"
              />
              <div className="flex  justify-between ">
                <p className="font-bold">{el.name}</p>
                <a href={el.connect} target="_blank">
                  <AiOutlineLinkedin className="text-[24px]" />
                </a>
              </div>
              <p>{el.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
