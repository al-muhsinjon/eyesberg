"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Promo from "./promo";
import usePromoModal from "@/hooks/use-promo";

const Service = () => {
  const promo = usePromoModal();
  const obj = [
    {
      id: 1,
      title: "Ariza qoldiring",
      description:
        "Batafsil tavsiflang, sizga qanday ish kerak buni bajaring tizim quyidagilarni Danladi siz mutaxassislarsiz",
    },
    {
      id: 2,
      title: "Taklifni qabul qiling",
      description:
        "Mutaxassislarning o'zlari siz bilan bog'lanadi, eng yaxshi dasturiy ta'minotni tanlang narxlar, anketalar sharhlar",
    },
    {
      id: 3,
      title: "Fikringizni qoldiring",
      description:
        "Bajarilgandan keyin ishlarni unutmang fikr qoldiring tanlangan mutaxassis",
    },
  ];

  return (
    <div className="px-[7%] my-12  grid 2xl:grid-cols-4 md:grid-cols-2 gap-6 ">
      <div className="px-4 py-6 ">
        <h2 className="font-bold text-3xl">
          Toshkentda eyesberg.uz da qanday mutaxassis topsa boladi?
        </h2>
        <p className="text-gray py-4">
          5 daqiqada eng yaxshi mutaxassisni toping!
        </p>
        <button
          onClick={promo.onOpen}
          className="flex cursor-pointer text-gray items-center gap-4 "
        >
          <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex justify-center items-center">
            <FaChevronRight />
          </div>
          <p>Promo videoni tomosha qiling</p>
        </button>
      </div>
      {obj.map((item) => (
        <div className="bg-white px-6 py-6" key={item.id}>
          <span className="text-blue font-bold my-4 block text-2xl">
            {item.id}
          </span>
          <h2 className="font-bold text-3xl">{item.title}</h2>
          <p className="mt-6 text-gray">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
