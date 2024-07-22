"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import { bgColors, promptData } from "./promptData";
import Card from "./Card";
import Slider from "react-slick";
import Link from "next/link";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#15cccc",
        borderRadius: "50%",
        position: "absolute",
        top: "10%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#15cccc",
        borderRadius: "50%",
        position: "absolute",
        top: "10%",
        left: "90%",
      }}
      onClick={onClick}
    />
  );
}

function page() {
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);

      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  const [Data, setPromptData] = useState(promptData);
  const handleSearch = debounce((e) => {
    const lowerTerm = e.target.value.toLowerCase();
    const results = [];

    promptData.forEach((category) => {
      const matchedSubPrompts = category.subPrompt.filter((sub) =>
        sub.name.toLowerCase().includes(lowerTerm)
      );
      if (matchedSubPrompts.length > 0) {
        results.push({
          name: category.name,
          url: category.url,
          subPrompt: matchedSubPrompts,
        });
      }
    });
    setPromptData(results);
  }, 600);

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row mt-10  gap-10">
        <h2 className="flex-1 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[28px] 2xl:text-[32px] font-bold">
          GenAI Chatbot Prompt
          <br /> Library for Educators
        </h2>
        <div className=" flex flex-col flex-1">
          <p className="">
            We have a variety of prompts to help you lesson plan and do
            administrative tasks with GenAI chatbots like ChatGPT, Claude,
            Gemini, and Perplexity.
          </p>
          <div className="flex justify-start gap-2 mt-5">
            <input
              type="search"
              className="p-2 inputField z-50"
              onChange={(e) => handleSearch(e)}
            />
            <button className="btn">Seach</button>
          </div>
        </div>
      </div>
      <div className="">
        {Data?.map((el, index) => {
          return (
            <div className="mt-5" key={index}>
              <p className="text-[24px]"> {el.name}</p>
              <div className="slider-container cursor-pointer relative">
                <div className="absolute -top-4 right-0  underline text-[blue]">
                  {" "}
                  <Link href={el.url ? el.url : ""}>VIEW ALL</Link>
                </div>
                <Slider {...settings} className="flex h-[30vh ] ">
                  {el.subPrompt?.map((el, index) => {
                    return <Card key={index} data={el} index={index} />;
                  })}
                </Slider>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
