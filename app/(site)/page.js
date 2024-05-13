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
import MyAutocomplete from "@/components/auto-complete";

export default function Home() {
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
            <span className="text-blue">Toshkent</span>dagi eng yaxshi
            mutaxassislar
          </h1>
            <MyAutocomplete />
           
          <div className="mt-4 flex gap-4 ">
            <Link
              href="/"
              className="py-2 px-3 text-white font-bold bg-blue rounded-xl"
            >
              Mutaxassis Topish
            </Link>
            <Link
              href="/spec"
              className="py-2 px-4 text-gray-500 border-[#2993FF] border-2 rounded-xl"
            >
              Ish topish
            </Link>
          </div>
        </div>
      </main>
      <Service />
      {/* <div className="px-[7%] my-12  grid 2xl:grid-cols-4 md:grid-cols-2 gap-6 ">
        <div className="px-4 py-6 ">
          <h2 className="font-bold text-3xl">
            Toshkentda eyesberg.uz da qanday mutaxassis topsa boladi?
          </h2>
          <p className="text-gray py-4">
            5 daqiqada eng yaxshi mutaxassisni toping!
          </p>
          <button
            onClick={() => promoVideo()}
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
      </div> */}
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
