"use client";
import React, { useEffect, useState } from "react";
import { FaViber } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { BsWhatsapp } from "react-icons/bs";

const Telefoni = () => {
  const [showCallButton, setShowCallButton] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const heroSection = document.querySelector(".hero");
    const footerSection = document.querySelector(".footer");
    const updateVisibility = (entries) => {
      const isHeroVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("hero") && entry.isIntersecting
      );

      const isFooterVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("footer") && entry.isIntersecting
      );
      setShowCallButton(!isHeroVisible && !isFooterVisible);
    };

    const observer = new IntersectionObserver(updateVisibility, {
      threshold: 0.1,
    });
    if (heroSection) observer.observe(heroSection);
    if (footerSection) observer.observe(footerSection);
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <div
      className={`
      ${
        showCallButton
          ? "opacity-100 translate-y-0 duration-500"
          : "opacity-0 translate-y-10 pointer-events-none duration-500"
      }
      fixed top-[50vh] right-4 z-50`}
    >
      <div
        className={` text-gray-100 text-nowrap text-[17px] lg:text-[17px] z-20 flex flex-col gap-1`}
      >
        <a href="viber://contact?number=%2B381601800700" className=" ">
          <FaViber className="bg-purple-600  rounded-lg w-7 h-7 hover:scale-110 p-1 " />
        </a>
        <a href="https://wa.me/381601800700" className="">
          <BsWhatsapp className="bg-green-700  rounded-lg w-7 h-7 hover:scale-110 p-1 " />
        </a>
      </div>
    </div>
  );
};

export default Telefoni;
