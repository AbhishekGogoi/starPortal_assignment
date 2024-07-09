import React from "react";
import broadcasticon from "../assets/broadcasticon.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center p-4 bg-black">
      <div className="text-2xl font-bold text-[#DEDEDE] ml-[20rem]">
        intract.
      </div>
      <div className="hidden md:flex space-x-6 text-[#909090] ml-10">
        <a href="#" className="hover:text-gray-400">
          Compass
        </a>
        <a href="#" className="hover:text-gray-400">
          Explore
        </a>
        <a href="#" className="text-purple-400 hover:text-gray-400">
          Academy{" "}
          <span className="bg-purple-400 text-xs text-black rounded px-1">
            New
          </span>
        </a>
        <a href="#" className="hover:text-gray-400">
          NFTs
        </a>
        <a href="#" className="hover:text-gray-400">
          For Projects
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-6 ml-10">
        <input
          type="text"
          placeholder="Search for ecosystems, trending quests etc."
          className="w-[30rem] p-2 bg-[#181818] rounded placeholder-gray-500 text-white"
        />
        <button className="bg-gray-800 p-2 rounded hover:bg-gray-700">
          <img src={broadcasticon} alt="BroadcastIcon" className="w-6 h-6" />
        </button>
        <button className="bg-white text-black py-1 px-6 rounded hover:bg-gray-400">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
