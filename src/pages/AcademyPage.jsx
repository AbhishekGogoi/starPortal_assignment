import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import CardComponent from "../components/QuestCard";
import NftCardComponent from "../components/NftCardComponent";
import CardComponent2 from "../components/QuestCard2";
import NftCardComponent2 from "../components/NftCardComponent2";
import RewardTimer from "../components/RewardTimer";
import RewardCard from "../components/RewardCard";
import RewardInfo from "../components/RewardInfo";
import VideoCard from "../components/VideoCard";
import cryptoDictionary from "../assets/cryptoDictionary.svg";

const videoData = [
  {
    image: "url_to_image1",
    title: "How to plan your retirement with crypto?",
    videoUrl: "https://www.youtube.com/shorts/NkDtaXvzt-I",
  },
  {
    image: "url_to_image2",
    title: "Why are there limited Bitcoin?",
    videoUrl: "https://www.youtube.com/shorts/-kmxV_JO7eY",
  },
  {
    image: "url_to_image3",
    title: "How does Uniswap actually work?",
    videoUrl: "https://www.youtube.com/shorts/9fyVLvY3P14",
  },
  {
    image: "url_to_image4",
    title: "How to spot crypto projects to invest in?",
    videoUrl: "https://www.youtube.com/shorts/kYeFSwvt1sQ",
  },
];

const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState("Essentials");
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    if (activeTab === "Essentials") {
      setSliderStyle({ transform: "translateX(0%)" });
    } else if (activeTab === "Alpha Hub") {
      setSliderStyle({ transform: "translateX(100%)" });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="relative h-screen flex flex-col items-center justify-center text-center background-image">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Intract Academy</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Intract users have together made more than $100 million in web3.
            Join them and learn how to earn crypto!
          </p>
          <button className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-purple-500">
            Get Started →
          </button>
        </div>
      </section>
      <section className="relative   bg-black flex flex-col items-center">
        <div className="absolute top-1 left-96 ">
          <CardComponent />
        </div>
        <div className="absolute top-72 right-96 ">
          <NftCardComponent />
        </div>
        <div className="absolute top-[50rem] right-[38rem]">
          <CardComponent2 />
        </div>
        <div className="absolute top-[66rem] left-96">
          <NftCardComponent2 />
        </div>
        <div className="absolute top-[96rem] right-[53rem]">
          <RewardTimer />
        </div>
        <div className="absolute top-[107rem] right-[53rem]">
          <RewardCard />
        </div>
        <div className="absolute top-[98rem] right-[28rem]">
          <RewardInfo />
        </div>
      </section>
      <div className="relative">
        <div
          className="absolute w-full border-t border-gray-900"
          style={{ top: "150rem" }}
        ></div>
      </div>
      <section className="py-16 bg-black text-white mt-[150rem]">
        <h2 className="text-3xl font-bold text-center">
          Top Crypto Creators and Projects to Follow
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Answers to your crypto doubts, straight from the experts
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          {videoData.map((video, index) => (
            <VideoCard
              key={index}
              image={video.image}
              title={video.title}
              videoUrl={video.videoUrl}
            />
          ))}
        </div>
      </section>
      <hr className="w-full border-t border-gray-900 my-8" />
      <section className="text-white">
        <h2 className="text-3xl font-bold text-center">Crypto Dictionary</h2>
        <p className="text-center text-gray-400 mt-2">
          Your one-stop to catch up on all crypto terms
        </p>
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <img
              src={cryptoDictionary}
              alt="Crypto Dictionary"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-semibold">Web3 + Degen Glossary</h3>
              <p className="text-gray-400">Your own crypto dictionary</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-8">
          {activeTab === "Essentials" ? (
            <div>Essentials Content</div>
          ) : (
            <div>Alpha Hub Content</div>
          )}
        </div> */}
      </section>
      <div
        className="mt-20 mb-20 flex justify-center sticky bottom-0 z-100"
        style={{ bottom: "20px" }}
      >
        <div className="relative inline-flex rounded-full bg-[#151515] bg-opacity-50 space-x-1">
          <div
            className="absolute inset-x-0 h-full bg-[#393939] bg-opacity-50 rounded-full transition-transform duration-500 ease-in-out"
            style={{ ...sliderStyle, width: "50%" }}
          ></div>
          <button
            className={`relative w-40 py-2 px-2 rounded-full  z-100 transition-all transform ${
              activeTab === "Essentials"
                ? "bg-[#393939] bg-opacity-50 text-white scale-105"
                : "bg-[#151515]  text-gray-400 hover:bg-[#393939]"
            }`}
            onClick={() => setActiveTab("Essentials")}
          >
            Essentials
          </button>
          <button
            className={`relative w-40 py-2 px-2 rounded-full  z-100 transition-all transform ${
              activeTab === "Alpha Hub"
                ? "bg-[#393939] bg-opacity-50 text-white scale-105"
                : "bg-[#151515]  text-gray-400 hover:bg-[#393939]"
            }`}
            onClick={() => setActiveTab("Alpha Hub")}
          >
            Alpha Hub
          </button>
        </div>
      </div>
      <hr className="w-full border-t border-gray-900 my-8" />
      <footer className="text-gray-400">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left mb-4 lg:mb-0 ml-20">
            <h3 className="text-white font-bold text-xl">intract.</h3>
            <p className="mt-2">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8 mr-20 mt-16">
            <div className="mb-4 lg:mb-0">
              <h4 className="text-white font-semibold">INTRACT</h4>
              <ul>
                <li>Explore Quests</li>
                <li>Communities</li>
                <li>Alpha Hub</li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0">
              <h4 className="text-white font-semibold">EARN</h4>
              <ul>
                <li>Refer & Earn</li>
                <li>Leaderboard</li>
                <li>Achievements</li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0">
              <h4 className="text-white font-semibold">ABOUT</h4>
              <ul>
                <li>Product Roadmap</li>
                <li>Affiliate Program</li>
                <li>Sign up Program</li>
                <li>Growth Community</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0">
              <h4 className="text-white font-semibold">SUPPORT</h4>
              <ul>
                <li>Help Center</li>
                <li>Create your quest</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Community Guidelines</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="ml-[16.5rem] mr-[16.5rem]  border-t border-gray-700" />
        <div className="container mx-auto text-center mt-8 mb-8">
          <p className="text-gray-400 text-sm ml-20 mr-20">
            Disclaimer: Crypto Products, Virtual Digital Assets, and NFTs are
            unregulated and can be highly risky. There may be no regulatory
            recourse for any loss from such transactions. We advise the viewer
            to proceed with caution. Nothing in this website or any
            communication published by us amounts to, is intended to be, or
            should be construed as investment or purchase advice of any kind or
            financial advice or promotion under any applicable laws. Any
            decision made based on the content provided on this website or any
            communication published by us shall not be attributable to us.
          </p>
        </div>
        <hr className="ml-[16.5rem] mr-[16.5rem] border-t border-gray-700" />
        <div className="flex justify-center items-center mt-10 space-x-96 mb-10">
          <p className="text-gray-400 text-sm mr-[45rem]">
            CREATED BY <span className="text-white underline">INTRACT</span>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-spotify"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AcademyPage;
