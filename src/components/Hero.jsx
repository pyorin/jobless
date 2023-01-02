import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="mt-[90px] md:mt-[135px] p-5 md:p-0 md:w-[635px] text-center mx-auto font-poppins">
        <h1 className="font-semibold text-4xl">
          Get Connected to the Best Remote Jobs in Your Field
        </h1>
        <p className="opacity-60 mt-[15px] mb-10">
          Discover a wide range of remote opportunities on our platform and take
          control of your career
        </p>
        <div className="space-x-5">
          <a
            href=""
            className="py-3 px-[17px] bg-primary shadow-lg transition-all duration-500 hover:opacity-80 text-white rounded-full font-semibold"
          >
            Explore Remote Jobs
          </a>
          <a
            href=""
            className="font-semibold underline text-primary transition-all duration-500 hover:opacity-80"
          >
            How it works?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
