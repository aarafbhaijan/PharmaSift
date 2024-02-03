import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MyCarousel from "./MyCarousel";
import MobileCarousel from "../MobileCarousel/MobileCarousel";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className=" scroll-smooth flex md:justify-self-end justify-center  items-center md:flex-row flex-col-reverse min-h-[80vh] w-screen 2xl:justify-center space-x-40 xl:gap-40 ">
          <div className="justiy-self-center md:w-[45%] w-fit h-fit py-10">
            <h1 className=" xl:text-8xl text-[2rem] sm:justify-self-normal justify-self-center md:text-6xl">
              <h1>Buy</h1>
              <h1>Smarter,</h1>
              <h1>Faster,Cheaper...</h1>
            </h1>
            <h2 className=" xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
              Get The Best Deals Here...
            </h2>
            <Link to={"/compare"}>
              <button
                class="middle none md:w-[400px] center mr-3 rounded-lg bg-gradient-to-tr from-[#0086B6] to-[#a8d9ea]  py-3 px-6 font-[Montserrat] md:text-xl text-sm font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#b1ccd6] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Get Started
              </button>
            </Link>
          </div>
          <div className=" xl:normal  md:flex  justify-self-center">
            <MyCarousel className="flex  h-fit  px-5 self-center" />
          </div>
          {/* <div className="md:hidden flex min-h-lvh">
            <MobileCarousel className=""/>
          </div> */}
          {/* <div className='w-20 '>Aaraf</div>
        <div className='w-20 absolute top-50 right-[20rem]'>Ali</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
