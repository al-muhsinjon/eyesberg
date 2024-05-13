"use client";

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { About, Button, Comments, InfoCard } from "@/components";
import { MdFilterList } from "react-icons/md";
import Image from "next/image";
import Filter from "@/components/filter";
import FilterButton from "@/components/filter-button";
import { useRouter } from "next/navigation";

const Ofitsian = () => {
  const router = useRouter();

  const datas = [
    {
      id: "1",
      name: "Mashxur",
      src: "/images/face-1.png",
      premium: true,
      comments: [{ id: "name", comment: "Judayam Yaxshi" }],
      description:
        "Mutaxassis o'z xizmatlari uchun narxlarni ko'rsatmadi. Buyurtmani to'ldirish narxini bilish uchun mutaxassis bilan bog'laning.",
    },
    {
      id: "2",
      name: "Mashxur",
      src: "/images/face-2.png",
      premium: false,
      comments: [
        { id: "name", comment: "Judayam Yaxshi" },
        { id: "name", comment: "Judayam Yomon" },
        { id: "name", comment: "Onasini emsin ishi pizdes zo'rakan" },
      ],
      description:
        "Mutaxassis o'z xizmatlari uchun narxlarni ko'rsatmadi. Buyurtmani to'ldirish narxini bilish uchun mutaxassis bilan bog'laning.",
    },
    {
      id: "3",
      name: "Mashxur",
      src: "/images/face-3.png",
      premium: true,
      comments: [{ id: "name", comment: "Judayam Yaxshi" }],
      description:
        "Mutaxassis o'z xizmatlari uchun narxlarni ko'rsatmadi. Buyurtmani to'ldirish narxini bilish uchun mutaxassis bilan bog'laning.",
    },
  ];
  return (
    <>
      <title>Ofitsiantlar</title>
      <main className="px-[7%] h-screen bg-hero   md:bg-[url(/images/hero.png)] bg-no-repeat bg-right ">
        <div className="2xl:w-[85%] xl:w-1/2  h-[80vh] flex flex-col py-24 justify-around p-4">
          <h1 className="md:text-6xl  text-3xl font-bold">
            Sharhlar va narxlar bilan Toshkentdagi tadbir uchun ofitsiantlar
          </h1>
          <p className="text-gray">
            So&apos;rov qoldiring yoki katalogdagi mutaxassisni tanlang
          </p>
          <div className="mt-4 flex gap-4 ">
            <Button onClick={() => router.push("/order")} padding>
              Buyurtma
            </Button>
          </div>
        </div>
      </main>
      <div>
        <div className="flex px-[7%] justify-between relative">
          <h2 className="font-bold text-3xl ">
            Mutaxassislar ma&apos;lumotnomasi
          </h2>
          <FilterButton />
        </div>
        <div className="grid md:grid-cols-3 py-6 px-[7%] gap-6">
          {datas.map((item) => (
            <InfoCard key={item.id} data={item} />
          ))}
        </div>
        <div className="px-[7%]">
          {datas.length > 6 && (
            <div className="w-full cursor-pointer h-12 border-2 text-blue border-blue rounded-xl flex justify-center items-center ">
              <h2 className="text-xl font-bold">Ko&apos;proq ko&apos;rish</h2>
            </div>
          )}
        </div>
      </div>
      <div className="px-[7%] py-12">
        <h2 className="text-3xl font-bold">
          Tadbir uchun ofitsiant - tug&apos;ulgan kun dasturxonidan fotosurat
        </h2>
        <div className="grid md:grid-cols-3 my-4 gap-6">
          <div className="relative rounded-xl h-80">
            <Image src="/images/dasturxon.png" alt="tozalikda" fill />
          </div>
          <div className="relative rounded-xl h-80">
            <Image src="/images/dasturxon-2.png" alt="tozalikda" fill />
          </div>

          <div className="bg-blue bg-opacity-50 h-72 rounded-xl p-9">
            <h2 className="text-blue font-bold text-3xl pb-8">
              So&apos;rov qoldiring va eng yaxshi mutaxassislar siz bilan
              bog&apos;lanadi!
            </h2>
            <Button padding>So&apos;rov yarating</Button>
          </div>
        </div>
      </div>
      <About />
      <Comments />
    </>
  );
};

export default Ofitsian;
