import React from 'react';
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText); // register GSAP plugins for global use -> must be done through the app

const App = () => {

  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">
        USING GSAP ANIMATION LIBRARY
      </h1>
    </div>
  );

}

export default App;