import React from "react";

const RewardInfo = () => {
  return (
    <div className="bg-[#131313] text-white p-4 rounded-md w-80 h-80">
      <div className="text-sm flex items-center mb-4">
        <span className="font-bold text-gray-600">Reward info</span>
        <span className="ml-1 text-gray-500 cursor-pointer">ℹ️</span>
      </div>
      <div className="border-t border-gray-700 mb-4"></div>
      <div>
        <h2 className="text-lg text-white font-bold mb-2">
          Free access to paid KOL (crypto earning) communities!
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          Win access to exclusive earning communities of some of the the
          greatest earners in crypto for a month, every 24 hours. Get access to
          unmatched insights, a close-knit community of the best airdrop
          earners, and more.
        </p>
        <p className="text-sm text-gray-600">
          To win: make sure you've connected your Twitter and Discord accounts -
          and follow our criteria!
        </p>
      </div>
    </div>
  );
};

export default RewardInfo;
