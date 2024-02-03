import React from "react";
import { Link } from "react-router-dom";

const SharePrisc = () => {
  const dr_PhoneNum = "9082871677";
  const message = "Prescription to be checked..";
  const whatsappLink = `https://wa.me/${dr_PhoneNum}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className=" min-h-[80vh] flex justify-center flex-col gap-4">
      <div>
        <h2 className="py-[0.5%]  xl:text-8xl text-[2rem] sm:justify-self-normal justify-self-center md:text-6xl">
          Share Your Prescription with the Doctor
        </h2>
        <p className="py-[0.5%]  xl:text-4xl text-[1rem]  md:text-3xl text-[#0086B6]">
          Welcome to our healthcare platform! If you have a prescription that
          you'd like our experienced doctors to review, you can easily share it
          with us for personalized advice. Your health and well-being are our
          top priorities.
        </p>
        <p className="py-[0.5%] xl:text-3xl font-bold text-[1rem]  md:text-2xl text-[black]">
          To share your prescription, please follow these steps:
        </p>
        <ol className="py-[0.5%]  xl:text-2xl text-[0.6rem]  md:text-xl text-[#0086B6]  ">
          <li>Ensure your prescription document is clear and readable.</li>
          <li>Click the "Share Prescription" button below.</li>
          <li>Upload your prescription document.</li>
          <li>
            Our doctors will review it and provide personalized recommendations.
          </li>
        </ol>
      </div>
      <div>
        <Link to={whatsappLink} target="_blank">
          <button
            class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-[#0086B6] to-[#a8d9ea]  py-3 px-6 font-[Montserrat] md:text-xl text-sm font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#b1ccd6] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Share Prescription
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SharePrisc;
