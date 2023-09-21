//"use client";
//import Spline from '@splinetool/react-spline';
//<Spline scene="https://prod.spline.design/DNV71tby5tu-QXdM/scene.splinecode" />
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex relative w-full h-screen">
        <Image src="/sapiens.svg" fill={true} alt="Man Running"></Image>
      </div>
      <div className="flex relative w-full h-screen">
        <Image src="/sapiens.svg" fill={true} alt="Man Running"></Image>
      </div>
    </div>
  );
}
