import React from "react";
import imageJeremy from "./assets/image-jeremy.png";
import iconWork from "./assets/icon-work.svg";
import iconPlay from "./assets/icon-play.svg";
import iconStudy from "./assets/icon-study.svg";
import iconExercise from "./assets/icon-exercise.svg";
import iconSocial from "./assets/icon-social.svg";
import iconSelfCare from "./assets/icon-self-care.svg";
import iconEllipsis from "./assets/icon-ellipsis.svg";

const App = () => {
  const timeframes = [
    {
      title: "Work",
      icon: iconWork,
      current: "32hrs",
      previous: "36hrs",
      bgColor: "bg-Orange300",
    },
    {
      title: "Play",
      icon: iconPlay,
      current: "10hrs",
      previous: "8hrs",
      bgColor: "bg-Blue300",
    },
    {
      title: "Study",
      icon: iconStudy,
      current: "4hrs",
      previous: "7hrs",
      bgColor: "bg-Pink400",
    },
    {
      title: "Exercise",
      icon: iconExercise,
      current: "4hrs",
      previous: "5hrs",
      bgColor: "bg-Green400",
    },
    {
      title: "Social",
      icon: iconSocial,
      current: "5hrs",
      previous: "10hrs",
      bgColor: "bg-Purple700",
    },
    {
      title: "Self Care",
      icon: iconSelfCare,
      current: "2hrs",
      previous: "2hrs",
      bgColor: "bg-Yellow300",
    },
  ];

  return (
    <main className="container mx-auto min-h-screen flex flex-col justify-center items-center lg:flex-row lg:gap-8 p-4 lg:p-8">
      {/* Aside Container */}
      <aside className="bg-Navy900 rounded-2xl w-[280px]">
        <div className="bg-Purple600 rounded-2xl flex flex-row lg:flex-col items-center lg:items-start p-4 lg:p-8">
          <div>
            <img
              src={imageJeremy}
              alt="Jeremy"
              className="md:w-[90px] w-[70px] rounded-full border-white border-[3px] lg:mb-9 md:mb-3 lg:mr-0 md:mr-0 mr-3"
            />
          </div>
          <div>
            <span className="text-Navy200">Report for</span>
            <h1 className="text-white text-[20px] lg:text-[40px] font-light">
              Jeremy Robson
            </h1>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-start max-sm:justify-center gap-7 p-5 lg:p-8">
          <a
            href="#"
            className="text-Purple500 hover:text-Navy200 ease-in-out duration-300"
          >
            Daily
          </a>
          <a href="#" className="text-Navy200">
            Weekly
          </a>
          <a
            href="#"
            className="text-Purple500 hover:text-Navy200 ease-in-out duration-300"
          >
            Monthly
          </a>
        </div>
      </aside>

      {/* Timeframes Container */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-lg:mt-5">
        {timeframes.map((timeframe) => (
          // Background Color Container With image
          <div
            key={timeframe.title}
            className={`${timeframe.bgColor} rounded-2xl relative lg:w-[220px] w-[280px] h-[170px] lg:h-[250px]`}
          >
            <img
              src={timeframe.icon}
              alt={timeframe.title}
              className="absolute top-3 right-3 w-12"
            />
            {/* White Container */}
            <div className="bg-Navy900 rounded-xl absolute bottom-0 left-0 h-[130px] lg:h-[200px] w-full hover:bg-[rgb(52,57,123)] ease-in-out duration-300 cursor-pointer">
              <div className="flex justify-between items-center p-6 pt-8">
                <h2 className="text-white text-lg">{timeframe.title}</h2>
                <img src={iconEllipsis} alt="Ellipsis" className="w-5" />
              </div>
              <div className="flex flex-row lg:flex-col justify-between items-start max-sm:items-center px-6">
                <h3 className="text-white text-[28px] lg:text-[48px] font-light">
                  {timeframe.current}
                </h3>
                <p className="text-Navy200 text-sm">
                  Last Week - {timeframe.previous}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default App;
