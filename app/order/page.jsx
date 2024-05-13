// "use client";
// import React, { useState } from "react";
// import axios from "axios";

// const WorkForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [price, setPrice] = useState("");
//   const [images, setImages] = useState([]);

//   const handleImageChange = (event) => {
//     const newImages = [...images];
//     const files = event.target.files;
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         newImages.push({
//           preview: e.target.result, // Base64-encoded image data
//           file: file, // File object for further processing
//         });
//         setImages(newImages);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = () => {
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("location", location);
//     formData.append("price", price);

//     // Convert images array to an array of FormData entries
//     const imageEntries = images.map((image) => {
//       return [image.file.name, image.file];
//     });

//     // Add image entries to the formData
//     imageEntries.forEach((entry) => formData.append("images", ...entry));

//     axios
//       .post("/api/works/", formData)
//       .then((response) => {
//         // Handle successful work creation
//         console.log("Work created:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error creating work:", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Location:</label>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Price:</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Images:</label>
//         <input type="file" multiple onChange={handleImageChange} />
//         {images.map((image) => (
//           <img src={image.preview} alt="Preview" key={image.file.name} />
//         ))}
//       </div>
//       <button type="submit">Create Work</button>
//     </form>
//   );
// };

// export default WorkForm;

"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import SelectDo from "./components/select-do";
import SelectTime from "./components/select-time";
import FileUpload from "./components/image-video";
import SelectCostType from "./components/select-cost-type";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@/components/button";
import useUserNumber from "@/hooks/use-userNumber";
import { useSearchParams } from "next/navigation";

const OrderPage = () => {
  const params = useSearchParams();
  const orderName = params.get("ordername");

  const [textArea, setTextArea] = useState(orderName || "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectDo, setSelectDo] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [tolovDan, setTolovDan] = useState("");
  const [tolovGacha, setTolovGacha] = useState("");
  const [costType, setCostType] = useState("");
  const [images, setImage] = useState([]);

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
          Nima ish qilish kerak?*
        </h2>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          className="w-full outline-none shadow-md border-none p-4 resize-none rounded-3xl"
          placeholder="
          Укажите больше подробностей, чтобы специалисты могли точно оценить объем работы"
          cols="30"
          rows="10"
        ></textarea>
        <h2 className="text-xl py-4  font-semibold text-gray">
          Qanday bog&apos;lansa bo&apos;ladi?
        </h2>
        <div className="flex items-center gap-3 px-4 rounded-2xl shadow-md bg-white">
          <FaPhone className="text-gray" />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="Enter phone number"
            className="outline-none bg-transparent w-full py-4"
          />
        </div>
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        Qachon va qaysi vaqtda?
      </h2>
      <div className="flex justify-between gap-6">
        <SelectDo setSelectDo={setSelectDo} />
        <SelectTime selectTime={selectTime} setSelectTime={setSelectTime} />
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        Nechpul to&apos;lov?
      </h2>
      <div className="flex justify-between gap-6">
        <div className=" px-4 w-full rounded-2xl shadow-md bg-white">
          <input
            value={tolovDan}
            onChange={(e) => setTolovDan(e.target.value)}
            type="text"
            placeholder="Dan"
            className="outline-none bg-transparent w-full py-4"
          />
        </div>
        <div className=" px-4 w-full rounded-2xl shadow-md bg-white">
          <input
            value={tolovGacha}
            onChange={(e) => setTolovGacha(e.target.value)}
            type="text"
            placeholder="Gacha"
            className="outline-none bg-transparent w-full py-4"
          />
        </div>
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        Rasm yoki video qo&apos;shish{" "}
      </h2>
      <div className="">
        <FileUpload setImage={setImage} />
      </div>
      <h2 className="text-xl py-4  font-semibold text-gray">
        To&apos;lov turini tanlang{" "}
      </h2>
      <SelectCostType setCostType={setCostType} />

      <div className="px-12 flex justify-center items-center py-12">
        <Button>Ro&apos;yxatdan o&apos;tish</Button>
      </div>
    </div>
  );
};

export default OrderPage;
