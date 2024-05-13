"use client";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import {
  About,
  Button,
  Comments,
  Faq,
  Heading,
  ServiceCard,
} from "@/components";
import Service from "@/components/service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Spec() {
  const router = useRouter();

  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("token")) || ""
      : "";

  const createAcc = () => {
    if (token) {
      router.push("/profile");
    } else {
      router.push("?auth=login");
    }
  };

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

  const datas = [
    {
      id: "tozalash",
      src: "/images/plisoss.svg",
      text: "Tozalash va sanitariya",
      desc: "Balandlikda ishlash, Hududni tozalash",
    },
    {
      id: "ofitsiant",
      src: "/images/icon1.svg",
      text: "Bayramlar va tadbirlar",
      desc: "Cafe & Restaurant uchun ofitsiantlar ",
    },
  ];
  return (
    <>
      <main className="px-[7%] h-screen bg-hero  md:bg-[url(/images/hero.png)] bg-no-repeat bg-right ">
        <div className="2xl:w-1/2 xl:w-1/2  h-[80vh] flex flex-col py-24 justify-around p-4">
          <h1 className="md:text-6xl w-[70%] text-3xl font-bold">
            <span className="text-blue">Toshkent</span>dan yaxshi ish toping
          </h1>
          <Button onClick={createAcc}>Account Yaratish</Button>
          <div className="mt-4 flex gap-4 ">
            <Link
              href="/"
              className="py-2 px-3 border-[#2993FF] text-[#2993FF] hover:bg-[#2993FF] hover:text-white ease-in font-bold border-2  rounded-xl"
            >
              Mutaxassis Topish
            </Link>
            <Link
              href="/spec"
              className="py-2 px-4 hover:bg-white hover:text-blue hover:border-2 border-2 border-[#2993FF] text-white font-bold bg-blue rounded-xl"
            >
              Ish topish
            </Link>
          </div>
        </div>
      </main>
      <Service />

      <div className="px-[7%] my-12">
        <Heading>Toshkent da toifalar bo&apos;yicha xizmatlar</Heading>
        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 2xl:gap-12 gap-6 2xl:h-80 mt-12 ">
          {datas.map((data) => (
            <ServiceCard key={data.id} data={data} />
          ))}
          <div className="bg-[#D6EAFF] rounded-xl p-6 flex justify-around text-blue font-bold flex-col">
            <h2 className="text-3xl leading-normal">
              Qolgan Toifalar yaqin orada qo&apos;shiladi...
            </h2>
            <Button>Buyurtma yarating</Button>
          </div>
        </div>
      </div>
      <About />
      <Comments />
      <Faq />
    </>
  );
}
