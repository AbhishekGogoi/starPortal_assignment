import React, { useState } from "react";

const CardComponent2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="relative bg-gray-800 rounded-lg p-6 w-128 text-white">
        <div className="flex">
          <img
            src="/src/assets/cryptoImageHeader1.png" // Replace with your image path
            alt="Crypto"
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Basics of Crypto</h2>
            <p className="text-gray-400 mt-2">
              The safest and easiest place to start your crypto journey!
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full">
                4 Quests
              </span>
              <div className="relative">
                <button onClick={toggleDropdown} className="focus:outline-none">
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <img
                src="/src/assets/coinIcon.svg" // Replace with your coin icon path
                alt="Coin Icon"
                className="w-6 h-6"
              />
              <span className="ml-2">1040 XPs</span>
            </div>
          </div>
        </div>
        {dropdownOpen && (
          <div className="mt-4 bg-gray-700 rounded-lg p-4 w-full">
            <div className="overflow-y-auto max-h-96">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg mb-4">
                <img
                  src="/src/assets/cryptoImage7.png"
                  alt="Task 1"
                  className="w-28 h-20 rounded-md"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-bold">
                    #1: What are airdrops, and...
                  </h3>
                  <p className="text-sm text-gray-400">11 Tasks</p>
                  <div className="bg-gray-600 h-3 rounded-full mt-1">
                    <div className="bg-indigo-600 h-full w-1/3 rounded-full"></div>
                  </div>
                </div>
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg mb-4">
                <img
                  src="/src/assets/cryptoImage8.jpg"
                  alt="Task 2"
                  className="w-28 h-20 rounded-md"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-bold">#2: Types of airdrops</h3>
                  <p className="text-sm text-gray-400">8 Tasks</p>
                  <div className="bg-gray-600 h-3 rounded-full mt-1">
                    <div className="bg-indigo-600 h-full w-1/4 rounded-full"></div>
                  </div>
                </div>
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg mb-4">
                <img
                  src="/src/assets/cryptoImage9.jpg"
                  alt="Task 3"
                  className="w-28 h-20 rounded-md"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-bold">
                    #3: How to earn huge $$$...
                  </h3>
                  <p className="text-sm text-gray-400">8 Tasks</p>
                  <div className="bg-gray-600 h-2 rounded-full mt-1">
                    <div className="bg-indigo-600 h-full w-1/4 rounded-full"></div>
                  </div>
                </div>
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg mb-4">
                <img
                  src="/src/assets/cryptoImage10.jpg"
                  alt="Task 4"
                  className="w-28 h-20 rounded-md"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-bold">
                    #4: Things to keep in mind!
                  </h3>
                  <p className="text-sm text-gray-400">10 Tasks</p>
                  <div className="bg-gray-600 h-2 rounded-full mt-1">
                    <div className="bg-indigo-600 h-full w-1/4 rounded-full"></div>
                  </div>
                </div>
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent2;
