import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import shareImg from ".//myPresc.png";
import Modal from "./Modal";
const SharePrisc = () => {
  
  return (
    <div className="my-5 min-h-[80vh] flex md:flex-row flex-col-reverse  items-center justify-center gap-4 ">
      <div>
        <h2 className="py-[0.5%]  xl:text-8xl text-[2rem] sm:justify-self-normal justify-self-center md:text-6xl">
          Share Your Prescription with the Doctor
        </h2>
        {/* <p className="py-[0.5%]  xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
          Welcome to our healthcare platform! If you have a prescription that
          you'd like our experienced doctors to review, you can easily share it
          with us for personalized advice. Your health and well-being are our
          top priorities.
        </p> */}
        <p className="py-[0.5%]  xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
          To share your prescription, please follow these steps:
        </p>
        <ol className="py-[0.5%] xl:text-2xl font-light text-[0.9rem] md:text-2xl text-[black] ">
          <li>
            <FaCheckCircle className="inline text-[#0086B6] mr-2" />
            Ensure your prescription document is clear and readable.
          </li>
          <li>
            <FaCheckCircle className="inline text-[#0086B6] mr-2" />
            Click the "Share Prescription" button below.
          </li>
          <li>
            <FaCheckCircle className="inline text-[#0086B6] mr-2" />
            Upload your prescription document.
          </li>
          <li>
            <FaCheckCircle className=" inline text-[#0086B6] mr-2" />
            Our doctors will review it and provide personalized recommendations.
          </li>
        </ol>
        <div>
          <Modal />
        </div>
      </div>

      <div>
        <img src={shareImg} alt="prescription" className="rounded-[50%]" />
      </div>
    </div>
  );
};

export default SharePrisc;
