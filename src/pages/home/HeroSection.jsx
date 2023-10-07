import { useLayoutEffect, useState } from "react";
import slider from "../../data/slider.json";
import useDisplay from "../../hooks/useDisplay";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState({ start: 0, end: 1 });
  const [windowWidth] = useDisplay();

  useLayoutEffect(() => {
    if (windowWidth > 770) {
      setActiveSlide({ start: 0, end: 2 });
    }
    if (windowWidth < 770) {
      setActiveSlide({ start: 0, end: 1 });
    }
  }, [windowWidth]);

  const handleSliderNext = () => {
    if (slider.length > activeSlide.end) {
      setActiveSlide((prev) => ({
        ...prev,
        start: prev.start + 1,
        end: prev.end + 1,
      }));
    }
  };
  const handleSliderPrev = () => {
    if (activeSlide.start === 0) {
      return;
    }
    setActiveSlide((prev) => ({
      ...prev,
      start: prev.start - 1,
      end: prev.end - 1,
    }));
  };

  return (
    <div className=" bg-cb md:h-screen w-full flex  items-center px-5 xl:px-0 py-20 md:py-0 pt-36 md:pt-0">
      <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="md:w-[450px] xl:w-[550px] 2xl:w-[650px]">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white ">
            Let's Celebrate Your
            <span className="text-bg"> Social Events</span> With Us
          </h1>
          <p className=" text-zinc-400 my-3  text-sm xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex justify-center md:justify-start  items-center text-zinc-300 mt-10 gap-10 mb-10 md:-mb-0 text-center">
            <button
              onClick={handleSliderPrev}
              className=" border-[2px] border-zinc-300 p-2 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <span> {activeSlide.start} </span>
            <span> / </span>
            <span> {slider.length - activeSlide.end} </span>
            <button
              onClick={handleSliderNext}
              className=" border-[2px] border-zinc-300 p-2 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" flex justify-start items-center gap-5">
          {slider
            .slice(activeSlide.start, activeSlide.end)
            ?.map((slide, index) => (
              <div className=" relative" key={index}>
                <img
                  src={slide.img}
                  alt=""
                  className="w-[270px] lg:w-[240px] xl:w-[300px] h-[400px] xl:h-[500px] 2xl:h-[600px] 2xl:w-[400px]"
                />
                <div className=" absolute top-0 left-0 w-full h-full bg-slider"></div>
                <div className=" absolute bottom-12 left-0 w-full flex items-center justify-center text-center">
                  <h1 className=" text-xl xl:text-3xl text-white logo-text text-center">
                    {slide.name}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
