import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdStarRate } from "react-icons/md";

const InfoCard = ({ data }) => {
  const { id, name, src, premium, comments, description } = data;
  return (
    <Link
      href={`specialist/${id}`}
      className="py-4 bg-white shadow-md rounded-xl hover:shadow-xl"
    >
      <div className="border-b border-gray flex gap-2 py-4 px-6">
        <Image
          className="rounded-xl"
          src={src}
          alt={id}
          width={50}
          height={50}
        />
        <h3
          className={`font-bold ${premium ? "text-blue" : "text-black"} flex`}
        >
          {name}
          {premium && <MdStarRate size={12} />}
        </h3>
        <span className="text-gray">({comments.length} sharh)</span>
      </div>
      <p className="p-6 text-gray">{description}</p>
    </Link>
  );
};

export default InfoCard;
