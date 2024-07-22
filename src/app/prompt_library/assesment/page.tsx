import React from "react";
import { promptData } from "../promptData";
import Card from "../Card";
const data = promptData.filter((el) => {
  return el.name == "Assesment";
});

function page() {
  return (
    <div className="container">
      <h1 className="font-bold m-5 text-[25px]">{data[0].name}</h1>
      <div className="grid grid-cols-3">
        {data[0].subPrompt?.map((el, index) => {
          return <Card key={el.name} data={el} index={index} />;
        })}
      </div>
    </div>
  );
}

export default page;
