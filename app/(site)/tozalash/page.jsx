import React from "react";
import { Button, InfoCard } from "@/components";
import Image from "next/image";
import { datas } from "@/constants";
import FilterButton from "@/components/filter-button";

export const metadata = {
  title: "Farrosh",
};
const Tozalik = () => {
  return (
    <>
      <main className="px-[7%] h-screen bg-hero  md:bg-[url(/images/hero.png)] bg-no-repeat bg-right ">
        <div className="2xl:w-[85%] xl:w-1/2  h-[80vh] flex flex-col py-24 justify-around p-4">
          <h1 className="md:text-6xl  text-3xl font-bold">General tozalash </h1>
          <p className="text-gray md:w-[50%]">
            Bemalol o&apos;zi ishlaringiz bilan shug&apos;ullanib tozalashni
            Professionalga qo&apos;yib bering va buyurtma qining
          </p>
          <div className="mt-4 flex gap-4 ">
            <Button padding>Buyurtma</Button>
          </div>
        </div>
      </main>
      <div className="px-[7%]">
        <div className="flex justify-between relative">
          <h2 className="text-3xl font-bold">
            Professional tozalash - mutaxassislar Toshkent
          </h2>
          <FilterButton />
        </div>
        <div className="grid md:grid-cols-3 py-6  gap-6">
          {datas.map((item) => (
            <InfoCard key={item.id} data={item} />
          ))}
        </div>
        {datas.length > 6 && (
          <div className="w-full cursor-pointer h-12 border-2 text-blue border-blue rounded-xl flex justify-center items-center ">
            <h2 className="text-xl font-bold">Ko&apos;proq ko&apos;rish</h2>
          </div>
        )}
        <div className="grid relative -z-10 md:grid-cols-3 my-4 gap-8">
          <div className="flex justify-center p-6 items-center">
            <h2 className="font-bold text-3xl">
              Tozalash vaqtidagi fotosuratlar
            </h2>
          </div>
          <div className="relative z-10 rounded-xl overflow-hidden h-96">
            <Image
              className="object-fill"
              src="/images/tozalik-1.png"
              alt="tozalikda"
              fill
            />
          </div>
          <div className="relative rounded-xl h-96">
            <Image src="/images/tozalik-2.png" alt="tozalikda" fill />
          </div>
          <div className="relative z-10 rounded-xl h-96">
            <Image src="/images/tozalik-3.png" alt="tozalikda" fill />
          </div>
          <div className="relative z-10 rounded-xl h-96">
            <Image src="/images/tozalik-4.png" alt="tozalikda" fill />
          </div>
          <div className="relative z-10 rounded-xl h-96">
            <Image src="/images/tozalik-5.png" alt="tozalikda" fill />
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
    </>
  );
};

export default Tozalik;
