import React from "react";
import User from "../assets/Group.svg";
import Mark from "../assets/heart-circle.png";
import Recycle from "../assets/Recycle.png";

function Welcome() {
  return (
    <div className="Box text-white rounded-2xl font-jamjuree flex-col space-y-7 w-[598px] h-[380px]">
      <div className="flex flex-row pt-6 px-6 justify-between">
        <div className=" bg-[#14172B] rounded-xl opacity-90 w-[130px] font-jamjuree font-bold py-2 px-4 ">
          Most Played
        </div>
        <img src={Mark} className="w-[34px]" />
      </div>
      <div className="flex flex-row px-6 justify-between">
        <img src={User} />
        <img src={Recycle} />
        <img src={User} />
      </div>
      <div className="flex flex-col font-jamjuree mx-auto w-[550px]">
        <h1 className="text-white font-bold opacity-90 text-lg">
          Multi-user Lot
        </h1>
        <p className="text-white opacity-50">
          In this lot multiple people will bet against you. The condition for
          the lot to start is both sides should have equal funds.
        </p>
      </div>
      <button className="mx-6 text-center bg-gradient-to-b from-[#9E44FF] to-[#543EFF] font-jamjuree font-bold text-base w-[550px] rounded-xl py-1">
        Create Lot
      </button>
    </div>
  );
}

export default Welcome;
