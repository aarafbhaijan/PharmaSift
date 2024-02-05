import React, { useEffect, useState } from "react";
import logo from "../../pngLogo.png";
import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import MyCarousel from "../Home/MyCarousel";
import SearchResults from "../SearchResults/SearchResults";
import CompareImg from "./CompareImg.jpg";

const CompareMed = () => {
  const [medSearch, setMedSearch] = useState("");
  const [medData, setMedData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // // Medicine genrator BackendApicall function (simulator function)
  const getMedicine = (med) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const medicine = {
          name: med,
          phar1: {
            pharmacyName: "A",
            price: 500,
            type: "capsules",
            quantity: "10 Tabs/Strips",
            priscription: 1,
            buy: false,
          },
          phar2: {
            pharmacyName: "B",
            price: 200,
            type: "capsules",
            quantity: "10 Tabs/Strips",
            priscription: 0,
            buy: true,
          },
        };
        res(medicine);
        rej("Something Went Wrong");
      }, 3000);
    });
  };

  const fetchMedicine = async () => {
    try {
      setLoading(true);
      setMedData({});
      const data = await getMedicine(medSearch);
      // console.log(data);
      setMedData(data);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      // console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMedicine();
  }, []);
  return (
    <div className=" flex max-w-full flex-col  justify-evenly items-center min-h-lvh ">
      <div className="m-4 ">
        <img src={CompareImg} alt="" className="rounded-3xl " />
      </div>
      <div className=" md:w-[400px] min-w-[30%] md:min-h-[60%] min-h-[100vh]  py-8 rounded-xl">
        <div className="text-center text-5xl  p-5font-bold text-[#0086B6]">
          Get Your Medicine Done!{" "}
        </div>
        <div className="text-center py-7 ">
          <img src={logo} alt="logo" className="w-20 m-auto" />
          <h3 className="text-2xl">Search Your Medicine</h3>
          <p className="text-[#0086B6] font-bold">Or</p>
          <h3 className="text-2xl">Search By Illness</h3>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              fetchMedicine();
              setMedSearch("");
            }}
          >
            <div className="">
              <input
                type="text"
                value={medSearch}
                onChange={(e) => setMedSearch(e.target.value)}
                name="seach"
                placeholder="Enter It Here..."
                id=""
                className="max-w-[80%] my-10 mx-2 px-4 h-10 text-xl focus:outline-none focus:text-[#0086B6] font-light focus:font-bold focus:border-[#0086B6]  focus:border-b-4 text-center "
              />
              <div>
                <button
                  class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-[#0086B6] to-[#a8d9ea]  py-3 px-6 font-[Montserrat] md:text-xl text-sm font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#b1ccd6] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-dark="true"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <div>
            <SearchResults className="" data={medData} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareMed;
