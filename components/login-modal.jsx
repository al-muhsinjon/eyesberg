"use client";
import React from "react";
import { MdClose } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Button } from ".";
import useLoginModal from "@/hooks/use-loginmodal";
import Link from "next/link";

const LoginModal = () => {
  const modal = useLoginModal();
  return (
    <>
      {modal.open && (
        <div className="w-full flex justify-center items-center fixed z-10 h-screen bg-black bg-opacity-30">
          <div className="bg-white px-10 py-8 w-[25%] rounded-md">
            <div className="flex justify-end">
              <button
                onClick={modal.onClose}
                className="p-3 rounded-full cursor-pointer text-white bg-gray"
              >
                <MdClose />
              </button>
            </div>
            <h2 className="font-bold text-xl">Введите свой email</h2>
            <div className="flex px-4 rounded-lg  my-5 items-center border">
              <MdEmail />
              <input
                className="py-3  outline-none indent-4"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
            <p className="my-6">
              Нажимая Далее, вы соглашаетесь с
              <Link href="/" className="text-blue underline">
                {" "}
                правилами сервиса
              </Link>
            </p>
            <div className="flex justify-center">
              <Button fill>Далее</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
