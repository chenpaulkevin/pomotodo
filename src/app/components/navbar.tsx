"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Leaderboard", href: "/leaderboard" },
  { title: "Profile", href: "/profile" },
  { title: "Work", href: "/timer" },
];

export default function navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center rounded-lg  px-8 py-6 lg:px-16 md:py-8 border-black border-2">
          <div className="logo">
            <span className="font-display text-xl md:text-2xl lg:text-3xl">
              Pomotoro
            </span>
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

      {open && (
        <div className="fixed left-0 top-0 w-full h-screen bg-yellow-400 text-black p-10 lg:hidden">
          <div className="flex h-full flex-col">
            <div className="flex justify-between">
              <span className="font-display text-xl md:text-2xl lg:text-3xl">
                Pomotoro
              </span>
              <button
                className="cursor-pointer text-md text-black"
                onClick={toggleMenu}
              >
                <XMarkIcon className="h-8 w-8 stroke-thick"></XMarkIcon>
              </button>
            </div>
            <div className="flex flex-col h-full justify-center items-center gap-4">
              {navLinks.map((link, index) => {
                return (
                  <MobileNavLink
                    key={index}
                    title={link.title}
                    href={link.href}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const MobileNavLink = ({ title, href }: { title: string; href: any }) => {
  return (
    <div>
      <Link
        className="text-extrabold subpixel-antialiased text-4xl md:text-6xl"
        href={href}
      >
        {title}
      </Link>
    </div>
  );
};
