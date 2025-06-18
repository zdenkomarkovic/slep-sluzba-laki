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
          Šlep Laki - 24/7 Dostupan za vas
        </h1>
        <div className=" md:py-10 md:px-20 space-y-4">
          <p className="text-xl md:text-3xl">
            Naša šlep služba je najbrža i najpouzdanija u okolini Vukovog
            spomenika na Zvezdari. Stižemo do vas za 10 do 15 minuta, bilo da
            imate kvar, udes ili vam treba prevoz vozila.
          </p>
          <p className="text-xl md:text-3xl">
            Obezbeđujemo siguran i pažljiv prevoz vašeg automobila, motora ili
            druge vrste vozila. Naša oprema i stručnost garantuju da će vaše
            vozilo biti prevezeno bezbedno i što je najvažnije, bez čekanja.
          </p>
          <p className="text-xl md:text-3xl">
            Dostupni smo 24/7 i spremni da vam brzo i efikasno pomognemo u
            svakom trenutku.
          </p>
        </div>
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
                <p className="text-xl md:text-2xl">{data.text}</p>
                <Image
                  src={data.image}
                  width={300}
                  height={300}
                  alt="slep puric"
                  className="w-[90%] md:w-[400px] rounded-2xl object-cover aspect-square"
                />
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={"/IMG-2a0703ecf9baa51aa8e93a467dd9b97d-V.jpg"}
        width={1000}
        height={500}
        alt="slep cacak"
        className=" w-full aspect-[5/2] object-cover"
      />
    </div>
  );
};

export default Page;
