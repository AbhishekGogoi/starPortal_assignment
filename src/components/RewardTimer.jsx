import React from "react";

const RewardTimer = () => {
  return (
    <div className="bg-[#151515] rounded-lg p-4 w-80">
      <div className="flex items-center mb-2">
        <svg
          className="w-4 h-4 text-orange-500 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-4V8a1 1 0 00-2 0v6a1 1 0 002 0zm-1-8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-400">Reward unlocks in</p>
      </div>
      <div className="bg-black rounded-lg p-4 text-center">
        <div className="flex justify-between text-gray-200 text-lg font-bold">
          <div className="text-center w-20">
            <span>00</span>
            <p className="text-gray-400 text-lg">Days</p>
          </div>
          <div className="text-center w-20">
            <span>21</span>
            <p className="text-gray-400 text-lg">Hrs</p>
          </div>
          <div className="text-center w-20">
            <span>34</span>
            <p className="text-gray-400 text-lg">Mins</p>
          </div>
          <div className="text-center w-20">
            <span>01</span>
            <p className="text-gray-400 text-lg">Sec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardTimer;
