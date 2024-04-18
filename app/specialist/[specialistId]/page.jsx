"use client";
import { Button, Flags } from "@/components";
import { datas } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";

const SpecialistId = ({ params }) => {
  //   console.log(params);
  //   const [specilaist, setSpecialist] = useState();

  const data = datas.filter((data) => data.id === params.specialistId);

  //   return <div>Bunday joy yo'q</div>;
  // }

  const { src, comments, description, id, name, premium } = data[0];

  return (
    <div className="flex px-[7%]">
      <aside className="w-96 my-6 text-center">
        <div className="bg-white rounded-xl py-6">
          <div className="relative mx-auto w-60 h-60 rounded-full p-2 overflow-hidden">
            <Image src={src || "/images/user-icon.png"} alt="User" fill />
          </div>
          <h2
            className={`text-2xl font-bold flex mt-4 justify-center ${
              premium ? "text-blue" : "text-black"
            }`}
          >
            {name}
            {premium && <MdStarRate size={12} />}
          </h2>
          <p className="my-4 text-gray">20 yil —— Naimida 0 yil 1 oy.</p>
          <Flags />
          <Button padding>Qo&apos;ng&apos;iroq qiling</Button>
        </div>
        <div className="p-6 rounded-xl bg-blue bg-opacity-50 mt-4">
          <h2 className="mb-4 text-blue font-bold text-2xl">
            Yaxshilari kerak mutaxassislar?
          </h2>
          <Button padding>So&apos;rov yaratish</Button>
        </div>
      </aside>
      <div className="px-6 my-6">
        <h2 className="text-2xl font-bold text-gray">Men Haqimda</h2>
        <p className="my-6 p-6 bg-white rounded-xl">{description}</p>
        <h2 className="text-2xl font-bold text-gray my-6">
          Xizmatlar va narxlar (6)
        </h2>
        <h2 className="text-2xl font-bold text-gray">
          Mijozlarning sharhlari (2)
        </h2>
        <div>
          <button className="">
            <Image
              src="/images/positive_review.png"
              alt=""
              width={400}
              height={400}
            />
          </button>
          <button className="">
            <Image
              src="/images/negative_review.png"
              alt=""
              width={400}
              height={400}
            />
          </button>
          <button className="">
            <Image
              src="/images/neutral_review.png"
              alt=""
              width={400}
              height={400}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialistId;
