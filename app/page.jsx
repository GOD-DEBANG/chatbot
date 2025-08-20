
'use client';
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import PromptBox from "@/components/PromptBox";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // Track cursor for background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Neon animated gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800 via-black to-blue-900 animate-gradient"
        style={{
          backgroundSize: "400% 400%",
          backgroundPosition: `${cursor.x / 50}% ${cursor.y / 50}%`,
        }}
      ></div>

      {/* Floating neon glow blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/40 blur-[200px] rounded-full top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/40 blur-[200px] rounded-full bottom-[-10%] right-[-10%] animate-pulse"></div>

      {/* Main Layout */}
      <div className="flex h-full">
        <Sidebar expand={expand} setExpand={setExpand} />

        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 relative">
          {/* Mobile Top Bar */}
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              src={assets.menu_icon}
              alt="menu"
              className="rotate-180 cursor-pointer hover:scale-110 transition-transform duration-200"
            />
            <Image
              src={assets.chat_icon}
              width={26}
              height={26}
              alt="chat"
              // className="opacity-80 hover:opacity-100 transition-all"
              className="h-16 text-white invert"
            />
          </div>

          {/* Hero Section */}
          {messages.length === 0 ? (
            <>
              <div className="flex flex-col items-center gap-4 text-center">
                <Image
                  src={assets.logo_icon}
                  alt="logo"
                  width={90}
                  height={90}
                  className="drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] animate-float"
                />
                <p className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-blue-400 bg-clip-text text-transparent animate-pulse-slow">
                  Hello, I am <span className="italic">Lunora</span>
                </p>
                <p className="text-lg text-gray-300 tracking-wide">
                  How can I help you today?
                </p>
              </div>
            </>
          ) : (
            <div></div>
          )}

          {/* Prompt Box */}
          <div className="w-full max-w-2xl">
            <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          </div>

          <p className="text-xs absolute bottom-2 text-gray-500 tracking-wide">
            ✨ AI generated, for reference only
          </p>
        </div>
      </div>

      {/* Extra Animations */}
      <style jsx>{`
        .animate-gradient {
          animation: gradientShift 12s ease infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
