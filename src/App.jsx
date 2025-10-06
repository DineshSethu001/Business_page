import React from "react";
import { Company_logo, Hero, Navbar, Purpose_sec } from "./components";
import Features from "./components/Features";
const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 "></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Company_logo />
        <Purpose_sec/>
        <Features/>
      </div>
    </main>
  );
};

export default App;
