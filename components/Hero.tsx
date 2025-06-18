"use client";

import Hero3 from "../public/9585817_37381.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" /> */}

      <Image
        src={Hero3}
        alt="slep laki beograd"
        fill
        className="w-full h-auto object-cover z-0"
      />
      <div className="relative container px-2 md:px-4 mx-auto md:pt-24  flex flex-col gap-20 md:gap-20 items-center justify-center  z-[1] ">
        <h1 className="text-black text-3xl md:text-7xl font-bold px-4 text-center z-10">
          Šlep služba Laki Beograd – Brza pomoć na putu, Zvezdara
        </h1>
        <h2 className="text-white  text-xl md:text-3xl text-center">
          Potrebna vam je šlep služba u Beogradu? Nalazimo se u centru, kod
          Vukovog spomenika, i stižemo na lokaciju za samo 10–15 minuta! Radimo
          non-stop, svaki dan u godini. Pouzdano, brzo i povoljno – pozovite
          <span className="font-bold"> Šlep službu Laki!</span>
        </h2>
        <a href="tel:+381601800700">
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
