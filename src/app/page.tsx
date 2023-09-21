"use client";
import Spline from "@splinetool/react-spline";
import React from "react";
import Image from "next/image";
import Link from "next/link";
//<Spline scene="https://prod.spline.design/vgrFMIbatRcFsli4/scene.splinecode" />

export default function Home() {
  return (
    <div className="pt-4">
      <div className="flex-wrap lg:flex-nowrap flex p-4">
        <div className="flex flex-wrap items-center w-full">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl md:text-4xl font-display font-bold leading-snug tracking-wide lg:text-6xl lg:leading-tight">
              Fueling Your Productivity Sprint!
            </h1>
            <p className="py-5 text-md leading-normal lg:text-xl font-extrabold text-lg ">
              Transform your work routine as you race against time, climb
              leaderboards, and master the art of time management.
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/timer"
                className="shadow-solid-primary w-full md:w-auto px-4 py-1 md:px-6 md:py-2 font-black text-lg rounded-md border border-2 border-black cursor-pointer ease-in-out duration-300 hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="/"
                className="shadow-solid-primary w-full md:w-auto  px-4 py-1 md:px-6 md:py-2  font-black text-lg rounded-md border border-2 border-black cursor-pointer ease-in-out duration-300 hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last flex items-center w-full">
          <Image
            src="/sapiens.svg"
            width={1400}
            height={1400}
            alt="Man Running"
          ></Image>
        </div>
      </div>
    </div>
  );
}
