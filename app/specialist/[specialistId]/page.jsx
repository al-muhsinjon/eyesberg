"use client";
import { Button, Flags } from "@/components";
import { datas } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";
import "./style.css";

const SpecialistId = ({ params }) => {
  //   console.log(params);
  //   const [specilaist, setSpecialist] = useState();

  const data = datas.filter((data) => data.id === params.specialistId);

  //   return <div>Bunday joy yo'q</div>;
  // }

  const { src, comments, description, id, name, premium } = data[0];

  return (
    <div className="flex px-[7%] py-20">
      <aside className="w-96 my-6 text-center">
        <div className="bg-white rounded-xl py-14">
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
          <Button padding className="">
            Qo&apos;ng&apos;iroq qiling
          </Button>
        </div>
        <div className="p-6 rounded-xl bg-sky-200 bg-opacity-50 mt-6">
          <h2 className="mb-4 text-blue font-bold text-2xl">
            Yaxshilari kerak mutaxassislar?
          </h2>
          <Button padding>So&apos;rov yaratish</Button>
        </div>
      </aside>
      <div className="px-6 my-6">
        <h2 className="text-2xl font-bold text-gray">Men Haqimda</h2>
        <p className="my-6 p-9 bg-white rounded-xl">{description}</p>
        <h2 className="text-xl font-semibold text-gray my-4">
          Xizmatlar va narxlar (6)
        </h2>
        <h2 className="text-xl font-semibold text-gray py-6">
          Mijozlarning sharhlari (2)
        </h2>

        <div>
          <button className="rounded-xl py-6 px-7 bg-white">
            <div className="relative  w-12 h-12">
              <Image src="/images/positive_review.png" alt="" fill />
            </div>
            <h2 className="text-center text-2xl font-semibold text-neutral-900 text-3xl">
              1
            </h2>
          </button>

          <button className="rounded-xl py-6 px-7 bg-white mx-8">
            <div className="relative w-12 h-12">
              <Image src="/images/neutral_review.png" alt="" fill />
            </div>
            <h2 className="text-center text-2xl font-semibold text-neutral-900 text-3xl">
              0
            </h2>
          </button>


          <button className="rounded-xl py-6 px-7 bg-white relative">
            <div className="relative w-12 h-12">
              <Image src="/images/negative_review.png" alt="" fill />
            </div>
            <h2 className="text-center text-2xl font-semibold text-neutral-900 text-3xl">
              0
            </h2>
          </button>
        </div>
        <button className="rounded-xl py-4 px-14 bg-transparent mt-6 border-2 border-sky-600">
          <h2 className="text-2xl font-semibold px-3 text-sky-600">
            Hammasini ko'rish (2)
          </h2>
        </button>
        <div className="mt-3">
          <h2 className="text-lg font-semibold text-gray">
            90 KUN ICHIDA <br /> SHIKOYATLAR (0)
          </h2>
        </div>
        <div className="flex gap-5 mt-3">
          <div className="border-2 rounded-md  border-green-600 pr-10 px-2">
            <h3 className="text-lg font-semibold text-green-500">
              ISHNING PAST SIFATI - 0
            </h3>
          </div>
          <div className="border-2 rounded-md  border-green-600 pr-10 px-2">
            <h3 className="text-lg font-semibold text-green-500">KECH - 0</h3>
          </div>
          <div className="border-2 rounded-md  border-green-600 pr-10 px-2">
            <h3 className="text-lg font-semibold text-green-500">
              NOPOK KO'RINDI - 0
            </h3>
          </div>
        </div>

        <div className="mt-11">
          <h2 className="text-xl font-bold text-gray">RASMLAR (0)</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div class="flex flex-col">
            <Image
              class="w-full h-auto"
              src="/images/image1.jpg"
              alt="tozalikda"
              width={400}
              height={400}
            />
            <h4 class="mt-2 font-semibold">Sharhlardan olingan fotosuratlar</h4>
            <p class="mt-1">0</p>
          </div>
          <div class="flex flex-col">
            <Image
              class="w-full h-auto"
              src="/images/image2.jpg"
              alt="tozalikda"
              width={400}
              height={400}
            />
            <h4 class="mt-2 font-semibold">Sharhlardan olingan fotosuratlar</h4>
            <p class="mt-1">0</p>
          </div>
          <div class="flex flex-col">
            <Image
              class="w-full h-auto"
              src="/images/image3.jpg"
              alt="tozalikda"
              width={400}
              height={400}
            />
            <h4 class="mt-2 font-semibold">Sharhlardan olingan fotosuratlar</h4>
            <p class="mt-1">0</p>
          </div>
        </div>

        <div className="mt-7">
          <h2 className="text-lg font-semibold text-gray">
            MENING <br /> HAMKORLARIM (0)
          </h2>
        </div>

        <div className="mt-7">
          <h2 className="text-lg font-semibold text-gray">ISH TAJRIBASI (0)</h2>
          <div className="bg-white p-10 mt-5 rounded-xl">
            <h2>
              Mutaxassis bu blokni hali tugatmagan. Siz uni anonim tarzda
              tavsiya qilishingiz mumkin "To'ldirishni tavsiya etaman" tugmasini
              bosish orqali ushbu ma'lumotni shaklda ko'rsating
            </h2>
          </div>
        </div>

        <div className="mt-11">
          <h2 className="text-lg font-semibold text-gray">Ta'lim va kurslar (0)</h2>
          <div className="bg-white p-10 mt-5 rounded-xl">
            <h2>
              Mutaxassis bu blokni hali tugatmagan. Siz uni anonim tarzda
              tavsiya qilishingiz mumkin "To'ldirishni tavsiya etaman" tugmasini
              bosish orqali ushbu ma'lumotni shaklda ko'rsating
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistId;
