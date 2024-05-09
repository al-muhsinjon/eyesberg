import React from "react";
import { FaPhone } from "react-icons/fa6";
import SelectDo from "./components/select-do";
import SelectTime from "./components/select-time";
import FileUpload from "./components/image-video";
import SelectCostType from "./components/select-cost-type";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@/components/button";

const OrderPage = () => {
  return (
    <div className="px-[7%] py-12">
      {/* ------ START ----- */}

      <div role="presentation" className="my-6">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>

          <Link
            underline="hover"
            color="text.primary"
            href="order"
            aria-current="page"
          >
            Create Orders
          </Link>
        </Breadcrumbs>
      </div>

      {/* ------ End ------  */}

      <div className="">
        <h2 className="text-xl py-2 font-semibold text-gray">
          ЧТО НУЖНО СДЕЛАТЬ?*
        </h2>
        <textarea
          className="w-full outline-none shadow-md border-none p-4 resize-none rounded-3xl"
          placeholder="
          Укажите больше подробностей, чтобы специалисты могли точно оценить объем работы"
          cols="30"
          rows="10"
        ></textarea>
        <h2 className="text-xl py-4  font-semibold text-gray">
          КАК С ВАМИ СВЯЗАТЬСЯ?
        </h2>
        <div className="flex items-center gap-3 px-4 rounded-2xl shadow-md bg-white">
          <FaPhone className="text-gray" />
          <input
            type="text"
            placeholder="Enter phone number"
            className="outline-none bg-transparent w-full py-4"
          />
        </div>
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        КОГДА И ГДЕ НАЧАТЬ РАБОТУ?{" "}
      </h2>
      <div className="flex justify-between gap-6">
        <SelectDo />
        <SelectTime />
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        СКОЛЬКО ВЫ ГОТОВЫ ЗАПЛАТИТЬ?
      </h2>
      <div className="flex justify-between gap-6">
        <div className=" px-4 w-full rounded-2xl shadow-md bg-white">
          <input
            type="text"
            placeholder="Dan"
            className="outline-none bg-transparent w-full py-4"
          />
        </div>
        <div className=" px-4 w-full rounded-2xl shadow-md bg-white">
          <input
            type="text"
            placeholder="Gacha"
            className="outline-none bg-transparent w-full py-4"
          />
        </div>
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        ДОБАВЬТЕ ФОТО ИЛИ ВИДЕО{" "}
      </h2>
      <div className="">
        <FileUpload />
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        To&apos;lov turini tanlang{" "}
      </h2>
      <SelectCostType />

      <div className="px-12 flex justify-center items-center py-12">
        <Button>Ro&apos;yxatdan opas</Button>
      </div>
    </div>
  );
};

export default OrderPage;
