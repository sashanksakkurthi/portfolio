import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-screen py-16">
      <div className="flex flex-col items-center gap-10 sm:gap-6">
        <div className="flex flex-col items-center">
          <div className="font-Roboto text-2xl font-bold text-gray-800 sm:text-4xl md:text-6xl ">
            Hey ✌ Im Sashank Sakkurthi
          </div>
          <div className="text-xs font-semibold text-gray-700 sm:text-sm">
            Full Stack Web developer / Devops / UI & Ux
          </div>
        </div>
        <div className="">
          <Image
            className="rounded-full"
            src={"/sashank.png"}
            height={"350"}
            width={"350"}
            alt={""}
          />
        </div>
        <button className="animate-bounce rounded-full  bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] p-2  text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
