import Image from "next/image";
import React from "react";

const FilterDisabled = () => {
  return (
    <div className="md:w-w-full md:h-full bg-blue bg-opacity-90 relative rounded-lg flex justify-center items-center">
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
      <div className="w-[15rem] h-[15rem] relative bg-white bg-opacity-80 rounded-full p-5">
        <div className="w-full p-5 h-full shadow-inner inset-0  rounded-full  border">
          <div className="w-full p-5 h-full rounded-full shadow-inner  border">
            <div className="w-full p-5 h-full shadow-inner rounded-full  border">
              <div className="w-full p-5 h-full rounded-full shadow-inner  border"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-full bg-white absolute top-0 left-0 bg-opacity-20 ">
          <div className="w-11 h-11 top-[41%] left-[41%] z-[100] absolute bg-white rounded-full">
            <Image src="/images/mini-logo.svg" alt="" fill />
          </div>
          <div className="w-full flex justify-between items-center gap-12 h-6  top-[46.5%] absolute">
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput rotate-180 w-1/2"
            />
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput  w-1/2"
            />
          </div>
          <div className="w-full h-6  top-[46.5%] flex justify-between items-center gap-12 rotate-45 absolute">
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput rotate-180 w-1/2"
            />
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput  w-1/2"
            />
          </div>
          <div className="w-full h-6  top-[46.5%] flex justify-between items-center gap-12 rotate-90 absolute">
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput rotate-180 w-1/2"
            />
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput  w-1/2"
            />
          </div>
          <div className="w-full h-6  top-[46.5%] flex justify-between items-center gap-12 -rotate-45 absolute">
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput rotate-180 w-1/2"
            />
            <input
              min={0}
              max={5}
              disabled
              type="range"
              className=" disabledInput  w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDisabled;
