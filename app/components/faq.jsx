import React from "react";
import Heading from "./heading-section";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="px-[7%]">
      <Heading>
        Toshkentdagi eyesberg.uz xizmati haqidagi savollarga javoblar
      </Heading>
      <div className="grid md:grid-cols-2 my-6 gap-6">
        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Nega eyesberg.uz mutaxassislari haqida sharh qoldirish kerak?
          </h2>
          <p className="text-gray my-6">
            Mutaxassislarning sharhlari ular bajaradigan ish sifatini
            yaxshilashga yordam beradi. Mutaxassislar tomonidan qo&apos;pol
            qoidabuzarliklar bo&apos;lsa, eyesberg.uz xizmati mutaxassisning
            profilini blokirovka qilishgacha bo&apos;lgan jarimalarni nazarda
            tutadi. Sharhlar, shuningdek, kelajakda sizga foydali
            bo&apos;ladigan yaxshi mutaxassislarning katta bazasini yaratishga
            yordam beradi
          </p>
        </div>
        {/* -------------------------------! DELETE !----------------------------------- */}
        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Mutaxassislik darajasi qanday?
          </h2>
          <p className="text-gray my-6">
            Mutaxassislarning sharhlari ular bajaradigan ish sifatini
            yaxshilashga yordam beradi. Mutaxassislar tomonidan qo&apos;pol
            qoidabuzarliklar bo&apos;lsa, eyesberg.uz xizmati mutaxassisning
            profilini blokirovka qilishgacha bo&apos;lgan jarimalarni nazarda
            tutadi. Sharhlar, shuningdek, kelajakda sizga foydali
            bo&apos;ladigan yaxshi mutaxassislarning katta bazasini yaratishga
            yordam beradi
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Buyurtmaga imkon qadar ko&apos;proq mutaxassislar javob berishini
            ta&apos;minlash uchun nima qilish kerak?
          </h2>
          <p className="text-gray my-6">
            Bu eyesberg.uz xizmatidagi mutaxassisning martaba bosqichidir. Yangi
            darajalarga erishilganda, mutaxassis martaba zinapoyasiga
            ko&apos;tariladi. Har bir daraja mutaxassisning ish sifati va
            professionalligini namoyish etadi. Daraja qanchalik baland bo&apos;lsa,
            yangi buyurtmalar olish ehtimoli shunchalik yuqori bo&apos;ladi
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Buyurtmaga imkon qadar ko&apos;proq mutaxassislar javob berishini
            ta&apos;minlash uchun nima qilish kerak?
          </h2>
          <p className="text-gray my-6">
            Buyurtmangiz haqidagi ma&apos;lumotlarni diqqat bilan
            to&apos;ldiring: - manzilni ko&apos;rsating - ishni yakunlash vaqti
            - ishning narxi - bajarilayotgan ishning fotosurati
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Yaxshi mutaxassisni qanday tanlash mumkin?
          </h2>
          <p className="text-gray my-6">
            Mutaxassisni tanlashda biz mutaxassisning profilini o&apos;rganishni
            tavsiya qilamiz. Mutaxassisning profilida uning darajasi, bajarilgan
            ish haqida fikr-mulohazalar va mumkin bo&apos;lgan buzilishlar
            ko&apos;rsatilgan. Ushbu ma&apos;lumot sizga mutaxassis sizga mos
            keladimi yoki yo&apos;qligini aniqlashga yordam beradi.
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Xizmatga qanday buyurtma berish mumkin?
          </h2>
          <p className="text-gray my-6">
            &quot;Buyurtma yaratish&quot; tugmasini bosing va bajarilishi kerak
            bo&apos;lgan ish turini tavsiflang. Bundan tashqari, kerakli xizmat
            bo&apos;limini tanlashingiz mumkin, unda siz
            to&apos;g&apos;ridan-to&apos;g&apos;ri mutaxassis bilan
            bog&apos;lanishingiz mumkin bo&apos;lgan mutaxassislar katalogini
            ko&apos;rsatadi
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Mutaxassislar buyurtmalarga qanchalik tez javob berishadi?
          </h2>
          <p className="text-gray my-6">
            Buyurtmangizga javob berish vaqti turli omillarga bog&apos;liq,
            masalan: nashr vaqti va ushbu xizmatdagi mavjud mutaxassislar soni.
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Xuddi shu raqamdan foydalangan holda mijoz va mutaxassis sifatida
            ro&apos;yxatdan o&apos;tishim mumkinmi?
          </h2>
          <p className="text-gray my-6">
            Ha, siz bitta raqamdan mijoz va mutaxassis sifatida ro&apos;yxatdan
            o&apos;tishingiz mumkin
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            Ish uchun kafolat nima?
          </h2>
          <p className="text-gray my-6">
            eyesberg.uz mutaxassislari yakka tartibdagi ishchilardir.
            Mutaxassislarning o&apos;zlari ishning bajarilishi uchun
            javobgardirlar. Buyurtmaga javob berayotganda, mutaxassis buyurtma
            uchun kafolat berishini ko&apos;rsatishi mumkin. Agar buyurtma yomon
            bajarilgan bo&apos;lsa, u ishni o&apos;z hisobidan tuzatishga
            majburdir, aks holda uning profili bloklanadi. Agar mijoz va
            mutaxassis o&apos;rtasida bahsli masalalar yuzaga kelsa,
            eyesberg.uz, o&apos;z navbatida, kelishmovchiliklarni hal qilish
            uchun barcha sa&apos;y-harakatlarni amalga oshiradi.
          </p>
        </div>

        <div className="md:p-12 p-6 2xl:max-h-[350px]  bg-white rounded-xl">
          <h2 className="font-bold md:text-2xl text-xl">
            eyesberg.uz pullikmi?
          </h2>
          <p className="text-gray my-6">
            Yo&apos;q, eyesberg.uz xizmatida ilova yaratish xizmati bepul
          </p>
        </div>

        <div className="md:p-12 p-6 flex bg-blue bg-opacity-30 justify-center items-center 2xl:max-h-[350px]   rounded-xl">
          <Link className="font-bold text-blue md:text-2xl text-xl" href="/">
            Barcha savollarga javoblar
          </Link>
        </div>

        {/* -------------------------------! DELETE !----------------------------------- */}
      </div>
    </div>
  );
};

export default Faq;
