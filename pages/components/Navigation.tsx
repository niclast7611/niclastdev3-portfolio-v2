import Link from "next/link";
import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { DiCssdeck } from "react-icons/di";
type Props = {};

export const Navigation = (props: Props) => {
  const [daylight, setDaylight] = useState(true);

  return (
    <header className="relative top-0 w-full text-xl text-white">
      <div className="flex items-center justify-between w-9/12 h-16 mx-auto">
        <Link href={"/"}>
          <div className="flex">
            <DiCssdeck className="text-2xl" />
            <div className="pl-1 leading-6">Portfolio</div>
          </div>
        </Link>

        <div className="flex justify-between w-1/3 text-gray-400">
          <Link href={"/"}>
            <div className="hover:text-white">Projects</div>
          </Link>
          <Link href={"/"}>
            <div className="hover:text-white">Technologies</div>
          </Link>
          <Link href={"/"}>
            <div className="hover:text-white">About</div>
          </Link>
        </div>
        <div className="flex space-x-8 text-2xl">
          <Link href={"/"}>
            <AiFillGithub />
          </Link>
          <Link href={"/"}>
            <AiFillLinkedin />
          </Link>

          <button onClick={() => setDaylight(!daylight)} className="">
            {daylight ? <BsSunFill /> : <BsMoonFill />}
          </button>
        </div>
      </div>
    </header>
  );
};
