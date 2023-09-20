"use client";
import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Leaderboard", href: "/leaderboard" },
  { title: "Profile", href: "/profile" },
  { title: "Work", href: "/timer" },
];

const menuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 1],
    },
  },
};
const [open, setOpen] = useState(false);

export default function navbar() {
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
          <div className="nav-links hidden lg:block">
            <ul className="flex items-center gap-4">
              {navLinks.map((link, index) => {
                return (
                  <DesktopNavLink
                    key={index}
                    title={link.title}
                    href={link.href}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Links */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10 lg:hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
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

const DesktopNavLink = ({ title, href }: { title: string; href: any }) => {
  if (title === "Work") {
    return (
      <ul className="shadow-solid-primary px-4 py-1 rounded-md border border-2 border-black cursor-pointer">
        <Link className="font-black text-lg" href={href}>
          {title}
        </Link>
      </ul>
    );
  } else {
    return (
      <ul className="cursor-pointer">
        <Link className="font-extrabold text-lg" href={href}>
          {title}
        </Link>
      </ul>
    );
  }
};
