"use client";
import React from "react";
import { MdFilterList } from "react-icons/md";
import Filter from "./filter";
import { useState } from "react";

const FilterButton = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        onClick={() => setActive(!active)}
        className="flex gap-4 items-center z-[500]"
      >
        <MdFilterList />
        Filtr
      </button>
      {active && (
        <div className="md:w-[480px] md:h-[400px] px-1 z-[1000] rounded-lg bg-blue overflow-hidden absolute md:mx-[7%] md:top-9 top-24 shadow-2xl right-0">
          <Filter />
        </div>
      )}
    </>
  );
};

export default FilterButton;
