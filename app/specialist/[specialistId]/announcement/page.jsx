"use client";
import { Button, Flags } from "@/components";
import FilterDisabled from "@/components/filter-disabled";
import { datas } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdStarRate } from "react-icons/md";

const AnnouncementPage = ({ params }) => {
  const data = datas.filter((data) => data.id === params.specialistId);
  const pathname = usePathname();
  const num = +pathname.split("/specialist/")[1];
  const navigate = useRouter();

  //   return <div>Bunday joy yo'q</div>;
  // }

  const { src, comments, description, id, name, premium } = data[0];

  const handleClick = () => {
    navigate.push("/order?worker_id=" + id);
  };

  return (
    <>
      <div className="flex px-[7%] py-20">
        {/* <aside className="w-80 my-6 text-center">
          <div className="bg-white rounded-xl py-14">
            <div className="relative mx-auto w-60 h-60 rounded-full p-2 overflow-hidden">
              <Image
                src={src || "/images/user-icon.png"}
                className="object-cover aspect-square"
                alt="User"
                fill
              />
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
            <Button onClick={handleClick} padding className="">
              Qo&apos;ng&apos;iroq qiling
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-sky-200 bg-opacity-50 mt-6">
            <h2 className="mb-4 text-blue font-bold text-2xl">Xabarnoma</h2>
            <p className="my-4 text-blue opacity-70 font-semibold">
              Xabarnomalarni tekshirib turish esingizdan chiqmasin
            </p>

            <Button onClick={() => navigate.push(`notification`)} padding>
              Ko&apos;rish
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-sky-200 bg-opacity-50 mt-6">
            <h2 className="mb-4 text-blue font-bold text-2xl">
              Yaxshilari kerak mutaxassislar?
            </h2>
            <Button padding>So&apos;rov yaratish</Button>
          </div>
          <div className="w-full h-80  mt-6">
            <FilterDisabled />
          </div>
        </aside> */}
        <aside className=" my-6 w-[25%] text-center ">
          <div className="p-6 rounded-xl bg-sky-200 bg-opacity-50">
            <h2 className="mb-4 text-blue font-bold text-2xl">
              Mutaxassisni yaxshilari kerakmi?
            </h2>
            <Button padding>Buyurtma yaratish</Button>
          </div>
        </aside>
        <div className="px-6 my-6 w-[75%]">
          <h2 className="text-3xl text-black font-bold">
            Mening e&apos;lonlarim
          </h2>
          <p className="text-2xl font-semibold text-gray my-2">
            Javoblarni ko'rish uchun ilova ustiga bosing
          </p>

          <div className="flex justify-between gap-8 ">
            <Link href={"announcement/assa"} className="w-1/2  rounded-lg">
                <div className=" h-[400px] relative">
                  <Image
                    alt="dnejcns"
                    src="/images/panel03.jpg"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              <h2 className="font-bold pl-1 text-xl">Oyna tozalash</h2>
              <p className="pl-1 font-semibold text-gray">800ming so&apos;m</p>
            </Link>
            {/* ------------------------------------ */}
            <Link href={"announcement/xassa"} className="w-1/2 rounded-lg">
              <div className=" h-[400px] relative">
                <Image
                  alt="dnejcns"
                  src="/images/panel03.jpg"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="font-bold pl-1 text-xl">Xonalarni tozalash</h2>
              <p className="pl-1 font-semibold text-gray">500ming so&apos;m</p>
            </Link>
            {/* ------------------------------------ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementPage;
