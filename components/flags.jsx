import Image from "next/image";
import React from "react";

const Flags = () => {
  return (
    <div className="flex justify-evenly my-4">
      <div className="relative">
        <Image
          src="/images/green_medal.png"
          alt="idhefe0"
          width={42}
          height={46}
        />
        <span className="absolute top-2 text-xl text-white left-4">5</span>
      </div>
      <div className="relative">
        <Image
          src="/images/gold_medal.png"
          alt="idhefe0"
          width={42}
          height={46}
        />
        <span className="absolute top-2 text-xl text-white left-4">5</span>
      </div>
      <div className="relative">
        <Image
          src="/images/blue_medal.png"
          alt="idhefe0"
          width={42}
          height={46}
        />
        <span className="absolute top-2 text-xl text-white left-4">5</span>
      </div>
    </div>
  );
};

export default Flags;
