import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="my-12 text-white">
      <div className="text-4xl font-semibold">
        Welcome To
        <br /> My Personal Portfolio
      </div>
      <div className="text-gray-400 ">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </div>
      <button className="px-10 py-2 font-bold rounded-l-full rounded-r-full bg-gradient-to-r from-purple-600 to-cyan-500">
        Learn More
      </button>
    </div>
  );
};

export default Hero;
