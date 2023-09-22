"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components:
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";
import Preloader from "./components/preloader";

export default function ParentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2500);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader></Preloader>}
      </AnimatePresence>
      {children}
      <Analytics />
    </div>
  );
}
