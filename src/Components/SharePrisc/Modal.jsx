import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyCarousel from "../Home/MyCarousel";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
// import img5 from "./myPresc.png";
import img6 from "./img8.jpg";
import img7 from "./img9.jpg";
import img8 from "./img7.5.jpg";
import img9 from "./img7.jpg";
import img10 from "./img6.jpg";

import { FaCheckCircle } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dr_PhoneNum = "9082871677";
  const message = "Prescription to be checked..";
  const whatsappLink = `https://wa.me/${dr_PhoneNum}?text=${encodeURIComponent(
    message
  )}`;
  const steps = {
    one: "Step 1",
    two: "Step 2",
    three: "Step 3",
    four: "Step 4",
    five: "It's Done",
    six: "Take Your Medicine",
  };
  return (
    <div>
      <button
        class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-[#0086B6] to-[#a8d9ea]  py-3 px-6 font-[Montserrat] md:text-xl text-sm font-light   text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#424a4d] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
        onClick={handleOpen}
      >
        Share Prescription
      </button>

      <Modal
        className=""
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            className="bg-gradient-to-t border-none from-green-200 to-sky-200 h-[80%] w-[80%] flex flex-col overflow-scroll  scroll-m-0 scroll-smooth"
          >
            <div className="flex  flex-col md:flex-row gap-6">
              <MyCarousel
                img6={img6}
                img7={img7}
                img8={img8}
                img9={img9}
                img10={img10}
                steps={steps}
              />

              {/* <AliceCarousel  /> */}
              <div className="self-center">
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
                    <FaCheckCircle className="inline text-[#0086B6] mr-2" />
                    Our doctors will review it and provide personalized
                    recommendations.
                  </li>
                </ol>
              </div>
            </div>
            <div className="m-auto justify-self-center py-4">
              <Link to={whatsappLink} target="_blank">
                <button class="group font-[Montserrat]  relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-normal text-white">
                  <FaWhatsapp className="inline h-8  tracking-wide" /> Share It
                  <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                </button>
              </Link>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
