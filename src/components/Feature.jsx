import React from "react";
import figmaLogo from "../assets/figma.png";
import facebookLogo from "../assets/facebook.png";
import vercelLogo from "../assets/vercel.png";

const Feature = () => {
  return (
    <div>
      <div className="mt-[126px] px-10 lg:px-[150px] mb-[58px] font-poppions">
        <h1 className="text-center font-semibold mb-[17px]">Featured Jobs</h1>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-[30px] justify-center">
          <div className="p-[25px] bg-primary text-white rounded-[8px] shadow-md">
            <div className="flex space-x-[13px] mb-5">
              <img src={figmaLogo} />
              <div>
                <h1 className="font-semibold text-lg">Front-End Developer</h1>
                <p>Figma</p>
              </div>
            </div>
            <p className="opacity-80 w-[310px]">
              We are looking for an experienced front-end developer to join our
              team.
            </p>
            <hr className="opacity-20 my-5" />
            <div className="flex justify-between">
              <div className="bg-white px-[15] rounded-full">
                <p className="py-[5px] px-[15px] text-black">Rust</p>
              </div>
              <h1 className="font-semibold">$70,000 - $90,000</h1>
            </div>
          </div>
          <div className="p-[25px] border bg-white text-black rounded-[8px] shadow-md">
            <div className="flex space-x-[13px] mb-5">
              <img src={facebookLogo} />
              <div>
                <h1 className="font-semibold text-lg">Data Scientist</h1>
                <p className="opacity-60">Facebook</p>
              </div>
            </div>
            <p className="opacity-60 w-[224px]">
              We are seeking a data scientist to join our team.
            </p>
            <hr className="my-5" />
            <div className="flex space-x-[10px] items-center justify-between">
              <div className="px-[15] rounded-full bg-slate-200">
                <p className="py-[5px] px-[15px] text-black">Python</p>
              </div>
              <h1 className="font-semibold">$100,000 - $130,000</h1>
            </div>
          </div>
          <div className="p-[25px] border bg-white text-black rounded-[8px] shadow-md">
            <div className="flex space-x-[13px] mb-5">
              <img src={vercelLogo} />
              <div>
                <h1 className="font-semibold text-lg">Techinal Writer</h1>
                <p className="opacity-60">Vercel</p>
              </div>
            </div>
            <p className="opacity-60 w-[310px]">
              We are seeking a technical writer to join our team.
            </p>
            <hr className="my-5" />
            <div className="flex space-x-[10px] items-center justify-between">
              <div className="px-[15] rounded-full bg-slate-200">
                <p className="py-[5px] px-[15px] text-black">Documentation</p>
              </div>
              <h1 className="font-semibold">$60,000 - $80,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
