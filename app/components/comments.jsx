import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading  from "./heading-section";

const Comments = () => {
  return (
    <div className="px-[7%] p-6">
      <Heading >
        eyesberg.uz xizmati haqida so&apos;nggi mijozlar sharhlari
      </Heading>
      <div className="grid md:grid-cols-4 gap-6 mt-6 ">
        <div className="text-center max-h-[370px] bg-white  px-20 rounded-xl py-16 flex flex-col gap-6 ">
          <h2 className="font-bold text-4xl">3758</h2>
          <b className="text-2xl">yaxshi sharhlar</b>
          <p className="text-gray">
            so&apos;nggi 12 oy ichida mijozlar tomonidan qoldirilgan
          </p>
        </div>

        <div className="bg-white p-4 px-8 flex flex-col min-h-[400px] justify-around rounded-xl">
          <div className="flex justify-between">
            <b className="flex gap-2">
              <Image
                alt="positive image"
                src="/images/positive_smile.png"
                width={24}
                height={24}
              />
              Yaxshi
            </b>
            <p className="font-semibold text-gray">18.02.2024</p>
          </div>
          <p className="py-4">
            Ofitsiant larni ishi juda yaxshi va tez Yaxshi mutaxassis.
          </p>
          <p className="mt-6">
            <span className="block">#Vaqtda </span>
            <span className="block">#Sozda ko'rinish </span>
            <span className="block">#Odobli muloqot </span>
            <span className="block">#Sifatli ish </span>
            <span className="block">#Yaxshi narx</span>
          </p>
          <Link
            className="text-blue font-semibold"
            href={"/"}
          >{`"Bayram va tadbirlar"`}</Link>
        </div>
{/* -------------------------! Delete !---------------------------------- */}
        <div className="bg-white p-4 px-8 flex flex-col min-h-[400px] justify-around rounded-xl">
          <div className="flex justify-between">
            <b className="flex gap-2">
              <Image
                alt="positive image"
                src="/images/positive_smile.png"
                width={24}
                height={24}
              />
              Yaxshi
            </b>
            <p className="font-semibold text-gray">19.02.2024</p>
          </div>
          <p className="py-4">
            Hududni juda toza va yaxshi tozalashgan va sifatli sizlarga ham buni
            tavsiya etaman.{" "}
          </p>
          <p className="mt-6">
            <span className="block">#Vaqtda </span>
            <span className="block">#Sozda ko'rinish </span>
            <span className="block">#Odobli muloqot </span>
            <span className="block">#Sifatli ish </span>
            <span className="block">#Yaxshi narx</span>
          </p>
          <Link
            className="text-blue font-semibold"
            href={"/"}
          >{`"tozalash va sanitariya"`}</Link>
        </div>

        <div className="bg-white p-4 px-8 flex flex-col min-h-[400px] justify-around rounded-xl">
          <div className="flex justify-between">
            <b className="flex gap-2">
              <Image
                alt="positive image"
                src="/images/positive_smile.png"
                width={24}
                height={24}
              />
              Yaxshi
            </b>
            <p className="font-semibold text-gray">18.02.2024</p>
          </div>
          <p className="py-4">
            Ofitsiant lar juda zor xizmat korsatishti yana olmoqchiman.
          </p>
          <p className="mt-6">
            <span className="block">#Toz ko'rinish</span>
            <span className="block">#Sifatli ish</span>
            <span className="block">#Yaxshi narx</span>
            <span className="block">#Muloyim muloqot</span>
          </p>
          <Link
            className="text-blue font-semibold"
            href={"/"}
          >{`"Bayram va tadbirlar"`}</Link>
        </div>
{/* ---------------------------! Delete !-------------------------------- */}

      </div>
    </div>
  );
};

export default Comments;
