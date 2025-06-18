"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
            Šlep služba Laki Beograd
            <span className="text-2xl font-normal md:text-3xl pt-2 text-muted-foreground">
              Brza pomoć na Zvezdari i šire
            </span>
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Potrebna vam je pouzdana i brza šlep služba u Beogradu? Tu je Šlep
            služba Laki, dostupna 24h dnevno, tokom cele godine. Naš prioritet
            su bezbednost, efikasnost i pristupačne cene.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Nalazimo se na Zvezdari, kod Vukovog spomenika, što nam omogućava da
            stignemo na bilo koju lokaciju u Beogradu za samo 10 do 15 minuta.
          </p>
          <p className="first-letter:pl-6 text-lg md:text-3xl">
            Pozovite nas odmah i uverite se zašto smo prvi izbor na Zvezdari!
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-5/2"
        >
          <Image
            src={"/6453.jpg"}
            width={800}
            height={800}
            alt="slep puric cacak "
            className="object-cover  md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
