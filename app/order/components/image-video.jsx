// "use client";
// import React, { useState } from "react";

// export default function FileUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(URL.createObjectURL(event.target.files[0]));
//   };

//   const handleDelete = () => {
//     setSelectedFile(null);
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/*, video/*"
//         onChange={handleFileChange}
//       />
//       {selectedFile && (
//         <div>
//           {selectedFile.startsWith("blob:") ? (
//             <img src={selectedFile} alt="Selected File" />
//           ) : (
//             <video src={selectedFile} controls />
//           )}
//           <button onClick={handleDelete}>Rasmni o'chirish</button>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
// import React, { useState } from "react";

// export default function FileUpload() {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     const newFiles = [...files];
//     // Avvalgi faylni o'chiramiz
//     // if (selectedFiles.length > 0) {
//     console.log(URL.revokeObjectURL(selectedFiles[0].preview));
//     // }
//     // Yangi faylni saqlab olish
//     newFiles.forEach((file) => {
//       file.preview = URL.createObjectURL(file);
//     });
//     console.log(newFiles[0].preview);
//     // setSelectedFiles(newFiles);
//   };

//   const handleDelete = () => {
//     // Faylni o'chiramiz
//     if (selectedFiles.length > 0) {
//       URL.revokeObjectURL(selectedFiles[0].preview);
//       setSelectedFiles([]);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/*, video/*"
//         onChange={handleFileChange}
//       />
//       {selectedFiles.map((file, index) => (
//         <div key={index}>
//           {file.type.startsWith("image") ? (
//             <img src={file.preview} alt="Selected File" />
//           ) : (
//             <video src={file.preview} controls />
//           )}
//         </div>
//       ))}
//       {selectedFiles.length > 0 && (
//         <button onClick={handleDelete}>Rasmni o'chirish</button>
//       )}
//     </div>
//   );
// }

// ----------------------------------------------------

// import React, { useState } from "react";

// export default function FileUpload() {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     const newFiles = [...files];
//     setSelectedFiles([...selectedFiles, ...newFiles]);
//   };

//   const handleDelete = (index) => {
//     const updatedFiles = [...selectedFiles];
//     updatedFiles.splice(index, 1);
//     setSelectedFiles(updatedFiles);
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/*, video/*"
//         onChange={handleFileChange}
//       />
//       {selectedFiles.map((file, index) => (
//         <div key={index}>
//           {file.type.startsWith("image") ? (
//             <img
//               src={URL.createObjectURL(file)}
//               alt="Selected File"
//               style={{ maxWidth: "100%" }}
//             />
//           ) : (
//             <video
//               src={URL.createObjectURL(file)}
//               controls
//               style={{ maxWidth: "100%" }}
//             />
//           )}
//           <button onClick={() => handleDelete(index)}>Rasmni o'chirish</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// ----------------------------------------------------

// import React, { useState } from "react";
// import { RiImageAddFill } from "react-icons/ri";
// import { FaTrash } from "react-icons/fa";

// export default function FileUpload() {
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (event) => {
//     const files = event.target.files;
//     const newFiles = [...files];
//     setSelectedFiles([...selectedFiles, ...newFiles]);
//   };

//   console.log(selectedFiles);

//   const handleDelete = (index) => {
//     const updatedFiles = [...selectedFiles];
//     updatedFiles.splice(index, 1);
//     setSelectedFiles(updatedFiles);
//   };

//   return (
//     <div className="flex flex-wrap my-4">
//       {selectedFiles.map((file, index) => (
//         <div key={index} className="relative mr-4 mb-4">
//           {file.type.startsWith("image") ? (
//             <img
//               src={URL.createObjectURL(file)}
//               alt="Selected File"
//               className="w-40 h-40 object-cover rounded-lg"
//             />
//           ) : (
//             <video
//               src={URL.createObjectURL(file)}
//               controls
//               className="w-40 h-40 object-cover rounded-lg"
//             />
//           )}
//           <button
//             className="absolute top-0 right-0 bg-white p-2 rounded-full"
//             onClick={() => handleDelete(index)}
//           >
//             <FaTrash className="w-4 h-4 text-red-500" />
//           </button>
//         </div>
//       ))}
//       <label
//         htmlFor="fileInput"
//         className="relative w-40 bg-blue bg-opacity-30 shadow-md h-40 cursor-pointer flex justify-center items-center bg-gray-200  rounded-lg"
//       >
//         <RiImageAddFill className="w-20 h-20 text-blue" />
//         <input
//           id="fileInput"
//           type="file"
//           accept="image/*, video/*"
//           className="absolute inset-0 opacity-0 cursor-pointer"
//           onChange={handleFileChange}
//         />
//       </label>
//     </div>
//   );
// }

import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function FileUpload({ setImage }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const newFiles = [...files];
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newFiles = [...files];
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  const handleDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  selectedFiles.forEach((file) => {
    setImage(file);
  });

  return (
    <div
      className="flex flex-wrap my-4"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {selectedFiles.map((file, index) => (
        <div key={index} className="relative mr-4 mb-4">
          {file.type.startsWith("image") ? (
            <Image
              src={URL.createObjectURL(file)}
              alt="Selected File"
              width={160}
              height={160}
              className="w-40 h-40 object-cover rounded-lg"
            />
          ) : (
            <video
              src={URL.createObjectURL(file)}
              controls
              className="w-40 h-40 object-cover rounded-lg"
            />
          )}
          <button
            className="absolute top-0 right-0 bg-white p-2 rounded-full"
            onClick={() => handleDelete(index)}
          >
            <FaTrash className="w-4 h-4 text-red-500" />
          </button>
        </div>
      ))}
      <label
        htmlFor="fileInput"
        className="relative w-40 bg-blue bg-opacity-30 shadow-md h-40 cursor-pointer flex justify-center items-center bg-gray-200  rounded-lg"
      >
        {/* Icon */}
        <input
          id="fileInput"
          type="file"
          accept="image/*, video/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
