"use client"
// src/app/user/page.jsx
import Loadingcube from "../components/Loadingcube";

// import { Roboto } from "@next/font/google";

// Call the font loader at the module scope
// const roboto = Roboto({
//   subsets: ['latin'],
//   weights: ['400', '700'], // Loading both normal and bold weights
// });


const Loading = () => {
  return (
    <div>
      
      <div className="h-screen w-screen absolute">
        <Loadingcube className="fade-in" />
      </div>
      <div className={`flex flex-col justify-center items-center h-screen text-4xl gap-5 `}>
        <div>Invisible doesn't mean harmless.</div>
        <div>
          <div className="font-bold inline-block">9 out of 10</div> people worldwide breathe polluted air daily.</div>
      </div>
    </div>
  );
};

export default Loading;
