import { Button } from "@/components";
import Image from "next/image";
import React from "react";

const ReadyPage = () => {
  return (
    <div className="px-[9%]">
      <h2 className="text-xl py-2 font-semibold text-gray">Sharh Qoldiring</h2>
      <textarea
        className="w-full outline-none shadow-md border-none p-4 resize-none rounded-3xl"
        cols="30"
        rows="10"
      ></textarea>

      <div>
        <button className="rounded-xl my-6 py-6 px-7 bg-white">
          <div className="relative  w-12 h-12">
            <Image src="/images/positive_review.png" alt="" fill />
          </div>
          <h2 className="text-center  font-semibold text-neutral-900 text-3xl">
            1
          </h2>
        </button>

        <button className="rounded-xl py-6 px-7 bg-white mx-8">
          <div className="relative w-12 h-12">
            <Image src="/images/neutral_review.png" alt="" fill />
          </div>
          <h2 className="text-center  font-semibold text-neutral-900 text-3xl">
            0
          </h2>
        </button>

        <button className="rounded-xl py-6 px-7 bg-white relative">
          <div className="relative w-12 h-12">
            <Image src="/images/negative_review.png" alt="" fill />
          </div>
          <h2 className="text-center  font-semibold text-neutral-900 text-3xl">
            0
          </h2>
        </button>
      </div>
      <Button fill padding>
        Nashr qilsih
      </Button>
      <p className="text-gray my-4" >
        “Nashr etish” tugmasini bosish orqali siz xizmat shartlariga rozilik
        bildirasiz
      </p>
    </div>
  );
};

export default ReadyPage;
