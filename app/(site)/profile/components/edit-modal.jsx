// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import React from "react";
// import { MdClose } from "react-icons/md";

// const EditModal = () => {
//   const params = useSearchParams();
//   const edit = params.get("edit");
//   console.log(edit);
//   const pathName = usePathname();
//   const router = useRouter();

//   return (
//     <>
//       {edit === "true" && (
//         <div className="w-full top-0 flex justify-center items-center fixed z-10 h-screen bg-black bg-opacity-30">
//           <div className="bg-white px-10 py-8 md:w-[25%] w-full rounded-md">
//             <div className="flex justify-end">
//               <button
//                 onClick={() => router.push(pathName)}
//                 className="p-3 rounded-full cursor-pointer text-white bg-gray"
//               >
//                 <MdClose />
//               </button>
//             </div>
//             <h2 className="font-bold text-xl">Malumotlarni kiriting</h2>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditModal;

import React from "react";
import { MdClose } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";

const EditModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const edit = params.get("edit");
  const isEdit = edit === "true";

  console.log(edit);
  const closeModal = () => {
    router.back();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 z-10">
      <div className="bg-white w-full md:w-[25%] rounded-md px-10 py-8">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="p-3 rounded-full cursor-pointer text-white bg-gray"
          >
            <MdClose />
          </button>
        </div>
        <h2 className="font-bold text-xl">Malumotlarni kiriting</h2>
      </div>
    </div>
  );
};

export default EditModal;
