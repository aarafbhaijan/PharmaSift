import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img7.5.jpg";
import img9 from "./img8.jpg";
import img10 from "./img9.jpg";

import React from "react";

const MyAliceCarousel = () => {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    200: {
      items: 3,
    },
    512: {
      items: 7,
    },
    1024: {
      items: 8,
    },
  };
  const items = [
    <div className="h-[50%]">
      <img src={img6} onDragStart={handleDragStart} role="Step-1" />
      <b>Step-1</b>
    </div>,
    <div>
      <img src={img7} onDragStart={handleDragStart} role="Step-1" />
      <b>Step-2</b>
    </div>,
    <div>
      <img src={img8} onDragStart={handleDragStart} role="Step-1" />
      <b>Step-3</b>
    </div>,
    <div>
      <img src={img9} onDragStart={handleDragStart} role="Step-1" />
      <b>Step-4</b>
    </div>,
    <div>
      <img src={img10} onDragStart={handleDragStart} role="It's Done" />
      <b>It's Done</b>
    </div>,
  ];

  return (
    items && (
      <AliceCarousel
        autoPlay
        infinite
        responsive={responsive}
        mouseTracking
        items={items}
        disableButtonsControls
        disableDotsControls
      />
    )
  );
};

export default MyAliceCarousel;
