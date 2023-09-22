import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
const preloaderVars = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};
const wordVars = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const words = [
    "Hello",
    "Kamusta",
    "你好",
    "こんにちは",
    "Привет",
    "안녕하세요",
    "ہیلو",
    "Bonjour",
  ];
  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 200
    );
  }, [index, words.length]);
  return (
    <>
      <motion.div
        key="background"
        variants={preloaderVars}
        initial="initial"
        exit="exit"
        className="top-0 left-0 bg-primary fixed z-50 h-screen w-full flex items-center justify-center font-extrabold tracking-wider font-display text-6xl text-secondary"
      >
        <motion.p
          key="words"
          variants={wordVars}
          initial="initial"
          animate="enter"
        >
          {words[index]}
        </motion.p>
      </motion.div>
    </>
  );
}
