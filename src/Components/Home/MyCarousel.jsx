import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./img1.jpg";
import img_2 from "./img2.5.jpg";

import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

const MyCarousel = ({ img6, img7, img8, img9, img10, steps }) => {
  return (
    <div
      className={
        img6
          ? `justify-self-center h-fit xl:w-[25%] md:w-[35%] w-[100%] `
          : `max-w-screen-sm mx-auto xl:w-[100%] w-[100%] h-fit justify-self-center`
      }
    >
      <Carousel
        className=" self-center rounded-2xl   "
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators
        showStatus={false}
        width={"80%"}
        interval={1000}
        showThumbs={false}
        transitionTime={1}
        // stopOnHover={true}
        // showIndicators={false}
      >
        <div>
          <img src={img6 || img1} alt="" />
          {steps && (
            <h1 className=" pt-8 xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
              {steps.one}
            </h1>
          )}
        </div>
        <div>
          <img src={img7 || img_2} alt="" />
          {steps && (
            <h1 className=" pt-8 xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
              {steps.two}
            </h1>
          )}
        </div>
        <div>
          <img src={img8 || img2} alt="" />
          {steps && (
            <h1 className=" pt-8 xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
              {steps.three}
            </h1>
          )}
        </div>
        <div>
          <img src={img9 || img3} alt="" />
          {steps && (
            <h1 className=" pt-8 xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
              {steps.four}
            </h1>
          )}
        </div>
        <div>
          <img src={img10 || img4} alt="" />
          {steps && (
            <h1 className=" pt-8  xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
              {steps.five}
            </h1>
          )}
        </div>
        <div>
          <img src={img5 ? img5 : ""} alt="" />
          {steps && (
            <h1 className=" pt-8  xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
              {steps.six}
            </h1>
          )}
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
