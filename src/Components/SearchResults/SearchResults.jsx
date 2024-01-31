import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const SearchResults = ({ data, loading, compare }) => {
  const [notBuy, setNotBuy] = useState(true);
  // ((data.phar1.price)-(data.phar2.price)>=0)?setNotBuy(false):setNotBuy(true)

  if (!data.name && loading) {
    return <h1>Loading...</h1>;
  }

  return (
    data.name && (
      // (!data && setLoading(true))?(<div><h1>Loading....</h1></div>):(<div>
      //     <h1>{data.name}</h1>

      //     </div>)
      <>
        <div className="h-3/4 py-6 text-center flex flex-col items-center ">
          <div className="">
            <h1 className="text-xl text-bold">
              <b>Compare Prices</b> of<b> Government Medicines </b>&{" "}
              <b>Private Medicines....</b>{" "}
            </h1>
            <h1 className="texl-lg font-bold text-[#0086B6]">
              Get Maximum Discount...
            </h1>
          </div>
          <div>
            <label htmlFor="name" className="text-2xl pr-3 ">
              Medicine Name:{" "}
            </label>
            <span className="uppercase text-2xl font-bold text-[#0086B6] bg-white px-3">
              {data.name}
            </span>
          </div>
          <div className=" items-center justify-center flex md:flex-row flex-col gap-6  w-screen">
            <SingleCard data={data.phar1} compare={data} notBuy={notBuy} />

            <SingleCard data={data.phar2} compare={data} notBuy={notBuy} />
          </div>
        </div>
      </>
    )
  );
};
export default SearchResults;
