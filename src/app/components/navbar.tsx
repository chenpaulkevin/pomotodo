"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="flex justify-between items-center rounded-lg  px-8 py-6 lg:px-16 md:py-8 border-black border-2">
        <div className="logo">
          <span className="font-display text-xl md:text-2xl lg:text-3xl">
            Pomotoro
          </span>
        </div>
        <div className="nav-links hidden lg:flex">
          <ul className="flex items-center gap-4">
            <Link href="/">
              <li className="font-semibold text-lg">Home</li>
            </Link>
            <Link href="/leaderboard">
              <li className="font-semibold text-lg">Leaderboard</li>
            </Link>
            <Link href="/profile">
              <li className="font-semibold text-lg">Profile</li>
            </Link>
            <Link href="/timer">
              <li className="font-bold shadow-solid-primary border border-2 border-black text-lg bg-white text-black rounded-md px-4 py-1">
                Start
              </li>
            </Link>
          </ul>
        </div>
        <div className="justify-self-end lg:hidden">
          <button
            className="transition-all duration-200"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="h-8 w-8 stroke-thick"></XMarkIcon>
            ) : (
              <Bars3Icon className="h-8 w-8 stroke-thick"></Bars3Icon>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
