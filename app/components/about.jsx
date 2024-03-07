"use client";
import Button from "./button";
import Active from "./active";
import { useEffect, useState } from "react";

const About = () => {
  const [host, setHost] = useState();
  useEffect(() => {
    setHost(window.location.host);
  }, []);

  const data = [
    {
      id: 0,
      numeric: "0%",
      title: "Komissiya",
      text: "Buyurtmalardan komissiya olmaydi, mutaxassislar faqat kerakli toifalarga kirish uchun 700 ming so'm to'laydilar.",
    },
    {
      id: 1,
      numeric: "0 so'm",
      title: "Saytimizda reklama",
      text: "Profilingizdan siz uchun eng yaxshi reklama bo'lib xizmat qiladigan mijozlar sharhlari bilan shaxsiy veb-sayt sifatida foydalaning",
    },
    {
      id: 2,
      numeric: "8 mlndan",
      title: "Daromad",
      text: "Obro' uchun ishlash pul olib kelishini tushungan mutaxassislar allaqachon 8 mln so'mdam daromadga erishgan.",
    },
  ];

  return (
    <div className="2xl:flex-row md:flex-col-reverse xl:flex-row flex-col md:gap-6 flex my-12 py-7 justify-between px-[7%]">
      <div className="2xl:w-[53%] xl:w-[55%]  grid md:grid-cols-2 gap-6 gap-y-12">
        {data.map((item) => (
          <div
            className="text-center rounded-xl px-8 py-6 min-h-[350px] flex flex-col justify-around bg-white"
            key={item.id}
          >
            <h2 className="font-bold text-3xl">
              <b className="block text-blue">{item.numeric}</b>
              {item.title}
            </h2>
            <p className="font-semibold text-gray my-10  ">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="2xl:w-[45%] xl:w-[45%] flex  justify-center items-end pb-12 rounded-xl md:px-16 px-6 2xl:h-[1003px] xl:h-[1000px] h-[80vh] md:h-[50vh] md:mt-0 mt-7 2xl:bg-left md:bg-top  bg-special">
        <div className="text-white md:w-4/5">
          <Active>Mutaxassislar uchun</Active>
          <h2 className="text-3xl font-bold my-4 md:w-[45%]">
            {host} saytida ishlash
          </h2>
          <p className="mb-4">
            {host} saytida ro&apos;yxatdan o&apos;ting va har kuni minglab
            buyurtmalar va yuzlab bo&apos;sh ish o&apos;rinlarini oling.
          </p>
          <div className="flex justify-center">
            <Button>Batafsil Ma&apos;lumot</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
