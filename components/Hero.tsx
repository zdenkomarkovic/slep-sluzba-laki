"use client";

import Hero3 from "../public/puric slep.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />
      <Image
        src={Hero3}
        alt="slep puric"
        fill
        className="w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto md:pt-24  flex flex-col gap-8 md:gap-20 items-center justify-center  z-[1] ">
        <h1 className="text-primary md:text-7xl text-4xl font-bold px-4 text-center">
          Šlep služba Purić 032 Čačak
        </h1>
        <h2 className="text-muted font-bold md:text-5xl text-xl">
          Od 0 do 24h, sedam dana u nedelji!
        </h2>
        <a href="tel:+381659480700">
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent flex gap-3 items-center text-muted border-muted border-[1px] rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
          >
            <PhoneIcon /> Pozovite odmah
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
