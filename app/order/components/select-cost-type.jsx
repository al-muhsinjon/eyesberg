"use client";
import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SelectCostType = () => {
  const [type, setType] = useState("kartayokinaqd");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="bg-white my-4 w-full shadow-md">
      <FormControl fullWidth sx={{ boxShadow: "20px" }}>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          className="w-full"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"Ade"}
          value={type}
          onChange={handleChange}
        >
          <MenuItem value={"naqd"}>Naqd</MenuItem>
          <MenuItem value={"karta"}>Karta</MenuItem>
          <MenuItem value={"kartayokinaqd"}>Karta yoki Naqd</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCostType;
