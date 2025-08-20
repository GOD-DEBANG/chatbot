
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const PromptBox = ({ setIsLoading, isLoading }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <form
      className={`w-full max-w-2xl mt-4 p-4 rounded-2xl 
      bg-gradient-to-r from-[#1a1a2e]/80 via-[#2a0845]/70 to-[#1a1a2e]/80 
      backdrop-blur-xl border border-white/10 shadow-lg
      transition-all duration-300`}
    >
      {/* Input Box */}
      <textarea
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        rows={2}
        placeholder="Message me..."
        required
        className="w-full bg-transparent resize-none overflow-hidden 
        text-gray-200 placeholder-gray-400 outline-none text-sm
        focus:ring-0"
      />

      {/* Options + Send */}
      <div className="flex items-center justify-between mt-3 text-sm">
        <div className="flex items-center gap-2 flex-wrap">
          <p
            className="flex items-center gap-2 text-xs border border-white/20 
            px-3 py-1.5 rounded-full cursor-pointer 
            bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white
            transition-all duration-200"
          >
            <Image
              src={assets.deepthink_icon}
              alt=""
              className="h-4 w-4"
              height={20}
              width={20}
            />
            Deep Research
          </p>

          <p
            className="flex items-center gap-2 text-xs border border-white/20 
            px-3 py-1.5 rounded-full cursor-pointer 
            bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white
            transition-all duration-200"
          >
            <Image
              src={assets.search_icon}
              alt=""
              className="h-4 w-4"
              height={20}
              width={20}
            />
            Search
          </p>
        </div>

        {/* Pin + Send */}
        <div className="flex items-center gap-3">
          <Image
            src={assets.pin_icon}
            alt=""
            className="w-4 cursor-pointer opacity-70 hover:opacity-100 transition"
            height={20}
            width={20}
          />

          <button
            type="submit"
            className={`p-2 rounded-full transition-all duration-300 
            ${
              prompt
                ? "bg-gradient-to-r from-[#9333EA] to-[#4F46E5] hover:scale-105"
                : "bg-[#3b3b4f] opacity-50 cursor-not-allowed"
            }`}
          >
            <Image
              src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
              alt=""
              className="w-4 aspect-square"
              height={20}
              width={20}
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
