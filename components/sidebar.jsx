

// import React from "react";
// import Image from "next/image";
// import { assets } from "@/assets/assets";

// const Sidebar = ({ expand, setExpand }) => {
//   return (
//     <div
//       className={`flex flex-col bg-gradient-to-b from-[#6C1BFF] to-[#000000] text-white transition-all duration-500 ease-in-out z-50 max-md:absolute max-md:h-screen shadow-xl
//       ${expand ? "w-64 p-6" : "w-20 p-4"} `}
//     >
//       {/* Top Section: Logo + Toggle */}
//       <div className="flex items-center justify-between">
//         <Image
//           src={expand ? assets.logo_text : assets.logo_icon}
//           alt="Lunora Logo"
//           width={expand ? 120 : 40}
//           height={40}
//           className="transition-all duration-500"
//         />

//         {/* Toggle Button */}
//         <div
//           onClick={() => setExpand(!expand)}
//           className="flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 h-9 w-9 rounded-lg cursor-pointer"
//         >
//           <Image
//             src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
//             alt="toggle sidebar"
//             width={22}
//             height={22}
//           />
//         </div>
//       </div>

//       {/* Custom Text (Your Brand) */}
//       <div
//         className={`mt-16 font-semibold tracking-wide ${
//           expand
//             ? "text-xl text-left"
//             : "text-[10px] text-center rotate-[-90deg]"
//         } transition-all duration-500`}
//       >
//         deepsseek
//       </div>

//       {/* Middle Section */}
//       <div>
//         <button
//           className={`mt-8 flex items-center justify-center cursor-pointer ${
//             expand
//               ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
//               : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"
//           }`}
//         >
//           <Image
//             src={expand ? assets.chat_icon : assets.arrow_icon_dull}
//             alt="toggle sidebar"
//             width={22}
//             height={22}
//             className={expand ? "w-6" : "w-7"}
//           />
//           <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-2 py-3 rounded-lg shadow-lg pointer-events-none">
//             New Chat
//             <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
//           </div>
//           {expand && <p className="text-white text font-medium"> New Chat</p>}
//         </button>

//         <div
//           className={`mt-8 text-white/25 text-sm ${
//             expand ? "block" : "hidden"
//           }`}
//         >
//           <p className="my-1">Recents</p>
//           {/* chatlevel */}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-auto">
//         {/* Divider */}
//         <div className="border-t border-white/10 my-4"></div>

//         {/* Profile Section */}
//         <div
//           className={`flex items-center gap-3 text-white/70 text-sm p-3 rounded-lg cursor-pointer transition-all duration-300
//           ${
//             expand
//               ? "justify-start hover:bg-white/10"
//               : "justify-center hover:bg-white/10"
//           }`}
//         >
//           <div className="relative">
//             <Image
//               src={assets.profile_icon}
//               alt="profile"
//               width={32}
//               height={32}
//               className="rounded-full border border-white/20 shadow-md"
//             />
//             {/* Glow indicator */}
//             <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#000000]"></span>
//           </div>
//           {expand && <span className="font-medium">My Profile</span>}
//         </div>

//         {/* Branding */}
//         <div className="text-center mt-3 text-xs tracking-wide opacity-50">
//           {expand ? "© 2025 Lunora • All Rights Reserved" : "©"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Sidebar = ({ expand, setExpand }) => {
  return (
    <div
      className={`flex flex-col bg-gradient-to-b from-[#6C1BFF] to-[#000000] text-white transition-all duration-500 ease-in-out z-50 max-md:absolute max-md:h-screen shadow-xl
      ${expand ? "w-64 p-6" : "w-20 p-4"} `}
    >
      {/* Top Section: Logo + Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Always show logo icon */}
          <Image
            src={assets.logo_icon}
            alt="Lunora Logo"
            width={40}
            height={40}
            className="transition-all duration-500"
          />
          {/* Show app name only when expanded */}
          {expand && (
            <span className="text-xl font-semibold tracking-wide">
              Lunora
            </span>
          )}
        </div>

        {/* Toggle Button */}
        <div
          onClick={() => setExpand(!expand)}
          className="flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 h-9 w-9 rounded-lg cursor-pointer"
        >
          <Image
            src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
            alt="toggle sidebar"
            width={22}
            height={22}
          />
        </div>
      </div>

      {/* Middle Section */}
      <div>
        <button
          className={`mt-8 flex items-center justify-center cursor-pointer ${
            expand
              ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
              : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            src={expand ? assets.chat_icon : assets.arrow_icon_dull}
            alt="toggle sidebar"
            width={22}
            height={22}
            className={expand ? "w-6" : "w-7"}
          />
          <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-2 py-3 rounded-lg shadow-lg pointer-events-none">
            New Chat
            <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
          </div>
          {expand && <p className="text-white text font-medium"> New Chat</p>}
        </button>

        <div
          className={`mt-8 text-white/25 text-sm ${
            expand ? "block" : "hidden"
          }`}
        >
          <p className="my-1">Recents</p>
          {/* chatlevel */}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        {/* Divider */}
        <div className="border-t border-white/10 my-4"></div>

        {/* Profile Section */}
        <div
          className={`flex items-center gap-3 text-white/70 text-sm p-3 rounded-lg cursor-pointer transition-all duration-300
          ${
            expand
              ? "justify-start hover:bg-white/10"
              : "justify-center hover:bg-white/10"
          }`}
        >
          <div className="relative">
            <Image
              src={assets.profile_icon}
              alt="profile"
              width={32}
              height={32}
              className="rounded-full border border-white/20 shadow-md"
            />
            {/* Glow indicator */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#000000]"></span>
          </div>
          {expand && <span className="font-medium">My Profile</span>}
        </div>

        {/* Branding */}
        <div className="text-center mt-3 text-xs tracking-wide opacity-50">
          {expand ? "© 2025 Lunora • All Rights Reserved" : "©"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
