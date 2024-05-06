"use client";
import Image from "next/image";
import { useState } from "react";

const Filter = () => {
  // const rating = {
  //   halol: 3,
  //   rostguy: 4,
  //   sifat: 5,
  //   tezlik: 2,
  // };
  const [halol, setHalol] = useState(0);
  const [rostguy, setRostguy] = useState(0);
  const [sifat, setSifat] = useState(0);
  const [tezlik, setTezlik] = useState(0);
  return (
    <>
      {/* <div className="w-96 h-80 flex  justify-center items-center bg-blue-500">
        <div className="w-80 p-12 relative h-80 border rounded-full bg-white">
          <div className="w-full h-full p-12 border border-black rounded-full">
            <div className="w-full p-12 h-full border border-black rounded-full">
              <div className="w-full h-full border relative border-black flex justify-center items-center rounded-full">
                <div className="w-[120%] h-[120%] absolute z-[100] rounded-full  bg-red-500"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-opacity-45 bg-blue absolute top-0 left-0 rounded-full">
            <input
              type="range"
              value={mano}
              id="cowbell"
              name="cowbell"
              min="0"
              max="10"
              // value="90"
              onChange={(e) => setmano(e.target.value)}
              className="absolute top-[21%] left-[27%] w-[47%] -rotate-90"
            />
            <input
              type="range"
              className="absolute bottom-[21%] right-[27%] w-[47%] rotate-90"
              name=""
              id=""
              max="10"
              min="0"
              value={falsafa}
              onChange={(e) => setfalsafa(e.target.value)}
            />
            <input
              type="range"
              className="absolute top-[48%] right-0 w-[47%]"
              name=""
              max="10"
              min="0"
              value={halol}
              onChange={(e) => sethalol(e.target.value)}
              id=""
            />
            <input
              type="range"
              className="absolute top-[48%] lefy-0 w-[47%] rotate-180"
              name=""
              max="10"
              min="0"
              value={ishchan}
              onChange={(e) => setishchan(e.target.value)}
              id=""
            />
          </div>
        </div>
      </div> */}

      <div className="md:w-[461px] md:h-[400px] z-[100]  bg-opacity-90 relative rounded-lg flex justify-center items-center">
        <div className="absolute top-0 w-full h-full md:block hidden ">
          <p className="absolute top-0 w-full text-center">API</p>
          <p className="absolute top-10 w-full text-left">Architecture</p>
          <p className="absolute top-10 w-full text-end">Dart</p>
          <p className="absolute h-full flex items-center justify-end w-full text-start">
            Flutter
          </p>
          <p className="absolute  h-full flex items-center w-full ">Widgets</p>
          <p className="absolute bottom-10 w-full text-start">Git</p>
          <p className="absolute bottom-10 w-full text-end">Mobile</p>
          <p className="absolute bottom-0 w-full text-center">Android</p>
        </div>
        <div className="w-[22rem] h-[22rem] relative bg-white bg-opacity-80 rounded-full p-7">
          <div className="w-full p-7 h-full shadow-inner inset-0  rounded-full  border">
            <div className="w-full p-7 h-full rounded-full shadow-inner  border">
              <div className="w-full p-7 h-full shadow-inner rounded-full  border">
                <div className="w-full p-7 h-full rounded-full shadow-inner  border"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-full rounded-full bg-white absolute top-0 left-0 bg-opacity-20 ">
            <div className="w-14 h-14 top-[42%] left-[42%] z-[100] absolute bg-white rounded-full">
              <Image src="/images/mini-logo.svg" alt="" fill />
            </div>
            <div className="w-full flex justify-between items-center gap-12 h-6  top-[46.5%] absolute">
              <input
                min={0}
                max={5}
                type="range"
                value={halol}
                onChange={(e) => setHalol(e.target.value)}
                className="activeInput rotate-180 w-1/2"
              />
              <input
                min={0}
                max={5}
                type="range"
                className=" w-1/2 activeInput"
              />
            </div>
            <div className="w-full h-6  top-[46.5%] flex justify-between items-center gap-12 rotate-45 absolute">
              <input
                min={0}
                max={5}
                type="range"
                value={rostguy}
                onChange={(e) => setRostguy(e.target.value)}
                className="activeInput rotate-180 w-1/2"
              />
              <input
                min={0}
                max={5}
                type="range"
                className=" w-1/2 activeInput"
              />
            </div>
            <div className="w-full h-6  top-[46.5%] flex justify-between items-center gap-12 rotate-90 absolute">
              <input
                min={0}
                max={5}
                type="range"
                value={tezlik}
                onChange={(e) => setTezlik(e.target.value)}
                className="activeInput rotate-180 w-1/2"
              />
              <input
                min={0}
                max={5}
                type="range"
                className=" w-1/2 activeInput"
              />
            </div>
            <div className="w-full h-6  top-[46.5%] flex justify-between items-center gap-12 -rotate-45 absolute">
              <input
                min={0}
                max={5}
                type="range"
                value={sifat}
                onChange={(e) => setSifat(e.target.value)}
                className="activeInput rotate-180 w-1/2"
              />
              <input
                min={0}
                max={5}
                type="range"
                className=" w-1/2 activeInput"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
