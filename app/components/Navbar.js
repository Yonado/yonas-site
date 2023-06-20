"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-[999]">
      <nav className=" font-serif p-4 text-[24px] w-full flex flex-row-reverse justify-between items-center px-10">
        {/* <a href="/" className="w-full"> */}
        {/* <div className="rounded-full bg-gray-500 w-10 h-10"> */}
        <a href="/" className="cursor-pointer p-4">
          yona.
        </a>
        {/* </div> */}
        {/* </a> */}
        <button
          className={`text-[34px] font-bold text-left mb-4 p-4 z-20`}
          onClick={handleToggle}
        >
          =
        </button>
      </nav>
      <div
        className={`fixed bg-gray-900 shadow-white h-screen w-full text-[40px] md:max-w-[400px] z-30 top-0 left-0 transition-transform duration-300 font-serif text-center ${
          isOpen ? "translate-x-[0]" : "translate-x-[-100%] overflow-hidden"
        }`}
        // className={`fixed bg-gray-500 h-screen w-[300px] max-w-[300px] z-30 top-0 transition-transform duration-300 font-serif text-[24px] ${
        //   isOpen ? "translate-x-[-100%]" : "translate-x-[0]"
        // }`}
      >
        <div className="p-4 flex flex-col">
          <button
            className={`text-[34px] font-bold text-left mb-4 p-4 z-50 px-10`}
            onClick={handleToggle}
          >
            =
          </button>
          <div className="flex flex-col">
            <a href="/">home.</a>
            <a href="/gallery">gallery.</a>
            <a href="#">about.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// return (
//     <div className="relative z-[999]">
//       <nav className="font-serif p-4 text-[24px] w-full flex justify-between items-center">
//         {/* <a href="/" className="w-full"> */}
//         {/* <div className="rounded-full bg-gray-500 w-10 h-10"> */}
//         <a href="/" className="cursor-pointer p-4">
//           yona.
//         </a>
//         {/* </div> */}
//         {/* </a> */}
//         <button
//           className="text-[34px] font-bold text-left mb-4 p-4 z-50"
//           onClick={handleToggle}
//         >
//           =
//         </button>
//       </nav>
//       <div
//         className={`fixed bg-gray-900 shadow-white h-screen w-full text-[40px] md:max-w-[400px] z-30 top-0 right-0 transition-transform duration-300 font-serif text-center ${
//           isOpen ? "translate-x-[0]" : "translate-x-[100%]"
//         }`}
//         // className={`fixed bg-gray-500 h-screen w-[300px] max-w-[300px] z-30 top-0 transition-transform duration-300 font-serif text-[24px] ${
//         //   isOpen ? "translate-x-[-100%]" : "translate-x-[0]"
//         // }`}
//       >
//         <div className="p-4 flex flex-col mt-10">
//           <a href="/">home.</a>
//           <a href="/gallery">gallery.</a>
//           <a href="#">about.</a>
//         </div>
//       </div>
//     </div>
//   );
// };
