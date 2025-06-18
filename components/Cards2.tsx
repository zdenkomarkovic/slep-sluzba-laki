import { Cards2Data } from "@/constants/index";
import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import Link from "@/node_modules/next/link";

const Cards2 = ({ title, data }: { title: string; data: Cards2Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-16 border-b-2 space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item) => {
            return (
              <Link key={item.id} href={item.link}>
                <MotionComponent1>
                  <OneCard item={item} />
                </MotionComponent1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards2;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full">
      <CardContent className="flex flex-col gap-1 items-center text-xl md:text-2xl text-center">
        {" "}
        <IconComponent className="text-4xl md:text-6xl text-primary" />
        <p className="">{item.title}</p>
      </CardContent>
    </Card>
  );
};
