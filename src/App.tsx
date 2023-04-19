import React, { useEffect, useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import data from "./assets/crypto.json";
import User from "./assets/Group.svg";
import Mark from "./assets/heart-circle.png";
import Recycle from "./assets/Recycle.png";
import Vector from "./assets/Frame 3456.svg";
import Close from "./assets/close-circle.svg";

interface crpt {
  key: number;
  name: string;
  image: string;
}

function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(0);
  const [component1, setComponent1] = useState<crpt>();
  const [component2, setComponent2] = useState<crpt>();

  useEffect(() => {}, [component1, component2]);

  const next = () => {
    if (formNo === 0) {
      setFormNo(formArray[0]);
    } else if (formNo === 1 && component1) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && component2) {
      setFormNo(formNo + 1);
    } else {
      alert("You have not filled the details correctly");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };

  return (
    <section className="w-screen flex h-screen items-center justify-center bg-[#14172B]">
      {formNo === 0 && (
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
              In this lot multiple people will bet against you. The condition
              for the lot to start is both sides should have equal funds.
            </p>
          </div>
          <button
            onClick={next}
            className="mx-6 text-center bg-gradient-to-b from-[#9E44FF] to-[#543EFF] font-jamjuree font-bold text-base w-[550px] rounded-xl py-1"
          >
            Create Lot
          </button>
        </div>
      )}
      {formNo === 1 && (
        <div className="Box pb-5 text-white rounded-2xl px-6 font-jamjuree flex-col space-y-3 pt-5 w-[598px]">
          <div className="flex flex-row justify-between">
            <h1 className="font-jamjuree font-bold text-base">
              Multi-user Lot
            </h1>
            <img src={Close} alt="" />
          </div>
          <div className="flex  justify-between items-center">
            {formArray.map((v, i) => (
              <>
                <div
                  className={`w-[35px] my-3 text-white rounded-full ${
                    formNo - 1 === i
                      ? "p-1.5 bg-gradient-to-b from-[#9E44FF] to-[#543EFF]"
                      : formNo - 1 === i ||
                        formNo - 1 === i + 1 ||
                        formNo === formArray.length
                      ? "bg-[#6F9246] p-1.5"
                      : "bg-[#14172B] p-0.5"
                  } flex justify-center items-center`}
                >
                  {v}
                </div>
                {i !== formArray.length - 1 && (
                  <div className="w-[240px] h-[12px] bg-white opacity-5"></div>
                )}
              </>
            ))}
          </div>
          <p className="mx-auto text-center font-bold opacity-90">
            Choose your Asset
          </p>
          <div className="bg-gradient-to-b from-[#9E44FF] to-[#543EFF] p-[1px] rounded-xl">
            <input
              placeholder="Search Token eg. ETH, Gold etc"
              className="rounded-xl placeholder:opacity-40 bg-[#14172B] w-[548.5px] text-sm py-2 px-2"
            />
          </div>
          <div className="flex flex-wrap space-x-[40px] text-base pt-3 text-[#56565A] space-y-5 font-jamjuree font-semibold items-center justify-center">
            <p className="text-white bg-gradient-to-b text-base from-[#9E44FF] to-[#543EFF] py-1 px-6 opacity-70 rounded-xl">
              Crypto
            </p>
            <p>Indexes</p>
            <p>Stocks</p>
            <p>Commodities</p>
            <p>Forex</p>
          </div>
          <div className="flex flex-row space-x-7 -ml-5 space-y-3 flex-wrap  justify-center items-center">
            {data.map((crypto) => (
              <button
                key={crypto.key}
                onClick={() => {
                  setComponent1(crypto);
                }}
                className="flex flex-col space-y-1 border-2 border-[#626A881A] focus:bg-gradient-to-b focus:from-[#9E44FF40] focus:to-[#543EFF40] focus:bg-opacity-25 rounded-md px-2 py-2"
              >
                <img
                  src={crypto.image}
                  height={30}
                  width={30}
                  className="rounded-full mx-auto"
                />
                <p className="text-white text-sm font-jamjuree font-bold opacity-75">
                  {crypto.name}
                </p>
              </button>
            ))}
          </div>
          <div className="pt-5">
            <button
              onClick={next}
              className="w-[95%] ml-5 rounded-3xl py-1 font-semibold font-jamjuree bg-gradient-to-b item from-[#9E44FF] to-[#543EFF]"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {formNo === 2 && (
        <div className="Box pb-5 text-white rounded-2xl px-6 font-jamjuree flex-col space-y-3 pt-5 w-[598px]">
          <div className="flex flex-row justify-between">
            <h1 className="font-jamjuree font-bold text-base">
              Multi-user Lot
            </h1>
            <img src={Close} alt="" />
          </div>
          <div className="flex  justify-between items-center">
            {formArray.map((v, i) => (
              <>
                <div
                  className={`w-[35px] my-3 text-white rounded-full ${
                    formNo - 1 === i
                      ? "p-1.5 bg-gradient-to-b from-[#9E44FF] to-[#543EFF]"
                      : formNo - 1 === i ||
                        formNo - 1 === i + 1 ||
                        formNo === formArray.length
                      ? "bg-[#6F9246] p-1.5"
                      : "bg-[#14172B] p-0.5"
                  } flex justify-center items-center`}
                >
                  {v}
                </div>
                {i !== formArray.length - 1 && (
                  <div className="w-[240px] h-[12px] bg-white opacity-5"></div>
                )}
              </>
            ))}
          </div>
          <p className="mx-auto text-center font-bold opacity-90">
            Choose your Asset
          </p>
          <div className="bg-gradient-to-b from-[#9E44FF] to-[#543EFF] p-[1px] rounded-xl">
            <input
              placeholder="Search Token eg. ETH, Gold etc"
              className="rounded-xl placeholder:opacity-40 bg-[#14172B] w-[548.5px] text-sm py-2 px-2"
            />
          </div>
          <div className="flex flex-wrap space-x-[40px] text-base pt-3 text-[#56565A] space-y-5 font-jamjuree font-semibold items-center justify-center">
            <p className="text-white bg-gradient-to-b text-base from-[#9E44FF] to-[#543EFF] py-1 px-6 opacity-70 rounded-xl">
              Crypto
            </p>
            <p>Indexes</p>
            <p>Stocks</p>
            <p>Commodities</p>
            <p>Forex</p>
          </div>
          <div className="flex flex-row space-x-7 -ml-5 space-y-3 flex-wrap  justify-center items-center">
            {data.map((crypto) => (
              <button
                key={crypto.key}
                onClick={() => {
                  setComponent2(crypto);
                  console.log(component2);
                }}
                className="flex flex-col space-y-1 border-2 border-[#626A881A] focus:bg-gradient-to-b focus:from-[#9E44FF40] focus:to-[#543EFF40] focus:bg-opacity-25 rounded-md px-2 py-2"
              >
                <img
                  src={crypto.image}
                  height={30}
                  width={30}
                  className="rounded-full mx-auto"
                />
                <p className="text-white text-sm font-jamjuree font-bold opacity-75">
                  {crypto.name}
                </p>
              </button>
            ))}
          </div>
          <div className="pt-8">
            <button
              onClick={pre}
              className="w-[45%] ml-5 rounded-3xl py-1 font-semibold font-jamjuree bg-transparent border-white border-[1px]"
            >
              Back
            </button>

            <button
              onClick={next}
              className="w-[45%] ml-5 rounded-3xl py-1 font-semibold font-jamjuree bg-gradient-to-b item from-[#9E44FF] to-[#543EFF]"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {formNo === 3 && (
        <div className="Box pb-5 text-white rounded-2xl px-6 font-jamjuree flex-col space-y-3 pt-5 w-[598px]">
          <div className="flex flex-row justify-between">
            <h1 className="font-jamjuree font-bold text-base">
              Multi-user Lot
            </h1>
            <img src={Close} alt="" />
          </div>
          <div className="flex  justify-between items-center">
            {formArray.map((v, i) => (
              <>
                <div
                  className={`w-[35px] my-3 text-white rounded-full ${
                    formNo - 1 === i
                      ? "p-1.5 bg-gradient-to-b from-[#9E44FF] to-[#543EFF]"
                      : formNo - 1 === i ||
                        formNo - 1 === i + 1 ||
                        formNo === formArray.length
                      ? "bg-[#6F9246] p-1.5"
                      : "bg-[#14172B] p-0.5"
                  } flex justify-center items-center`}
                >
                  {v}
                </div>
                {i !== formArray.length - 1 && (
                  <div className="w-[240px] h-[12px] bg-white opacity-5"></div>
                )}
              </>
            ))}
          </div>
          <p className="mx-auto text-center font-bold opacity-90">
            Take Position
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col space-y-3 w-[200px] h-[144px] rounded-xl bg-[#14172B] items-center justify-center">
              <p className="font-jamjuree text-white opacity-70 font-bold">
                Your Asset
              </p>
              <img src={component1?.image} alt="" height={48} width={48} />
              <p className="font-jamjuree text-white opacity-70 font-bold">
                {component1?.name}
              </p>
            </div>
            <img src={Vector} alt="cs" />
            <div className="flex flex-col space-y-3 bg-[#14172B] w-[200px] h-[144px] rounded-xl items-center justify-center">
              <p className="font-jamjuree text-white opacity-70 font-bold">
                Your Asset
              </p>
              <img src={component2?.image} alt="" height={48} width={48} />
              <p className="font-jamjuree text-white opacity-70 font-bold">
                {component2?.name}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-jamjuree pl-3 font-bold text-sm opacity-70">
              Fund your Pool (Ethereum)
            </p>
            <input
              type="number"
              className="bg-[#14172B] rounded-3xl p-1.5 mt-3"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-jamjuree pl-3 font-bold text-sm opacity-70">
              Lot Starts On
            </p>
            <input
              type="date"
              className="bg-[#14172B] rounded-3xl opacity-60 p-1.5 mt-3"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-jamjuree pl-3 font-bold text-sm opacity-70">
              Lot Ends On
            </p>
            <input
              type="date"
              className="bg-[#14172B] rounded-3xl p-1.5 opacity-60 mt-3"
            />
          </div>
          <div className="pt-32">
            <button
              onClick={pre}
              className="w-[45%] ml-5 rounded-3xl py-2 font-semibold font-jamjuree bg-transparent border-white border-2"
            >
              Back
            </button>

            <button
              onClick={next}
              className="w-[45%] ml-5 rounded-3xl py-2 font-semibold font-jamjuree bg-gradient-to-b item from-[#9E44FF] to-[#543EFF]"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
