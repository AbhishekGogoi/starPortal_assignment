import React from "react";

const VideoCard = ({ image, title, videoUrl }) => {
  return (
    <div className="relative w-64 h-96 bg-gray-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {videoUrl ? (
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
