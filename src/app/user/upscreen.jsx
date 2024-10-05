'use client';
// src/app/user/page.jsx
import Loadingcube from "../components/Loadingcube";

const Loading = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Loading Cube Animation */}
      <div className="absolute inset-0">
        <Loadingcube className="fade-in" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center items-center h-screen text-center px-4 gap-5">
        <div className="text-2xl md:text-3xl lg:text-4xl">
          Invisible doesn’t mean harmless.
        </div>
        <div className="text-lg md:text-xl lg:text-2xl">
          <div className="font-bold inline-block text-2xl md:text-3xl lg:text-4xl">
            9 out of 10
          </div>{" "}
          people worldwide breathe polluted air daily.
        </div>
      </div>
    </div>
  );
};

export default Loading;
