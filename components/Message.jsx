

import Image from 'next/image'
import React from 'react'
import { assets } from "@/assets/assets";

const Message = ({ role, content }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl text-sm">
      <div
        className={`flex flex-col w-full mb-6 ${
          role === "user" ? "items-end" : "items-start"
        }`}
      >
        <div
          className={`group relative flex max-w-2xl py-3 px-5 rounded-2xl shadow-md backdrop-blur-md border transition-all duration-300 
            ${
              role === "user"
                ? "bg-gradient-to-r from-violet-600/80 to-purple-500/70 text-white border-violet-400/30"
                : "bg-white/10 border-white/20 text-gray-200 gap-3"
            }`}
        >
          {/* Hover Action Buttons */}
          <div
            className={`opacity-0 group-hover:opacity-100 absolute transition-all duration-300 ${
              role === "user" ? "-left-20 top-2.5" : "left-10 -bottom-6"
            }`}
          >
            <div className="flex items-center gap-3 opacity-80">
              {role === "user" ? (
                <>
                  <Image
                    src={assets.copy_icon}
                    alt="copy"
                    className="w-4 cursor-pointer hover:scale-110 transition-transform"
                  />
                  <Image
                    src={assets.pencil_icon}
                    alt="edit"
                    className="w-5 cursor-pointer hover:scale-110 transition-transform"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={assets.copy_icon}
                    alt="copy"
                    className="w-5 cursor-pointer hover:scale-110 transition-transform"
                  />
                  <Image
                    src={assets.regenerate_icon}
                    alt="regenerate"
                    className="w-4 cursor-pointer hover:scale-110 transition-transform"
                  />
                  <Image
                    src={assets.like_icon}
                    alt="like"
                    className="w-4 cursor-pointer hover:scale-110 transition-transform"
                  />
                  <Image
                    src={assets.dislike_icon}
                    alt="dislike"
                    className="w-4 cursor-pointer hover:scale-110 transition-transform"
                  />
                </>
              )}
            </div>
          </div>

          {/* Message Content */}
          {role === "user" ? (
            <span className="text-white/95 leading-relaxed">{content}</span>
          ) : (
            <>
              <Image
                src={assets.logo_icon}
                alt="bot"
                className="h-9 w-9 p-1 border border-white/20 rounded-full shadow-md"
              />
              <div className="space-y-3 w-full overflow-x-auto leading-relaxed">
                {content}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
