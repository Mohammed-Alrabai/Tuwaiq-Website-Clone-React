// import React from 'react'

import { data } from "autoprefixer";
import Course from "./componants/Course";
import Footer from "./componants/Footer";
import Hero from "./componants/Hero";
import Navbar from "./componants/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <h1 className="text-center py-5 text-3xl font-bold text-primary">
        أحدث المعسكرات والبرامج
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        <Course
          title="برنامج"
          description="البنية المؤسسية بمنهجية وإطار TOGAF"
          address="الرياض"
          time="أسبوعان"
          date="11-06-2023"
        />
        <Course
          title="برنامج"
          description="أمن المعلومات Security+"
          address="الرياض"
          time="أسبوع"
          date="11-06-2023"
        />
        <Course
          title="برنامج"
          description="طويق للناشئين (عن بعد)"
          address="عن بعد"
          time="4 أسابيع"
          date="1-05-2025"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
