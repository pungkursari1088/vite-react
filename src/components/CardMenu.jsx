import React from "react";

export const CardMenu = (props) => {
  return (
    <div className=" w-1/4 m-2 p-2 border-2 shadow-xl">
      <img
        className=" object-contain"
        src="https://loremflickr.com/320/240"
      ></img>
      <h1 className="font-bold text-3xl text-center">{props.title}</h1>
      <p className="text-xs text-neutral-500">{props.desc}</p>
    </div>
  );
};

CardMenu.defaultProps = {
  title: "Title",
};
