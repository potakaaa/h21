import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isLove, setIsLove] = useState(false);
  const [isNo, setIsNo] = useState(false);
  const mess = "I love you more juju see you later <3";
  const mess2 = "Yes you can't press no :))";

  return (
    <div className="size-full flex justify-center items-center h-screen bg-gradient-to-t to-light-violet via-dark-violet from-pink">
      <div className="body-container flex flex-col justify-center gap-5 items-center">
        <button
          className="bg-gradient-to-r from-peach to-pink p-3 text-2xl rounded-full shadow-lg px-8 text-[#1A1A1D] active:bg-peach hover:bg-peach flex items-center justify-center duration-300 w-[13rem] "
          onClick={() => {
            setIsTouched(true);
          }}
        >
          Press me
        </button>

        {isTouched && (
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-shadow-sm shadow-black duration-300 text-center">
              Happy 21st Monthsarry Babe!
            </h1>
            <p className=" mt-5 text-center text-shadow-sm shadow-[#1A1A1D]">
              Do you still love me?
            </p>
            <div className="flex justify-center items-center gap-3">
              <button
                className="bg-gradient-to-r from-peach to-pink p-2 px-8 rounded-full shadow-sm text-[#1A1A1D]"
                onClick={() => {
                  setIsLove(true);
                  setTimeout(() => {
                    setIsNo(true);
                    console.log("State set to true!");
                  }, 4500);
                }}
              >
                Yes
              </button>
              <button
                className="bg-gradient-to-r from-peach to-pink p-2 px-8 rounded-full shadow-sm text-[#1A1A1D]"
                disabled
              >
                No
              </button>
            </div>
          </div>
        )}
        {isLove && (
          <div className="mt-5">
            <p className="text-shadow-sm shadow-[#1A1A1D]">{mess}</p>
          </div>
        )}
        {isNo && (
          <div className="mt-5">
            <p className="text-shadow-sm shadow-[#1A1A1D]">{mess2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
