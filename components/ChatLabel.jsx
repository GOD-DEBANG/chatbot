
// import React from "react";
// import Image from "next/image";
// import { assets } from "@/assets/assets";

// const ChatLabel = ({openManue , setOpenManue}) => {
//   return (
//     <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm cursor-pointer group">
//       {/* Chat Name */}
//       <p className="group-hover:max-w-[85%] truncate">Chat Names</p>

//       {/* Dots Menu */}
//       <div className="relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/80 rounded-lg">
//         <Image src={assets.three_dots} alt="menu" className={`w-4 ${openManue.open ? ' ' : 'hidden'} group:hover-block `} />

//         {/* Dropdown */}
//         <div  
//         className={`absolute w-4 ${openManue.open ? 'block ' : 'hidden'}-right-36 top-6 bg-gray-700 rounded-xl shadow-lg w-max p-2 hidden group-hover:block`}>
//           <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
//             <Image src={assets.pencil_icon} alt="rename" className="w-4" />
//             <p>Rename</p>
//           </div>
//           <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
//             <Image src={assets.delete_icon} alt="delete" className="w-4" />
//             <p>Delete</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatLabel;
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ChatLabel = ({ openManue, setOpenManue }) => {
  return (
    <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm cursor-pointer group">
      {/* Chat Name */}
      <p className="group-hover:max-w-[85%] truncate">Chat Names</p>

      {/* Dots Menu */}
      <div
        className="relative flex items-center justify-center h-6 w-6 aspect-square bg-black rounded-lg hover:bg-black/80"
        onClick={() => setOpenManue({ open: !openManue.open })}
      >
        {/* Icon should always show */}
        <Image
          src={assets.three_dots}
          alt="menu"
          className="w-4 h-4 object-contain"
        />

        {/* Dropdown */}
        {openManue.open && (
          <div className="absolute right-0 top-8 bg-gray-800 rounded-xl shadow-lg w-max p-2 text-white z-50">
            <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
              <Image src={assets.pencil_icon} alt="rename" className="w-4 h-4" />
              <p>Rename</p>
            </div>
            <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
              <Image src={assets.delete_icon} alt="delete" className="w-4 h-4" />
              <p>Delete</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLabel;
