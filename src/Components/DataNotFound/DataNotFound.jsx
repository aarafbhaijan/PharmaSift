import React from "react";
import noData from "./noData.jpg";

const DataNotFound = () => {
  return (
    <div className="h-[70vh] w-full  flex flex-col justify-center items-center ">
      <img
        src={noData}
        alt="Data Not Found"
        className="rounded-[50%] xl:w-[40%] md:w-[40%]"
      />
      <h1 className="text-3xl md:text-4xl text-center text-[#0086B6] font-semibold">
        <h1 className="text-[crimson] font-bold">404</h1>
        Page Not Found
      </h1>
    </div>
  );
};

export default DataNotFound;
