// import logo from "./logo.svg";
import "../../App.css";
import { Button, Container } from "@mui/material";
import logo from "../../pngLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link, BrowserRouter as Router, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const { pathname } = useLocation();
  // console.log(pathname);
  // let currPath = pathname.split("/")?.[1];
  // console.log(currPath);
  const getCurrLinks = (type = null) => {
    let normalClass = " hover:text-gray-400 cursor-pointer ";
    if (type === pathname) {
      normalClass += "text-[#0086B6] font-semibold";
    }
    return normalClass;
  };

  const [hamCurr, setHamCurr] = useState(false);
  return (
    <>
      <header
        className={`h-20 py-20  font-light bg-white sm:h-10 shadow-inner `}
      >
        <Container maxWidth={"xl"}>
          <nav className="flex justify-between">
            <div className=" flex items-center justify-center z-50">
              <img src={logo} className="w-14" alt="logo" />
              <h1 className="xl:text-2xl text-lg font-normal uppercase text-[] ">
                Pharmasift
              </h1>
            </div>
            <div
              className={
                hamCurr
                  ? `bg-white min-h-[70vh]  xl:w-auto xl:static xl:min-h-fit w-full absolute left-0 top-20  
             flex  items-center justify-center z-10`
                  : `bg-white min-h-fit  xl:w-auto xl:static xl:min-h-fit w-full absolute left-0 top-0  
             flex  items-center justify-center`
              }
            >
              <div
                className={
                  hamCurr
                    ? `font-normal xl:text-xl  text-lg flex items-center flex-col xl:flex-row justify-end xl:gap-8  gap-12 
             `
                    : "font-normal xl:text-xl  text-lg  items-center flex-col xl:flex-row justify-end xl:gap-8 xl:flex gap-12 hidden min-h-fit"
                }
              >
                <Link
                  onClick={() => setHamCurr(false)}
                  to={"/"}
                  className={getCurrLinks("/")}
                >
                  {""}
                  Home
                </Link>

                <Link
                  onClick={() => setHamCurr(false)}
                  to={"/compare"}
                  className={getCurrLinks("/compare")}
                >
                  {" "}
                  Compare Medicine
                </Link>
                <Link
                  onClick={() => setHamCurr(false)}
                  to={"/shareprisc"}
                  className={getCurrLinks("/shareprisc")}
                >
                  {" "}
                  Share Prescription
                </Link>

                <Link to={"/signin"}>
                  <button
                    onClick={() => setHamCurr(false)}
                    class={`middle none center mr-3 rounded-lg bg-gradient-to-tr from-[#0086B6] to-[#a8d9ea] py-3 px-6 font-[Montserrat] text-sm font-light uppercase text-white shadow-md shadow-[#bdc4c6] transition-all hover:shadow-lg hover:shadow-[#424a4d] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                    data-ripple-light="true"
                  >
                    sign In
                  </button>
                </Link>

                <Link to={"/signup"}>
                  <button
                    onClick={() => setHamCurr(false)}
                    class="middle  none center mr-3 rounded-lg border border-[#0086B6] py-3 px-6 font-[Montserrat] text-xs md:text-sm font-bold uppercase text-[#0086B6] transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                    data-ripple-dark="true"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div
                className="my-9 self-center cursor-pointer z-10 absolute top-12 right-10 text-2xl xl:hidden"
                onClick={() => {
                  setHamCurr(!hamCurr);
                }}
              >
                {!hamCurr ? <GiHamburgerMenu /> : <ImCross />}{" "}
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>

    // <div className="App ">
    //   <h1 className=''>Aaraf Ali</h1>
    // </div>
  );
}

export default Header;
