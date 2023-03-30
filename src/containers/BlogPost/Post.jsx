import React from "react";

export const Post = (props) => {
  return (
    // <div className="flex m-3 border-gray-700 shadow-lg rounded-xl max-w-lg hover:bg-gray-200">
    //   <div className="img-thumb">
    //     <img
    //       className="rounded-l-xl items-center justify-center"
    //       src={props.image}
    //       alt="dummy img"
    //     ></img>
    //   </div>
    //   <div className="ml-4 p-3">
    //     <p className="text-xl font-bold">{props.title}</p>
    //     <p className="mt-2 text-sm text-justify">{props.desc}</p>
    //   </div>
    // </div>
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
    >
      {/* <img
        className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.image}
        alt="dummy image"
      /> */}
      <img
        className="object-cover w-72 max-h-full"
        src={props.image}
        alt="dummy image"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="mb-3 font-thin text-xs text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>
      </div>
    </a>
  );
};
