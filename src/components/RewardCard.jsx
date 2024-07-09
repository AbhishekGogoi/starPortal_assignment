import React from "react";
import rewardCardImage from "../assets/rewardCardImage.gif";
import discordRewardCard from "../assets/discordRewardCard.svg";

const RewardCard = () => {
  return (
    <div className="bg-[#151515] rounded-lg p-4 w-80">
      <div className="relative">
        <img
          src={rewardCardImage} // Replace with the path to your gif
          alt="Lucky Draw"
          className="w-full h-72 object-cover rounded-lg"
        />
        <span className="absolute top-2 right-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
          Lucky Draw
        </span>
      </div>
      <div className="mt-4 bg-black rounded-lg p-4 text-center">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-base font-semibold text-left">
            Exclusive Community
          </h3>
          <div className="flex items-center justify-center ml-2">
            <img
              src={discordRewardCard} // Replace with the path to your Discord symbol image
              alt="Discord"
              className="w-4 h-4 mr-1"
            />
            <span className="text-blue-500">Earndrop</span>
          </div>
        </div>
        <div className="border-t border-dotted border-gray-600 mt-2"></div>
        <ul className="mt-4 text-left text-gray-400 space-y-2">
          <li className="flex items-center justify-between">
            <span>Complete all Essential quests</span>
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="flex items-center justify-between">
            <span>Complete at least 1 Alpha Hub quest today</span>
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>
        <button className="mt-4 bg-[#252525] text-white px-4 py-2 w-full rounded-md">
          Claim Now →
        </button>
      </div>
    </div>
  );
};

export default RewardCard;
