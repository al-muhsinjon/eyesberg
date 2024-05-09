"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectTime() {
  const [time, setTime] = React.useState("Har qanday vaqt");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  //   TODO: Time

  function yarimSoatYigindi() {
    var saat = 6; // Soat
    var minut = 0; // Daqiqa

    var yarimSoatlar = ["Har qanday vaqt"]; // Yarim soatlar ro'yxati

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

  // Fonksiyani chaqirish va natijani saqlash
  var natija = yarimSoatYigindi();

  // !end

  return (
    <div className="bg-white w-full">
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          className="w-full"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"Ade"}
          value={time}
          onChange={handleChange}
        >
          {natija.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* ifnefeifeijfie */}
    </div>
  );
}
