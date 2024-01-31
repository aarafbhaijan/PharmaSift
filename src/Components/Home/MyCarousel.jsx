import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./img1.jpg";
import img_2 from "./img2.5.jpg";

import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";


const MyCarousel = () => {
  return (
    <div className="xl:w-[100%] w-[100%] h-fit justify-self-center">
      <Carousel
        className=' self-center rounded-xl  '
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators
        showStatus={false}
        width={'80%'}
        interval={1000}
        showThumbs={false}
        transitionTime={1}
        // stopOnHover={true}
        // showIndicators={false}
        
      >
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img_2} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
      </Carousel>
      </div>
    
  );
};

export default MyCarousel;
