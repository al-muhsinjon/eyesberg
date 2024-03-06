import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { About, Button, Comments, Faq, Heading, ServiceCard } from "./components";

export default function Home() {
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
      id: "iqwidjeuf",
      src: "/images/plisoss.svg",
      text: "Tozalash va sanitariya",
      desc: "Balandlikda ishlash, Hududni tozalash",
    },
    {
      id: "djwudhwud",
      src: "/images/icon1.svg",
      text: "Bayramlar va tadbirlar",
      desc: "Cafe & Restaurant uchun ofitsiantlar ",
    },
  ];
  return (
    <>
      <main className="px-[7%] h-screen">
        <div className="md:w-1/2  h-[80vh] flex flex-col py-24 justify-around p-4">
          <h1 className="md:text-6xl w-[70%] text-3xl font-bold">
            <span className="text-blue">Toshkent</span>dagi eng yaxshi
            mutaxassislar
          </h1>
          <div className="relative h-auto md:h-14 md:flex mt-6 md:bg-white rounded-xl justify-between w-full">
            <IoSearchOutline className="absolute left-2 md:top-[30%] top-4  text-2xl" />
            <input
              type="text"
              className="md:bg-transparent md:border-none mb-4 h-14 bg-white w-full rounded-xl md:w-[65%] outline-none indent-8"
              placeholder="Mutaxasislarni qidirish"
            />
            <Button>Arizani Qoldirish</Button>
          </div>
          <div className="mt-4 flex gap-4 ">
            <button className="py-2 px-3 text-white font-bold bg-blue rounded-xl">
              Mutaxassis Topish
            </button>
            <button className="py-2 px-4 text-gray-500 border-gray-500 border-2 rounded-xl">
              Ish topish
            </button>
          </div>
        </div>
      </main>
      <div className="px-[7%] my-12  grid md:grid-cols-4 gap-6 ">
        <div className="px-4 py-6 ">
          <h2 className="font-bold text-3xl">
            Toshkentda eyesberg.uz da qanday mutaxassis topsa boladi?
          </h2>
          <p className="text-gray py-4">
            5 daqiqada eng yaxshi mutaxassisni toping!
          </p>
          <Link href="/" className="flex text-gray items-center gap-4 ">
            <button className="w-12 h-12 rounded-full border-2 border-gray-400 flex justify-center items-center">
              <FaChevronRight />
            </button>
            <p>Promo videoni tomosha qiling</p>
          </Link>
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
      <div className="px-[7%] my-12">
        <Heading >
          Toshkent da toifalar bo&apos;yicha xizmatlar
        </Heading>
        <div className="grid md:grid-cols-3 gap-12 md:h-80 mt-12 ">
          {datas.map((data) => (
            <ServiceCard key={data.id} data={data} />
          ))}
          <div className="bg-[#D6EAFF] rounded-xl p-6 flex justify-around text-blue font-bold flex-col">
            <h2 className="text-3xl">
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
