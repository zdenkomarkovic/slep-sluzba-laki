import Image from "@/node_modules/next/image";
import React from "react";

const BackgroundImage = ({ image }: { image: string }) => {
  return (
    <div className="relative flex min-h-[30dvh]">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" /> */}
      <Image
        src={image}
        alt="slep laki"
        fill
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default BackgroundImage;
