import { IconType } from "react-icons";
import { BsTruckFlatbed } from "react-icons/bs";
import { GiTowTruck } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { LiaCarCrashSolid } from "react-icons/lia";
import { Ri24HoursLine } from "react-icons/ri";
import { GiFarmTractor } from "react-icons/gi";
import { GiForklift } from "react-icons/gi";
import { FaCarCrash } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiMoneyWavyBold } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { PiMotorcycleFill } from "react-icons/pi";
import image from "@/node_modules/next/image";
import { link } from "fs";
import { title } from "process";
import { text } from "stream/consumers";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },

  {
    title: "Usluge",
    link: "/usluge",
    list: [
      {
        title: "Šlep automobila",
        link: "/usluge#Šlep automobila",
      },
      {
        title: "Šlep motora i skutera",
        link: "/usluge#slepmotora",
      },
      {
        title: "Prevoz vozila iz inostranstva",
        link: "/usluge#slepinostranstvo",
      },
      {
        title: "Pomoć na putu 0-24h",
        link: "/usluge#pomocnaputu",
      },
      {
        title: "Šlep oštećenih vozila",
        link: "/usluge#slephavarisanog",
      },
      {
        title: "Izvlačenje vozila sajlom",
        link: "/usluge#izvlacenjesajlom",
      },
      {
        title: "Prevoz tereta",
        link: "/usluge#sleptereta",
      },
      {
        title: "Prevoz radnih mašina",
        link: "/usluge#slepmasina",
      },
      {
        title: "Prevoz poljoprivrednih mašina",
        link: "/usluge#sleppoljoprivrednih",
      },
    ],
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Marko J.",
    image: "/hero1.jpg",
    description:
      "Brza i profesionalna usluga! Pozvao sam Šlep službu Purić nakon havarije, i za nekoliko minuta su bili tu. Vozilo su pažljivo odvezli do servisa bez ikakvih dodatnih oštećenja. Preporučujem ih svakome!“",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Izuzetno ljubazni i efikasni! Šlep služba Purić je brzo reagovala i bezbedno prevezla moj automobil nakon nesreće. Hvala na pomoći!",
  },
  {
    id: 3,
    title: "Luka M.",
    image: "/hero2.jpg",
    description:
      "Nisam očekivao da će usluga biti ovako brza i efikasna! Šlep služba Purić je brzo došla po moje vozilo i sigurno ga odvezla do servisa. Topla preporuka!",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Nakon nezgode, Šlep služba Purić je bila jedini kontakt koji mi je trebao. Profesionalni su i zaista vode računa o svakom detalju. Prezadovoljan sam!",
  },
  {
    id: 5,
    title: "Jovan K.",
    image: "/hero1.jpg",
    description:
      "Pouzdana usluga i brzo rešenje u hitnim situacijama. Šlep služba Purić je odradila fantastičan posao sa mojim vozilom. Preporučujem svim prijateljima!",
  },
];

export interface LineCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const lineCardsData: LineCardsData[] = [
  {
    id: 2,
    icon: MdOutlineRocketLaunch,
    title: "Ekspresno na terenu",
    text: "Vaš poziv odmah pokreće naš tim – stižemo u najkraćem mogućem roku.",
  },
  {
    id: 3,
    icon: GoPeople,
    title: "Stručan tim i savremena oprema",
    text: "Vaše vozilo je u sigurnim rukama – naši operateri koriste pouzdanu opremu i znanje iz prakse.",
  },
  {
    id: 4,
    icon: PiMoneyWavyBold,
    title: "Jasne i fer cene",
    text: "Bez iznenađenja – unapred znate koliko košta šlep, uz odličan odnos cene i kvaliteta.",
  },
  {
    id: 1,
    icon: Ri24HoursLine,
    title: "Dostupni non-stop, 24/7",
    text: "Bez obzira na doba dana ili noći, dolazimo brzo – gde god da se nalazite.",
  },
];

export interface Cards2Data {
  id: number;
  divName: string;
  icon: IconType;
  title: string;
  text: React.ReactNode;
  image: string;
  link: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    divName: "slepautomobila",
    icon: GiTowTruck,
    title: "Šlep automobila svih vrsta",
    text: (
      <>
        Bez obzira da li vam je automobil stao zbog kvara, udesa ili jednostavno
        treba prevoz na novu lokaciju <strong>šlep služba Laki Beograd</strong>{" "}
        je tu za vas non-stop, 24/7. Naš tim brzo izlazi na teren i stiže do vas
        u rekordnom roku, pružajući siguran i efikasan transport vozila.
        Koristimo savremena šlep vozila i opremu, prilagođenu različitim vrstama
        terena i vozila, kako bismo obezbedili bezbedan prevoz bez dodatnih
        oštećenja. Bilo da je reč o lokalnoj intervenciji ili dužoj relaciji,
        možete računati na nas za pouzdanu, profesionalnu i povoljnu uslugu
        šlepanja.
      </>
    ),
    image: "/IMG-a99948b4a911f9fae598b34ddf526169-V.jpg",
    link: "/usluge#Šlep automobila",
  },
  {
    id: 2,
    divName: "slepmotora",
    icon: PiMotorcycleFill,
    title: "Šlep motora i skutera",
    text: (
      <>
        <p>
          {" "}
          <strong> Bezbedan prevoz motocikala svih vrsta</strong>.
        </p>{" "}
        <p className="py-2">
          {" "}
          Motocikli zahtevaju poseban pristup pri transportu – zato koristimo
          prilagođenu opremu za sigurno učvršćivanje i zaštitu tokom vožnje.
          Bilo da je u pitanju kvar, nezgoda, odlazak na servis ili takmičenje,
          tu smo da obezbedimo brz i pažljiv šlep motora.
        </p>{" "}
        <p>
          {" "}
          Naš tim ima iskustva u radu sa svim vrstama dvotočkaša – od skutera do
          sportskih motora.{" "}
          <p>
            <strong> Vaš motor je sa nama u sigurnim rukama. </strong>
          </p>
        </p>
      </>
    ),
    image: "/138436.jpg",
    link: "/usluge#slepmotora",
  },

  {
    id: 4,
    divName: "slepinostranstvo",
    icon: IoCarSportOutline,
    title: "Prevoz vozila iz inostranstva",
    text: (
      <>
        <p>
          <strong>Pouzdan transport vozila iz inostranstva do Srbije.</strong>
        </p>{" "}
        <p className="py-2">
          {" "}
          Kupili ste automobil u inostranstvu ili vam je vozilo stalo van
          granica Srbije? Naš tim obezbeđuje siguran i efikasan šlep iz
          inostranstva, uz poznavanje svih procedura i dokumentacije. Bilo da se
          radi o kvaru, havariji ili uvozu vozila – obavljamo transport brzo,
          pouzdano i po konkurentnim cenama.
        </p>{" "}
        <p>
          {" "}
          Iskustvo u međunarodnom šlepu i odgovoran pristup čine nas idealnim
          partnerom za ovu vrstu usluge.
        </p>
      </>
    ),
    image: "/IMG-c863a7010fa73212eb2cb40c116339b5-V.jpg",
    link: "/usluge#slepinostranstvo",
  },
  {
    id: 5,
    divName: "pomocnaputu",
    icon: Ri24HoursLine,
    title: "Pomoć na putu 0-24h",
    text: (
      <>
        <strong> Hitna pomoć na putu – brzo rešenje za svaki kvar.</strong>
        <p className="py-2">
          {" "}
          Ako vam se desi problem tokom vožnje – poput praznog rezervoara,
          probušene gume, praznog akumulatora ili bilo kakvog kvara – naša
          mobilna ekipa stiže odmah. Dostupni smo 24/7, sa opremom za brzu
          intervenciju na licu mesta.
        </p>{" "}
        <p>
          Ukoliko kvar ne može da se reši odmah, organizujemo bezbedan šlep do
          servisa po vašem izboru. Na putu niste sami – mi smo tu da vas vratimo
          na put što pre.
        </p>
      </>
    ),
    image: "/2148257991.jpg",
    link: "/usluge#pomocnaputu",
  },

  {
    id: 7,
    divName: "slephavarisanog",
    icon: LiaCarCrashSolid,
    title: "Šlep oštećenih vozila",
    text: (
      <>
        <strong>
          Šlep havarisanih vozila – siguran transport nakon udesa.
        </strong>{" "}
        <p className="py-2">
          Oštećena vozila zahtevaju poseban pristup pri utovaru i prevozu.
          Koristimo specijalizovanu opremu i tehnike za bezbedan šlep
          havarisanih automobila, kombija i kamiona, bez dodatnog rizika po
          vozilo.
        </p>{" "}
        <p>
          Bez obzira na stepen oštećenja, vaš prevoz organizujemo pažljivo i
          profesionalno – od mesta nezgode do servisa ili druge lokacije.
        </p>
      </>
    ),
    image: "/7924.jpg",
    link: "/usluge#slephavarisanog",
  },
  {
    id: 9,
    divName: "izvlacenjesajlom",
    icon: FaCarCrash,
    title: "Izvlačenje sajlom",
    text: (
      <>
        <strong>Izvlačenje vozila iz nepristupačnih terena.</strong>
        <p className="py-2">
          {" "}
          Ako vam je vozilo zaglavljeno u blatu, snegu, pesku ili je sletelo sa
          puta, tu smo da pomognemo. Naš tim koristi jake sajle i namensku
          opremu za bezbedno izvlačenje, bez dodatnog oštećenja vozila.{" "}
        </p>{" "}
        <p>
          Brzo reagujemo, bez obzira na vremenske uslove i teren – vaše vozilo
          vraćamo na put sigurno i efikasno.
        </p>
      </>
    ),
    image: "/lallaoke-QE3l3VSM1vk-unsplash.jpg",
    link: "/usluge#izvlacenjesajlom",
  },
  {
    id: 6,
    divName: "sleptereta",
    icon: BsTruckFlatbed,
    title: "Prevoz tereta",
    text: (
      <>
        <strong>Specijalizovan prevoz lakih i teških tereta.</strong>
        <p className="py-2">
          Bilo da prevozite manje komercijalno vozilo, tešku građevinsku mašinu
          ili poljoprivrednu opremu, naš vozni park i oprema su spremni za
          siguran transport.
        </p>{" "}
        <p>
          Obavljamo šlep i prevoz svih vrsta tereta – od lakih dostavnih vozila
          do zahtevnih industrijskih jedinica, uz maksimalnu pažnju i
          efikasnost.
        </p>
      </>
    ),
    image: "/IMG-c863a7010fa73212eb2cb40c116339b5-V.jpg",
    link: "/usluge#sleptereta",
  },
  {
    id: 8,
    divName: "slepmasina",
    icon: GiForklift,
    title: "Transport radnih mašina",
    text: (
      <>
        <strong>Transport građevinskih i radnih mašina.</strong>{" "}
        <p className="py-2">
          Za prevoz bagera, viljuškara, rovokopača i druge građevinske opreme,
          potreban je pouzdan i prilagođen šlep.
        </p>{" "}
        <p>
          Naša služba raspolaže specijalnim kamionima i prikolicama za siguran
          transport glomaznih i teških mašina. Bez obzira da li vozimo do
          gradilišta, servisa ili nove lokacije, obezbeđujemo profesionalnu i
          bezbednu uslugu prevoza.
        </p>
      </>
    ),
    image: "/bruno-guerrero-AZTTsnldyhI-unsplash.jpg",
    link: "/usluge#slepmasina",
  },

  {
    id: 10,
    divName: "sleppoljoprivrednih",
    icon: GiFarmTractor,
    title: "Transport traktora i poljoprivredne mehanizacije",
    text: (
      <>
        <strong>Siguran transport poljoprivrednih mašina i opreme.</strong>
        <p className="py-2">
          Traktori, sejalice, kombajni i ostala poljoprivredna mehanizacija
          zahtevaju poseban pristup pri prevozu. Naš tim ima iskustva u
          rukovanju ovom vrstom opreme i koristi prilagođena vozila za bezbedan
          transport.
        </p>{" "}
        <p>
          Bilo da vozimo do farme, servisa ili radnog mesta – vaša mehanizacija
          stiže brzo i bez oštećenja.
        </p>
      </>
    ),
    image: "/zachary-musser-3TJRcnqBFxs-unsplash.jpg",
    link: "/usluge#sleppoljoprivrednih",
  },
];

export const ImagesAuto: string[] = [
  "/slep automobila.jpg",
  "/slep automobila (2).jpg",
  "/slep automobila (3).jpg",
  "/slep automobila (4).jpg",
  "/slep automobila (5).jpg",
  "/slep automobila (6).jpg",
  "/slep automobila (7).jpg",
  "/slep autobusa.jpg",
  "/slep autobusa (2).jpg",
  "/24h.jpg",
  "/24h (2).jpg",
  "/24h (3).jpg",
  "/24h (4).jpg",
  "/slep havarisanih.jpg",
  "/slep havarisanih (2).jpg",
  "/slep kamiona.jpg",
  "/slep kamiona (2).jpg",
  "/slep kombi.jpg",
  "/slep kombi (2).jpg",
  "/slep kombi (3).jpg",
  "/slep kombi (4).jpg",
  "/slep kombi (5).jpg",
  "/slep masina.jpg",
  "/slep masina (2).jpg",
  "/slep masina (3).jpg",
  "/slep masina (2).jpg",
  "/slep masina (2).jpg",
  "/slep masina (2).jpg",
];
