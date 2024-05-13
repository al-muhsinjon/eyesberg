"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import { Button } from ".";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const LoginModal = () => {
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [otp, setOtp] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const pathName = usePathname();
  const router = useRouter();

  const auth = params.get("auth");

  const userData = {
    email,
    first_name,
    last_name,
    password,
    password2,
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/accounts/register/`,
        userData
      );

      if (response.status === 201) {
        router.push("?auth=otp");
      }
    } catch (error) {
      console.log(error.message);
      throw new Error("Failed to register user: " + error.message);
    }
  };

  const verify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/accounts/verify-email/`,
        { otp }
      );
      if (response.statusCode === 200) {
        router.push("?auth=login");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Failed to register user: " + error.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/accounts/login/`,
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      if (response.status === 200) {
        router.push(pathName);
        localStorage.setItem("token", JSON.stringify(response.data));
      }
    } catch (error) {
      console.log("Login failed", error);
      throw new Error(error.message);
    }
  };

  return (
    <>
      {auth === "sign-up" && (
        <div className="w-full flex justify-center items-center fixed z-10 h-screen bg-black bg-opacity-30">
          <div className="bg-white px-10 py-8 md:w-[25%] w-full rounded-md">
            <div className="flex justify-end">
              <button
                onClick={() => router.push(pathName)}
                className="p-3 rounded-full cursor-pointer text-white bg-gray"
              >
                <MdClose />
              </button>
            </div>
            <h2 className="font-bold text-xl">Malumotlarni kiriting</h2>
            <form onSubmit={register}>
              <div className="flex px-4 rounded-lg  my-5 items-center border">
                <MdEmail />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 w-full outline-none indent-4"
                  type="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex px-4 rounded-lg  my-5 items-center border">
                <input
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                  className="py-3 w-full outline-none indent-4"
                  type="text"
                  placeholder="ism"
                  name="name"
                  required
                />
              </div>
              <div className="flex px-4 rounded-lg  my-5 items-center border">
                <input
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                  className="py-3 w-full outline-none indent-4"
                  type="text"
                  placeholder="Familya"
                  name="surname"
                />
              </div>
              <div className="flex px-4 rounded-lg  my-5 items-center border">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-3 w-full outline-none indent-4"
                  type="password"
                  placeholder="Parol"
                  name="password"
                />
              </div>
              <div className="flex px-4 rounded-lg  my-5 items-center border">
                <input
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="py-3 w-full outline-none indent-4"
                  type="password"
                  placeholder="Qayta kiriting"
                  name="password2"
                  required
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
                <Button fill onClick={register}>
                  Далее
                </Button>
              </div>
            </form>
            <p>
              Accountingiz bo'lsa
              <Link className="text-blue underline" href="?auth=login">
                {" "}
                kiring
              </Link>
            </p>
          </div>
        </div>
      )}
      {auth === "otp" && (
        <div className="w-full flex justify-center items-center fixed z-10 h-screen bg-black bg-opacity-30">
          <div className="bg-white px-10 py-8 md:w-[25%] w-full rounded-md">
            <div className="flex justify-end">
              <button
                onClick={() => router.replace(pathName)}
                className="p-3 rounded-full cursor-pointer text-white bg-gray"
              >
                <MdClose />
              </button>
            </div>
            <h2 className="font-bold text-xl">
              Emailingizga yuborilgan otp ni kiriting
            </h2>
            <form onSubmit={verify}>
              <div className="flex px-4 rounded-lg  my-5 items-center border">
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="py-3  outline-none indent-4"
                  type="text"
                  placeholder="OTP"
                  name="otp"
                  required
                />
              </div>
              <div className="flex justify-center">
                <Button fill onClick={verify}>
                  Далее
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {auth === "login" && (
        <div>
          <div className="w-full flex justify-center items-center fixed z-10 h-screen bg-black bg-opacity-30">
            <div className="bg-white px-10 py-8 md:w-[25%] w-full rounded-md">
              <div className="flex justify-end">
                <button
                  onClick={() => router.replace(pathName)}
                  className="p-3 rounded-full cursor-pointer text-white bg-gray"
                >
                  <MdClose />
                </button>
              </div>
              <h2 className="font-bold text-xl">Ro&apos;yxatdan o&apos;tish</h2>
              <form onSubmit={login}>
                <div className="flex px-4 rounded-lg  my-5 items-center border">
                  <input
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="py-3 w-full  outline-none indent-4"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex px-4 rounded-lg  my-5 items-center border">
                  <input
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="py-3 w-full  outline-none indent-4"
                    type="password"
                    placeholder="Parol"
                    required
                    name="password"
                  />
                </div>
                <div className="flex justify-center">
                  <Button fill type="submit">
                    Далее
                  </Button>
                </div>
              </form>
              <p>
                Akkountingiz bo'lmasa
                <Link className="text-blue underline" href={"?auth=sign-up"}>
                  {" "}
                  ro&apos;yxatdan{" "}
                </Link>
                o&apos;ting
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
