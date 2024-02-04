import React from "react";
import logo from "../../pngLogo.png";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font w-screen  border-2 bg-[white] shadow-xl">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
        <div
          onClick={() => window.scroll(0, 0)}
          class="cursor-pointer w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10"
        >
          <a class="flex title-font font-medium items-center md:justify-start justify-center ">
            <img src={logo} alt="" className="w-14" />
            <span class="ml-3 text-xl">PHARMASIFT</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">
            A Solution that can change the Medical Feild
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class=" text-[#0086B6] title-font font-medium tracking-widest text-sm mb-3">
              Medicines
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-[#0086B6] tracking-widest text-sm mb-3">
              Consult with our Doctors
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            Copyright ©2024: Designed By
            <a
              href="https://www.linkedin.com/in/aaraf-ali-277588297/"
              rel="noopener noreferrer"
              class="text-[#0086B6] ml-1"
              target="_blank"
            >
              @AarafAli
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              class="ml-3  text-gray-500 hover:text-[#0086B6] transition"
              href="https://github.com/aarafbhaijan"
              target="_blank"
            >
              <FaGithub className="scale-150" />
            </a>
            <a
              class="ml-3 text-gray-500 hover:text-[#0086B6] transition"
              target="_blank"
              href="https://www.instagram.com/aaraf_aly/"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 hover:text-[#0086B6] transition"
              href="https://www.linkedin.com/in/aaraf-ali-277588297/"
              target="_black"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5 "
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
