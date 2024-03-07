import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ data }) => {
  const { id, src, text, desc } = data;
  return (
    <Link
      href={id}
      className="bg-white rounded-xl hover:shadow-xl px-12 py-4 flex  justify-around  items-start flex-col"
    >
      <div className="flex md:flex-row relative flex-col justify-between md:gap-12 items-center">
        <Image src={src} alt="iw" width={100} height={100} />
        <h2 className="text-3xl xl:text-2xl font-bold ">{text}</h2>
      </div>
      <p className="text-gray my-4 xl:w-auto md:w-1/2">{desc}</p>
    </Link>
  );
};

export default ServiceCard;
