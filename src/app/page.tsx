import Mission from "./components/home/Mission";
import Services from "./components/home/Services";
import Subscribe from "./components/home/Subscribe";

import { services } from "../data";
const servicesData = services.splice(0, 3);
export default function Home() {
  return (
    <div>
      <div></div>
      <div className="bg-[#EAEAEE] py-10 ">
        <div className="text-center flex flex-col gap-3 container">
          <p className="font-bold">
            Artificial Intelligence is poised to change teaching and learning
            forever
          </p>
          <p>
            Artificial Intelligence (AI) has the potential to revolutionize
            teaching and learning as we know it. By using AI-powered tools and
            strategies, educators can personalize learning, improve student
            outcomes, and better prepare students for success in the digital
            age.
          </p>
          <p>
            Discover how AI can transform your institutions, school or classroom
            with Teach Me AI{" "}
          </p>
        </div>
      </div>
      <div className="py-10 container">
        <p className="text-center font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px]">
          Our Services
        </p>
        <Services data={servicesData} />
      </div>
      <Subscribe />
      <div className="container">
        <Mission />
      </div>
    </div>
  );
}
