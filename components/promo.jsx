"use client";
import usePromoModal from "@/hooks/use-promo";
import React from "react";

const Promo = () => {
  const pormo = usePromoModal();
  return (
    <>
      {pormo.open && (
        <div className="w-full fixed z-30 h-screen flex justify-center items-center">
          <iframe
            className="relative z-20"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/liCJ2UkFjCk?si=fx3EHKhmmd3N4c_Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div
            onClick={pormo.onClose}
            className="w-full h-screen bg-black bg-opacity-15 fixed top-0"
          ></div>
        </div>
      )}
    </>
  );
};

export default Promo;
