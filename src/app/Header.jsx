"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import Typewriter from "typewriter-effect";
const Metadata = {
  home: {
    bg: "/images/aibg.webp",
    title: "Teach Me AI",
    slogan:
      "We help teachers, schools and professionals unlock their full potential through AI",
    subtitle:
      "Our mission is to make AI easy, accessible and exciting for everyone.",
    button: "Get Started",
    navigateto: "/services",
  },
  services: {
    bg: "/images/banner1.webp",
    title: "Our Services",
    subtitle:
      "Our mission is to make AI easy, accessible and exciting for everyone.",
    button: "Contact",
    navigateto: "/contact",
  },
  ai_literacy_training: {
    bg: "/images/banner6.jpg",
    title: "AI Ready Literacy Training",
    subtitle:
      "We believe AI literacy is the new foundational skillset. We partner with schools around the world to lead high quality PD and training to drive the responsible adoption of Generative AI, enhance learning, boost productivity, and empower students.",
    button: "Contact",
    navigateto: "/contact",
  },
  ai_student_training: {
    bg: "/teams/img12.webp",
    title: "AI Student Training",
    subtitle:
      "We believe AI literacy is the new foundational skillset. We partner with schools around the world to lead high quality PD and training to drive the responsible adoption of Generative AI, enhance learning, boost productivity, and empower students.",
  },
  contact: {
    bg: "/teams/img11.webp",
    title: "Contact",
  },
  fellowship: {
    bg: "/teams/img2.webp",
    title: "Teach Me AI Fellowship ",
    subtitle:
      "The Teach Me AI Fellowship Program aims to democratize AI education by empowering a diverse group of individuals to become AI trainers. These fellows will undergo intensive training and subsequently educate students in schools, ensuring AI knowledge reaches every corner of the community.",
    button: "Contact",
    navigateto: "/contact",
  },
};
const navLinks = [
  { title: "Home", url: "/" },

  {
    title: "Services",
    url: "/services",
    // fullWidth: true,
    subMenus: [
      {
        title: "AI Ready Literacy Program",
        url: "/ai_literacy_training",
        menus: [],
      },
      {
        title: "AI Student Training",
        url: "/ai_student_training",
        menus: [],
      },
      {
        title: "Fellowship Program",
        url: "/fellowship",
        menus: [],
      },
      {
        title: "AI For Marketing",
        url: "/services",
        menus: [],
      },
    ],
  },
  {
    title: "Resources",
    // url: "/resources",
    subMenus: [
      {
        title: "Blog",
        url: "/resources",
        menus: [],
      },
      {
        title: "Prompt Library",
        url: "/prompt_library",
      },
    ],
  },
  {
    title: "Our Team",
    url: "/teams",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
function Header() {
  const [openedSubMenu, setOpenedSubMenu] = useState("");
  const [itemsOpen, setItemsOpen] = useState(false);
  const pathname = usePathname().slice(1, -1);
  const home = usePathname();
  let data;

  if (pathname in Metadata) {
    data = Metadata[pathname];
  } else if (home === "/") {
    data = Metadata["home"];
  } else {
    data = null;
  }
  useEffect(() => {
    setItemsOpen(false);
  }, [pathname]);
  return (
    <>
      <div
        style={{
          backgroundImage: ` linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url(${data?.bg})`,
        }}
        className="bg-center bg-cover  
    bg-no-repeat"
      >
        <header className=" bg-transparent flex   items-center  py-3    ">
          <div className="flex flex-grow items-center gap-0 xl:flex-grow-0 ">
            <Link className="flex items-center" href={"/"}>
              <img
                className="  h-[50px] ml-7"
                src={"/images/file.png"}
                alt="Teach Me Ai"
              />
              <p className=" text-[32px] font-medium text-white ">
                Teach Me AI
              </p>
            </Link>
          </div>

          <div
            className="md:hidden  cursor-pointer"
            onClick={() => setItemsOpen((prev) => !prev)}
          >
            <IoMenu className="text-[42px] text-white" />
          </div>
          <ul
            className={` fixed bottom-0 right-0 -top-2 lg:top-5 z-20 translate-x-full  bg-white lg:bg-transparent lg:h-[30%] ${classNames(
              { "transform-none": itemsOpen }
            )}  flex   w-full max-w-[260px]  flex-grow flex-col items-start transition-all  lg:absolute top-[4%] lg:right-5 xl:w-auto xl:max-w-full xl:transform-none   xl:flex-row    `}
          >
            <li className=" top-0 z-30 flex w-full  justify-between border  px-6  py-4 xl:hidden xl:border-none xl:py-0  ">
              <button
                type="button"
                aria-label="text-for link"
                className={classNames({
                  invisible: !openedSubMenu,
                })}
                onClick={() => {
                  setOpenedSubMenu("");
                }}
              >
                <AiOutlineLeft />
              </button>
              <button
                type="button"
                className=""
                onClick={() => {
                  setItemsOpen(false);
                }}
                aria-label="text-for link"
              >
                <AiOutlineClose />
              </button>
            </li>

            {navLinks.map((el, i) => {
              return (
                <li
                  key={i}
                  className=" group flex  w-full  items-center   border   px-6  py-4  lg:block  lg:w-auto lg:justify-center  lg:border-none lg:py-0 
                            relative "
                  onClick={() => {
                    if (el.subMenus && el.subMenus.length > 0) {
                      setOpenedSubMenu(`${el.title}`);
                    }
                  }}
                >
                  <Link
                    href={el.url ? el.url : "/"}
                    className="group-hover:text-[#15cccc] lg:text-white
                                       text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[24px]
                                "
                  >
                    {el.title}
                  </Link>
                  {el.subMenus && el.subMenus.length > 0 && (
                    <Fragment>
                      <button type="button" className="" aria-label="text">
                        <AiOutlineRight className="group-hover:text-black xl:hidden" />
                        <AiOutlineDown className="hidden  group-hover:text-[#15cccc] xl:inline-block  text-white" />
                      </button>
                      <ul
                        className={` w-full max-w-[260px] 
                               ${
                                 openedSubMenu !== el.title
                                   ? "translate-x-full xl:translate-x-0"
                                   : "transform-none"
                               }
                                                fixed
                                                right-0
                                                top-14 lg:top-11    bg-white text-[#15cccc] z-40 
                                                h-[100vh]
                                                capitalize
                                                transition-all
                                                xl:container xl:left-0 xl:top-auto 
                                                xl:w-[240px] xl:rounded xl:border xl:p-4
                                                xl:hidden
                                                
                                                xl:absolute
                                                xl:
                                                xl:h-auto
                                                
                                                xl:group-hover:flex xl:group-hover:flex-col 
                                               
                                                
                                                `}
                      >
                        <h1 className="font-bold  xl:hidden">{el.title}</h1>
                        {el.subMenus.map((el, i) => {
                          return (
                            <Fragment key={i}>
                              <li className=" flex flex-col mt-2 text-black hover:text-[#15cccc] ml-3 lg:ml-0 border-2 border-x-0 border-t-0">
                                <Link href={el.url}> {el.title}</Link>
                              </li>
                            </Fragment>
                          );
                        })}
                      </ul>
                    </Fragment>
                  )}
                </li>
              );
            })}
            <div>
              <button
                className="bg-white rounded-lg py-1 px-2    hidden lg:block text-[#15cccc] hover:text-white hover:bg-blue-600
                        "
              >
                <Link href={"/courses"}>Free Course</Link>
              </button>
            </div>
          </ul>
        </header>

        {data && (
          <div
            className="h-full gap-5 lg:h-[70vh] w-full  flex justify-center items-center flex-col  lg:gap-20 "
            onClick={() => setItemsOpen(false)}
          >
            <div className="text-white text-center flex flex-col gap-2">
              <div className="text-[36px] sm:text-[40px] md:text-[45px] lg:text-[51px] xl:text-[57px] 2xl:text-[64px] font-bold">
                <Typewriter
                  options={{
                    strings: [data.title],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="">{data?.slogan} </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] font-medium container">
                {data.subtitle}{" "}
              </p>
            </div>
            {data.button && (
              <Link href={`${data.navigateto}`}>
                <button className="btn mb-10 lg:mb-0">{data.button}</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
