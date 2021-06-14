import React from "react";
import Input from "../components/Input";

const LogIn = () => {
  return (
    <div style={{ height: "80vh" }} className="flex flex-col justify-center items-center">
      <div className="p-10 border-2 rounded-xl border-gray w-2/5 sm:w-300 shadow-2xl">
        <div className="mb-6">
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
        </div>
        <div className="flex justify-center items-center">
          <button
            title="LogIn"
            className="bg-indigo-900 text-white p-2 w-2/4 rounded-md active:bg-green-700 focus:outline-none focus transform motion-safe:hover:scale-110"
          >
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
