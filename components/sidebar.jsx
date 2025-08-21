
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/context/AppContext";
import { FaHome, FaShieldAlt, FaFileAlt, FaEnvelope } from "react-icons/fa";

const Sidebar = ({ expand, setExpand }) => {
  const { openSignIn } = useClerk();
  const { user } = useAppContext();

  return (
    <div
      className={`flex flex-col bg-gradient-to-b from-[#6C1BFF] to-[#000000] text-white transition-all duration-500 ease-in-out z-50 max-md:absolute max-md:h-screen shadow-xl
      ${expand ? "w-64 p-6" : "w-20 p-4"} `}
    >
      {/* Top Section: Logo + Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={assets.logo_icon}
            alt="Lunora Logo"
            width={40}
            height={40}
            className="transition-all duration-500"
          />
          {expand && (
            <span className="text-xl font-semibold tracking-wide">Lunora</span>
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
      <div className="mt-10 flex-1 flex flex-col">
        {/* Navigation Links */}
        <nav
          className={`text-white/80 text-sm font-medium flex flex-col justify-between flex-1 ${
            expand ? "gap-10" : "items-center gap-8"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <FaHome size={20} />
            {expand && "Home"}
          </Link>

          <Link
            href="/privacy"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <FaShieldAlt size={20} />
            {expand && "Privacy"}
          </Link>

          <Link
            href="/docs"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <FaFileAlt size={20} />
            {expand && "Documentation"}
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <FaEnvelope size={20} />
            {expand && "Contact Us"}
          </Link>
        </nav>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="border-t border-white/10 my-4"></div>

        {/* Profile Section */}
        <div
          onClick={user ? null : openSignIn}
          className={`flex items-center gap-3 text-white/70 text-sm p-3 rounded-lg cursor-pointer transition-all duration-300
          ${
            expand
              ? "justify-start hover:bg-white/10"
              : "justify-center hover:bg-white/10"
          }`}
        >
          {user ? (
            <UserButton />
          ) : (
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
          )}

          {expand && <span className="font-medium">My Profile</span>}
        </div>

        <div className="text-center mt-3 text-xs tracking-wide opacity-50">
          {expand ? "© 2025 Lunora • All Rights Reserved" : "©"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
