import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex px-[7%] justify-between md:flex-row flex-col-reverse md:py-12 py-6 border-t">
      <div className="md:w-[300px]">
        <h2 className="text-gray font-bold">&copy; 2024 eyesberg.uz</h2>
        <p className="text-gray">
          Har qanday materiallardan foydalanganda eyesberg.uz saytiga havola
          kerak
        </p>
      </div>
      <div className="md:flex hidden md:w-1/2 justify-between font-bold leading-loose">
        <ul>
          <li>
            <Link href="/">Bo&apos;sh ish o&apos;rinlari</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Kontaktlar</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">Mutaxassisga aylaning</Link>
          </li>
          <li>
            <Link href="/">TSS</Link>
          </li>
          <li>
            <Link href="/">Foydalanish shartlari</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">Shaharni tanlang</Link>
          </li>
          <li>
            <Link href="/">Hisobga kiring</Link>
          </li>
        </ul>
      </div>
      <div className="leading-loose font-bold">
        <ul className="md:block flex mb-5  justify-between">
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Facebook</Link>
          </li>
          <li>
            <Link href="/">Telegram</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
