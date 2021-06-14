import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl font-black">Dude</h1>
        <h6 className=" lg:text-3xl md:text-2xl sm:text-1xl italic mb-14">The better to connect</h6>
        <Link
          className="py-6 px-10 bg-blue-900 rounded-full text-white font-black
      hover:bg-blue-800 transition duration-300 ease-in-out flex items-center animate-bounce
      "
          to="/login"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Let's start
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
