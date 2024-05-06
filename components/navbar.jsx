"use client";
import React, { useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";

import Languages from "./languages";

import Button from "./button";
// import { logoLaptop, logo } from "../images";
import Link from "next/link";
import Image from "next/image";
import useLoginModal from "@/hooks/use-loginmodal";

const Navbar = () => {
  const [screen, setScreen] = useState(true);
  useEffect(() => {
    const mobile = window.screen.width;
    if (mobile < 450) {
      setScreen(false);
    }
  }, []);
  const modal = useLoginModal();

  return (
    <header className="flex  justify-between px-[7%] items-center h-20 text-xl font-bold">
      <div className="flex  gap-8">
        <Link className="relative md:w-[197px] h-[42px] w-10" href="/">
          {screen ? (
            <Image src="/images/logo.svg" fill className=" " alt="logo" />
          ) : (
            <Image src="/images/mini-logo.svg" fill alt="logo" />
          )}
        </Link>
        <b className="text-blue  flex items-center gap-1">
          <IoLocation className="text-2xl" />
          <span>Toshkent</span>
        </b>
      </div>
      <div className="md:flex hidden gap-4">
        <Languages />
        <Button onClick={modal.onOpen}>Kirish</Button>
      </div>
    </header>
  );
};

export default Navbar;
