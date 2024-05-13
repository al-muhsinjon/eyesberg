"use client";
import React, { useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Languages from "./languages";
import Button from "./button";

const Navbar = () => {
  const [btnText, setBtnText] = useState("Kirish");
  const [isMobile, setIsMobile] = useState(false);
  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("token")) || ""
      : "";

  useEffect(() => {
    if (token) {
      setBtnText(token.full_name.split(" ")[0]);
    }
  }, [token]);

  useEffect(() => {
    const mobile = window.innerWidth;
    setIsMobile(mobile < 450);
  }, []);

  const router = useRouter();

  const handleClick = () => {
    if (token) {
      router.push("/profile");
      // Modal ochish uchun kerakli logika
    } else {
      router.push("?auth=login");
    }
  };

  return (
    <header className="flex justify-between px-[7%] items-center h-20 text-xl font-bold">
      <div className="flex gap-8">
        <Link href="/">
          <div className="relative md:w-[197px] h-[42px] w-10">
            <Image
              src={isMobile ? "/images/mini-logo.svg" : "/images/logo.svg"}
              alt="logo"
              fill
            />
          </div>
        </Link>
        <b className="text-blue flex items-center gap-1">
          <IoLocation className="text-2xl" />
          <span>Toshkent</span>
        </b>
      </div>
      <div className="md:flex gap-4">
        <div className="md:flex hidden gap-4">
          <Languages />
        </div>
        <Button onClick={handleClick}>{btnText}</Button>
      </div>
    </header>
  );
};

export default Navbar;
