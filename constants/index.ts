import { IconType } from "react-icons";
import { GiWeight } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { GiTowTruck } from "react-icons/gi";
import { RiMotorbikeFill } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi2";
import { IoCarSportOutline } from "react-icons/io5";
import { LiaCarCrashSolid } from "react-icons/lia";
import { Ri24HoursLine } from "react-icons/ri";
import { GiFarmTractor } from "react-icons/gi";
import { GiForklift } from "react-icons/gi";
import { FaCarCrash } from "react-icons/fa";
import { GoStopwatch } from "react-icons/go";
import { FaRegMoneyBillAlt } from "react-icons/fa";

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
        title: "Šlep motora",
        link: "/usluge#slepmotora",
      },
      {
        title: "Šlep kombija i kamiona",
        link: "/usluge#slepkombija",
      },
      {
        title: "Šlep vozila iz inostranstva",
        link: "/usluge#slepinostranstvo",
      },
      {
        title: "Pomoc na putu 0-24h",
        link: "/usluge#pomocnaputu",
      },
      {
        title: "Prevoz lakog i teškog tereta",
        link: "/usluge#sleptereta",
      },
      {
        title: "Šlep havarisanog vozila",
        link: "/usluge#slephavarisanog",
      },
      {
        title: "Šlep radnih mašinah",
        link: "/usluge#slepmasina",
      },
      {
        title: "Izvlačenje sajlom vozila van puta",
        link: "/usluge#izvlacenjesajlom",
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
    id: 1,
    icon: Ri24HoursLine,
    title: "Dostupnost 24/7",
    text: "Bez obzira na vreme i lokaciju, stižemo što pre!",
  },
  {
    id: 2,
    icon: GoStopwatch,
    title: "Brza reakcija",
    text: "Na terenu smo u najkraćem roku nakon vašeg poziva.",
  },
  {
    id: 3,
    icon: GiSkills,
    title: "Iskusni vozači i moderna oprema",
    text: "Siguran i profesionalan prevoz vašeg vozila.",
  },
  {
    id: 4,
    icon: FaRegMoneyBillAlt,
    title: "Povoljne cene",
    text: "Transparentne i konkurentne cene bez skrivenih troškova.",
  },
];

export interface Cards2Data {
  id: number;
  divName: string;
  icon: IconType;
  title: string;
  text: string;
  image: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    divName: "slepautomobila",
    icon: GiTowTruck,
    title: "Šlep automobila",
    text: "Bilo da je u pitanju kvar, saobraćajna nezgoda ili potreba za prevozom vozila na drugu lokaciju, naša slep služba vam je na raspolaganju 24/7. Naš tim brzo reaguje i stiže na lokaciju u najkraćem roku, osiguravajući siguran i efikasan prevoz vašeg automobila. Koristimo modernu opremu i prilagođena vozila kako bismo osigurali bezbedan transport bez oštećenja. Bez obzira na udaljenost, možete se osloniti na nas za profesionalnu i pouzdanu uslugu.",
    image: "/slep automobila (6).jpg",
  },
  {
    id: 2,
    divName: "slepmotora",
    icon: RiMotorbikeFill,
    title: "Šlep motora",
    text: "Motocikli su osjetljivi na prevoz, pa je važno da se transport obavi pažljivo i bezbedno. Naša specijalizovana oprema omogućava sigurno pričvršćivanje motora, sprečavajući bilo kakva oštećenja tokom transporta. Bilo da je u pitanju kvar, nesreća ili prevoz na trke i servise, pružamo brzu i profesionalnu uslugu šlepanja motora. Naši vozači su iskusni i znaju kako pravilno rukovati dvotočkašima svih vrsta.",
    image: "/motorcycle-5895473_640.jpg",
  },
  {
    id: 3,
    divName: "slepkombija",
    icon: HiOutlineTruck,
    title: "Šlep kombija i kamiona",
    text: "Za veća vozila kao što su kombiji i kamioni, potrebna je adekvatna vučna oprema i snažna vučna vozila. Naša slep služba poseduje specijalizovana vozila sposobna za prevoz teških i velikih vozila u svim uslovima. Bilo da je u pitanju kvar, nezgoda ili potreba za premeštanjem vozila, pružamo siguran i efikasan transport na željenu lokaciju.",
    image: "/slep autobusa.jpg",
  },
  {
    id: 4,
    divName: "slepinostranstvo",
    icon: IoCarSportOutline,
    title: "Šlep vozila iz inostranstva",
    text: "Ako vam je potrebno da dovezete automobil iz inostranstva, mi ćemo se pobrinuti za brz i siguran transport po najpovoljnijim uslovima. Bez obzira da li ste kupili automobil, imate vozilo koje se pokvarilo u drugoj državi ili želite da ga prevezete nazad u Srbiju, naš tim ima iskustvo sa međunarodnim transportom i svim potrebnim procedurama.",
    image: "/slep automobila (5).jpg",
  },
  {
    id: 5,
    divName: "pomocnaputu",
    icon: Ri24HoursLine,
    title: "Pomoc na putu 0-24h",
    text: "Bilo da ste ostali bez goriva, imate probušenu gumu, problem sa akumulatorom ili bilo koji drugi kvar na putu, mi smo dostupni u bilo koje doba dana i noći. Naš tim dolazi na lice mesta sa opremom za brzo rešavanje problema, kako biste mogli da nastavite putovanje bez čekanja. Ako problem ne može da se reši na licu mesta, organizujemo šlep do najbližeg servisa.",
    image: "/24.jpg",
  },
  {
    id: 6,
    divName: "sleptereta",
    icon: GiWeight,
    title: "Prevoz lakog i teškog tereta",
    text: "Bez obzira da li se radi o prevozu manjih vozila ili teških transportnih jedinica, imamo odgovarajuću opremu i vozila za bezbedan prevoz svih vrsta tereta. Naša usluga obuhvata šlep laka komercijalna vozila, poljoprivrednu mehanizaciju, teške mašine i industrijsku opremu.",
    image: "/transport.jpg",
  },
  {
    id: 7,
    divName: "slephavarisanog",
    icon: LiaCarCrashSolid,
    title: "Šlep havarisanog vozila",
    text: "Vozila koja su pretrpela velika oštećenja u saobraćajnim nezgodama zahtevaju pažljiv transport kako bi se sprečila dodatna oštećenja. Naša specijalizovana vozila omogućavaju sigurno utovarivanje i prevoz havarisanih automobila, kombija i kamiona, bez obzira na stepen oštećenja.",
    image: "/slep havarisanih.jpg",
  },
  {
    id: 8,
    divName: "slepmasina",
    icon: GiForklift,
    title: "Šlep radnih mašina",
    text: "Radne mašine, kao što su bageri, viljuškari, rovokopači i druga građevinska oprema, često zahtevaju poseban transport. Naša slep služba poseduje specijalizovane kamione i prikolice koji mogu da prevezu teške i glomazne mašine do željene lokacije, bilo da se radi o gradilištu, servisu ili drugom mestu.",
    image: "/slep masina (3).jpg",
  },
  {
    id: 9,
    divName: "izvlacenjesajlom",
    icon: FaCarCrash,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Ako je vaše vozilo sletelo sa puta, zaglavilo u blatu, snegu ili pesku, nudimo uslugu izvlačenja pomoću jakih sajli i specijalizovane opreme. Naš tim je obučen da izvlači vozila iz teških terena bez dodatnih oštećenja. Bez obzira na vremenske uslove i teren, stižemo brzo i obezbeđujemo sigurno izvlačenje vozila.",
    image: "/pexels-mikebirdy-11985216.jpg",
  },
  {
    id: 10,
    divName: "sleppoljoprivrednih",
    icon: GiFarmTractor,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivredne mehanizacije, poput traktora, sejalica, kombajna i drugih mašina, zahteva posebnu opremu i stručno rukovanje. Naš tim ima iskustvo u transportu poljoprivrednih vozila i osigurava da mašine stignu bezbedno i na vreme do vaše farme ili radnog mesta.",
    image: "/slep traktora (4).jpg",
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
