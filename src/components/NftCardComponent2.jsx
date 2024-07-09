import React from "react";
import nftImage2 from "../assets/nftImage2.png";

const NftCardComponent2 = () => {
  return (
    <div className="relative bg-gray-800 rounded-lg p-6 w-60 text-white text-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full p-1">
        <svg
          className="w-6 h-6 text-white"
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
      <img
        src={nftImage2}
        alt="NFT"
        className="w-full h-32 object-cover rounded-md mt-4"
      />
      <div className="absolute top-16 right-4 bg-gray-900 rounded-full p-2">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 3h.01m-6.938 4h13.856c.982 0 1.798-.893 1.654-1.87L18.92 7.13A1.75 1.75 0 0017.19 6H6.81c-.916 0-1.66.612-1.93 1.498L3.28 14.13c-.144.977.672 1.87 1.654 1.87z"
          />
        </svg>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Intract Certified: Learner NFT</h2>
        <p className="text-gray-400 mt-2">Your proof of airdrop expertise</p>
        <button className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
          Claim
        </button>
      </div>
    </div>
  );
};

export default NftCardComponent2;
