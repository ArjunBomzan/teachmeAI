import Image from "next/image";
import Link from "next/link";
import React from "react";

function Mission() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-10 justify-between ">
        <div className="flex-1">
          <img
            alt="mession"
            src={"/images/mission.webp"}
            className="rounded-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <p className="text-center font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px]">
            Our Mission
          </p>
          <p>
            Learning about AI shouldn't be reserved for the tech elite but for
            everyone! Our mission is to make AI, approachable, understandable,
            and fun for all ages and backgrounds.
          </p>
          <button className="btn  my-5">
            <Link href={"/services"}>Learn More</Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10  mt-10 justify-between">
        <div className="flex-1 flex flex-col justify-center items-center flex-shrink-0">
          <p className="text-center font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px]">
            Unlock the Power of AI
          </p>
          <p>Partner with Teach Me AI Today!</p>
          <button className="btn  my-5">
            <Link href={"/contact"}>Contact</Link>
          </button>
        </div>
        <div className="flex-1">
          <img alt="logo" src={"/images/ai1.webp"} className="rounded-2xl " />
        </div>
      </div>
    </div>
  );
}

export default Mission;
