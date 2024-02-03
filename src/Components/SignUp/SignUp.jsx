import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-[80vh]">
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-[#0086B6] w-full">
            <h1 class="mb-8 text-3xl text-center uppercase font-bold">
              Sign up
            </h1>
            <form>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                type="email"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </form>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-[white] bg-[#0086B6] hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4 text-black">
              By signing up, you agree to the{" "}
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service{" "}
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy{" "}
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <Link to={"/signin"}>
              <button
                class="middle none center mr-3 rounded-lg border border-[#0086B6] py-3 px-6 font-[Montserrat] text-xs font-bold uppercase text-[#0086B6] transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-6 "
                data-ripple-dark="true"
              >
                Sign In
              </button>
              .
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
