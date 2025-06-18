"use client";
import { cards2Data } from "@/constants/index";
import Image from "@/node_modules/next/image";
import { usePathname } from "@/node_modules/next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Uklanja #
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [pathname]); // Pokreni kad se promeni putanja
  return (
    <div className="py-20 md:py-24">
      <div className="container px-2 md:px-4 mx-auto">
        <h1 className="py-5 md:py-20 text-primary  text-3xl md:text-6xl text-center">
          Šlep Purić - pouzdana i Brza Pomoć na Putu – 24/7 Dostupnost
        </h1>
        <p className="text-xl md:text-3xl md:py-10 md:px-20">
          Naša slep služba pruža{" "}
          <span className="font-bold">siguran i brz prevoz vozila</span> u svim
          situacijama – kvarovi, nezgode ili potreba za transportom. Bez obzira
          na vreme ili lokaciju,{" "}
          <span className="font-bold">uvek smo dostupni</span> , jer imamo{" "}
          <span className="font-bold">više vozila u voznom parku</span> koja su
          spremna za hitne intervencije.
        </p>
        {cards2Data.map((data, i) => {
          return (
            <div key={data.id} id={data.divName}>
              <h2 className="text-primary text-3xl md:text-6xl py-10 text-center">
                {data.title}
              </h2>
              <div
                className={` md:px-20 flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-5 md:gap-32 items-center justify-between border-b pb-6 md:py-10`}
              >
                <p className="text-xl md:text-2xl first-letter:pl-6">
                  {data.text}
                </p>
                <Image
                  src={data.image}
                  width={300}
                  height={300}
                  alt="slep puric"
                  className="w-[90%] md:w-[300px] rounded-2xl object-cover aspect-square"
                />
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={"/black.jpg"}
        width={1000}
        height={500}
        alt="slep cacak"
        className=" w-full aspect-[3/2] object-cover"
      />
    </div>
  );
};

export default Page;
