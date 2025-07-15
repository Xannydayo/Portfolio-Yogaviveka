"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiDiscord } from "react-icons/si";
import getUserData from "@/app/api/discordUser";
import { ApiResponse } from "@/types";
import { DISOCRD_PROFILE } from "@/constants";

export default function Callsign({ display }: { display: string }) {
  // Data statis Discord
  // Jika hash avatar tidak diketahui, gunakan default Discord avatar
  const avatarUrl = "https://cdn.discordapp.com/embed/avatars/0.png";
  const username = "xannydayo";
  const status = "online";

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://discord.com/users/1080066783450509372`}
      className={`relative m-auto flex max-w-xs flex-col items-center rounded-md border bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${display}`}
    >
      <div className="mb-3">
        <Image
          className="h-10 w-10 rounded-full"
          src={avatarUrl}
          alt={`${username}'s Avatar`}
          width={40}
          height={40}
          priority
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          @{username}
        </p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Status: {status}
        </p>
      </div>
      {/* Discord Icon */}
      <div className="absolute bottom-2 right-2">
        <SiDiscord size={18} color="#5865F2" />
      </div>
    </a>
  );
}
