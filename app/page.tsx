import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import Hero from "@/components/Hero";
import Cards1 from "@/components/Cards1";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import { cards2Data, lineCardsData } from "@/constants/index";
import Cards2 from "@/components/Cards2";
import Image from "@/node_modules/next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <PozoviteNasOdmah />
      <Cards2 title={"Usluge"} data={cards2Data} />
      <BackgroundImage image={"/2151883947.jpg"} />
      <Cards1
        title={"Šlep služba Laki Beograd - Zvezdara"}
        data={lineCardsData}
      />
      {/* <CardWithImage />
      <PozoviteNasOdmahImage />
      <Testemonials /> */}
      <Image
        src={"/IMG-2a0703ecf9baa51aa8e93a467dd9b97d-V.jpg"}
        width={1000}
        height={500}
        alt="slep cacak"
        className=" w-full aspect-[5/2] object-cover"
      />
    </div>
  );
}
