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
    y: "-100vh",
  },
  animate: {
    y: "0vh",
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const headerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const MobileNavLink = ({ title, href }: { title: string; href: any }) => {
    return (
      <motion.div variants={mobileLinkVars} onClick={() => setOpen(!open)}>
        <Link
          className="text-extrabold font-display text-white subpixel-antialiased text-4xl md:text-6xl"
          href={href}
        >
          {title}
        </Link>
      </motion.div>
    );
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
                <Bars3Icon className="h-8 w-8 stroke-black stroke-thick"></Bars3Icon>
              ) : (
                <Bars3Icon className="h-8 w-8 stroke-black stroke-thick"></Bars3Icon>
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
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-black p-10 lg:hidden"
          >
            <div className="flex h-full flex-col m-1 md:m-4 mx-3  md:my-3 ml-3">
              <motion.div
                variants={headerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex justify-between"
              >
                <span className="font-display text-white text-xl md:text-2xl lg:text-3xl">
                  Pomotoro
                </span>
                <button className="cursor-pointer text-md" onClick={toggleMenu}>
                  <XMarkIcon className="h-8 w-8 stroke-thick stroke-white"></XMarkIcon>
                </button>
              </motion.div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink title={link.title} href={link.href} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const DesktopNavLink = ({ title, href }: { title: string; href: any }) => {
  if (title === "Work") {
    return (
      <ul className="shadow-solid-primary px-4 py-1 rounded-md border border-2 border-black cursor-pointer ease-in-out duration-300 hover:-translate-y-1">
        <Link className="font-black text-lg" href={href}>
          {title}
        </Link>
      </ul>
    );
  } else {
    return (
      <ul className="cursor-pointer duration-300 ease-in-out hover:-translate-y-1">
        <Link className="font-extrabold text-lg" href={href}>
          {title}
        </Link>
      </ul>
    );
  }
};

export default Navbar;
