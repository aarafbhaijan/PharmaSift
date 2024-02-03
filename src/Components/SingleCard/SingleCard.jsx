import React, { useState } from "react";

const SingleCard = ({ data, compare}) => {
  console.log(compare.buyTo);
  return (
    <div className={data.buy? `cursor-pointer hover:translate-x-2 hover:scale-[1.02]  transition relative my-6  flex w-500px  max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-[#0086B6] to-[#6cc6e5] bg-clip-border p-8 text-white shadow-md shadow-pink-500/40`:` cursor-pointer hover:scale-[1.02] hover:translate-x-[-0.5rem] transition relative my-6  flex w-500px  max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-[#f55151] to-[#f59c69] bg-clip-border p-8 text-white shadow-md shadow-pink-500/40 `}>
      <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
        <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
          Pharmacy Name: {""}{" "}
          <span className="font-bold text-xl text-[#BAEEE9]">{data.pharmacyName}</span>
        </p>
        <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
          <span className="">{data.price}</span>
          <span class="mt-2 text-4xl">rs</span>
        </h1>
      </div>
      <div class="p-0">
        <ul class="flex flex-col gap-4">
          <li class="flex items-center gap-4">
            <span class="rounded-full border border-white/20 bg-white/20 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              <span className="font-bold text-[#BAEEE9]">Quantity:{""}</span>
              {data.quantity}
            </p>
          </li>
          <li class="flex items-center gap-4">
            <span class="rounded-full border border-white/20 bg-white/20 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            {data.priscription ? (
              <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                <span className="font-bold text-[#BAEEE9]">Priscription: </span>{" "}
                Needed
              </p>
            ) : (
              <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                <span className="font-bold text-[#BAEEE9]">Priscription: </span>{" "}
                Not Needed
              </p>
            )}
          </li>
          <li class="flex items-center gap-4">
            <span class="rounded-full border border-white/20 bg-white/20 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              <span className="font-bold text-[#BAEEE9]">Drug-form: </span>
              {data.type}
            </p>
          </li>
          <li class="flex items-center gap-4">
            <span class="rounded-full border border-white/20 bg-white/20 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            {data.buy ? (
              <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                <span className="font-bold text-[#BAEEE9]">Quality: {""}</span>{" "}
                A Government Generated Product...
              </p>
            ) : (
              <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                <span className="font-bold text-[#BAEEE9]">Quality: {""}</span>{" "}
                A Third party Distributed Product...
              </p>
            )}
          </li>
          <li class="flex items-center gap-4">
            {data.buy && (
              <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                Save Upto{" "}
                <span className="font-bold text-xl text-[#BAEEE9]">60%</span> on
                this Purchase
              </p>
            )}
          </li>
        </ul>
      </div>
      <div class="mt-12 p-0">
        {data.buy && (
          <button
            class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-[#0086B6]  shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleCard;
