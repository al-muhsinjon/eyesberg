import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const AnnouncementIdPage = ({ params }) => {
  console.log(params.announcementId);
  return (
    <div className="flex px-[7%] py-20">
      <aside className=" my-6 w-[25%] text-center ">
        <div className="p-6 rounded-xl bg-sky-200 bg-opacity-50">
          <h2 className="mb-4 text-blue font-bold text-2xl">
            Mutaxassisni yaxshilari kerakmi?
          </h2>
          <Button padding>Buyurtma yaratish</Button>
        </div>
      </aside>
      <div className="px-6 my-6 w-[75%]">
        <h2 className="text-3xl text-black font-bold">{"Oyna Tozalash"}</h2>

        <div className="grid grid-cols-3 gap-6 w-full my-4">
          <div className="h-[200px] w-full relative">
            <Image
              alt="dnejcns"
              src="/images/panel03.jpg"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="h-[200px] w-full relative">
            <Image
              alt="dnejcns"
              src="/images/panel03.jpg"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <h3 className="text-xl opacity-80 font-bold ">
          {
            " Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s"
          }
        </h3>
        <p className="text-lg text-gray font-semibold my-4 ">{800} ming so&apos;m </p>
        <Button>Buyurtma yakunlash</Button>
      </div>
    </div>
  );
};

export default AnnouncementIdPage;
