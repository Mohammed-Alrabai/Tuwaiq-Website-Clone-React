// import React from 'react'
import video from '../assets/video/introS.mp4'
import '../App.css'
function Hero() {
  return (
    <div
      className=" flex flex-col justify-center items-center w-screen overflow-hidden"
      style={{
        height: "calc(100vh + 90px)",
      }}>
      <div className="flex flex-col justify-center items-center w-screen h-screen z-[-1] relative">
        <div className="video-background w-full h-full">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="text-hero">
          <h1 className="font-bold text-white">تعلم تقنيات المستقبــــــل</h1>
          <button className="btn-hero">
            <a href="#">ابـــــــــدأ الآن</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero