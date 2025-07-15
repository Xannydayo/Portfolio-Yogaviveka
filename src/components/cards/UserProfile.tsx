"use client";
import React from "react";

const UserProfile = () => {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-gray-800 p-6 text-white shadow-lg">
      <div className="flex items-center">
        <img
          src="https://cdn.discordapp.com/avatars/122222222222222222/abcdefabcdefabcdefabcdefabcdefabcdef.webp?size=512"
          alt="Profile"
          className="mr-4 h-20 w-20 rounded-full"
        />
        <div className="flex-grow">
          <h1 className="text-xl font-bold">Yoga Viveka</h1>
          <h2 className="text-gray-400">yogaviveka#0000</h2>
        </div>
        <div className="rounded bg-indigo-600 px-2 py-1 text-sm text-white">
          APP
        </div>
      </div>
      <div className="mt-6">
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">ABOUT ME</h3>
          <p>/help</p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">MEMBER SINCE</h3>
          <p className="flex items-center">
            <svg
              className="mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 012 0v1a1 1 0 01-2 0V9zM7 12a1 1 0 110-2h2a1 1 0 110 2H7z" />
            </svg>
            Jun 29, 2024
          </p>
          <p className="flex items-center">
            <svg
              className="mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 012 0v1a1 1 0 01-2 0V9zM7 12a1 1 0 110-2h2a1 1 0 110 2H7z" />
            </svg>
            Jul 20, 2024
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">PLAYING A GAME</h3>
          <p>/help</p>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-gray-400">ROLE</h3>
          <div className="inline-block rounded bg-green-600 px-2 py-1 text-sm font-bold text-white">
            Zona Belajar
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
