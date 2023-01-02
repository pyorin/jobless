import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex px-10 pt-4 lg:px-[150px] items-center font-poppins md:pt-[58px] justify-between">
        <h1 className="text-2xl font-semibold">Jobless</h1>
        <ul className="hidden md:flex space-x-[40px] lg:space-x-[50px]">
          <li>
            <a href="" className="font-medium">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="opacity-80 transition-all duration-300 hover:opacity-100 font-medium"
            >
              Discover
            </a>
          </li>
          <li>
            <a
              href=""
              className="opacity-80 transition-all duration-300 hover:opacity-100 font-medium"
            >
              Post a Job
            </a>
          </li>
          <li>
            <a
              href=""
              className="opacity-80 transition-all duration-300 hover:opacity-100 font-medium"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <a
          href=""
          className="font-semibold px-[25px] py-[10px] rounded-md border border-black transition duration-500 hover:bg-black hover:text-white hover:border-opacity-10 border-opacity-20"
        >
          Sign Up
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
