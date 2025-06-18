import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import CardWithImage from "@/components/CardWithImage";
import Hero from "@/components/Hero";
import Cards1 from "@/components/Cards1";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import { cards2Data, lineCardsData } from "@/constants/index";
import Cards2 from "@/components/Cards2";
import Image from "@/node_modules/next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PozoviteNasOdmah />
      <About />

      <Cards2 title={"Usluge"} data={cards2Data} />
      <BackgroundImage image={"/pozadina5.avif"} />
      <Cards1 title={"Šlep Čačak Purić 032"} data={lineCardsData} />
      <CardWithImage />
      <PozoviteNasOdmahImage />
      <Testemonials />
      <Image
        src={"/black.jpg"}
        width={1000}
        height={500}
        alt="slep cacak"
        className=" w-full aspect-[3/2] object-cover"
      />
    </div>
  );
}
