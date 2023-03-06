import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="relative bottom-0 w-full text-white h-fit">
      <div className="flex flex-col w-9/12 h-full py-6 mx-auto">
        <div className="flex justify-around w-1/3 pb-6 mx-auto">
          <div className="">
            <div className="pb-4 font-semibold">Resources</div>
            <div className="space-y-2 text-gray-500 cursor-pointer">
              <div className="hover:text-white">Projects</div>
              <div className="hover:text-white">Technologies</div>
              <div className="hover:text-white">About</div>
              <div className="hover:text-white">Contact Me</div>
            </div>
          </div>
          <div>
            <div className="pb-4 font-semibold">Legal</div>
            <div className="space-y-2 text-gray-500 cursor-pointer ">
              <div className="hover:text-white">Privacy Policy</div>
              <div className="hover:text-white">Terms & Conditions</div>
            </div>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className="flex justify-between px-12 pt-6 text-gray-500">
          <div>&copy; Nicolas Last&#8482;. All Rights Reserved.</div>
          <div className="flex space-x-8 text-2xl">
            <Link href={"/"} className="hover:text-white">
              <AiFillGithub />
            </Link>
            <Link href={"/"} className="hover:text-white">
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
