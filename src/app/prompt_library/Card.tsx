import clsx from "clsx";
import React from "react";
import { bgColors } from "./promptData";
import Link from "next/link";
function Card({ data, index }: any) {
  return (
    <>
      <Link href={data.url} className="text-center">
        <div
          className={clsx(
            `${
              bgColors[index % bgColors.length]
            } bg-[url('/resources/idea.webp')] h-[30vh] bg-center bg-cover 
          bg-no-repeat flex items-center justify-center m-3 rounded-md text-center`
          )}
        >
          {/* <p className="font-bold text-[14px] ">
            {data.name.toUpperCase()}
          </p> */}
        </div>
        <p className="">{data.name}</p>
      </Link>
    </>
  );
}

export default Card;
