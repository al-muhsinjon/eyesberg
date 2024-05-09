"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDo() {
  const [age, setAge] = React.useState("Har qanday kun");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function oxirgiKunniChiqar() {
    var bugun = new Date(); // Bugungi sana
    var oxirgiKun = new Date(bugun.getFullYear(), bugun.getMonth() + 1, 0); // Oxirgi kun
    var kun = oxirgiKun.getDate(); // Oxirgi kun
    var oy = oxirgiKun.getMonth() + 1; // Oxirgi oy

    var oxirgiKunlar = ["Har qanday kun"]; // Oxirgi kunlar ro'yxati

    // Oxirgi kunlarni chiqarish
    for (var i = bugun.getDate(); i <= kun; i++) {
      var oyNom = ""; // Ox nomi
      var kunText = ""; // Oy nomi va kun

      switch (oy) {
        case 1:
          oyNom = "yanvar";
          break;
        case 2:
          oyNom = "fevral";
          break;
        case 3:
          oyNom = "mart";
          break;
        case 4:
          oyNom = "aprel";
          break;
        case 5:
          oyNom = "may";
          break;
        case 6:
          oyNom = "iyun";
          break;
        case 7:
          oyNom = "iyul";
          break;
        case 8:
          oyNom = "avgust";
          break;
        case 9:
          oyNom = "sentyabr";
          break;
        case 10:
          oyNom = "oktabr";
          break;
        case 11:
          oyNom = "noyabr";
          break;
        case 12:
          oyNom = "dekabr";
          break;
      }

      kunText = i + "-" + oyNom; // Oy nomi va kun
      oxirgiKunlar.push(kunText); // Oxirgi kunlarni ro'yxatga qo'shish

      // Keyingi oyning birinchi kuniga o'tkazish
      if (oy === 12 && i === kun) {
        oy = 1; // Yangi yilning birinchi oyiga o'tish
        kun = 1; // Birinchi kun
      } else if (i === kun) {
        oy++; // Keyingi oy
        kun = 1; // Birinchi kun
      }
    }

    return oxirgiKunlar; // Oxirgi kunlar ro'yxatini qaytarish
  }

  // Fonksiyani chaqirish va natijani saqlash
  var oxirgiKunlar = oxirgiKunniChiqar();

  //   TODO: Time

  function yarimSoatYigindi() {
    var saat = 6; // Soat
    var minut = 0; // Daqiqa

    var yarimSoatlar = []; // Yarim soatlar ro'yxati

    while (saat < 24) {
      var soatStr = saat < 10 ? "0" + saat : "" + saat; // Soatni stringga aylantirish
      var minutStr = minut < 10 ? "0" + minut : "" + minut; // Daqiqani stringga aylantirish

      var vaqt = soatStr + ":" + minutStr; // Soat va daqiqa
      yarimSoatlar.push(vaqt); // Yarim soatni ro'yxatga qo'shish

      // 30 daqiqaga qo'shish
      minut += 30;
      if (minut >= 60) {
        saat++; // Soatni o'zgartirish
        minut -= 60; // Daqiqani 0 ga o'rnating
      }
    }

    return yarimSoatlar; // Yarim soatlar ro'yxatini qaytarish
  }

  yarimSoatYigindi();

  return (
    <div className="bg-white w-full shadow-md">
      <FormControl fullWidth sx={{ boxShadow: "20px" }}>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          className="w-full"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"Ade"}
          value={age}
          onChange={handleChange}
        >
          {oxirgiKunlar.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
