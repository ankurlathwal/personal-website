import { FC } from "react";
import Image from "next/image";

interface props {}

const Intro: FC<props> = () => (
  <div className="container laptop:wrapper bg-light-grey">
    <div className="mx-16 laptop:w-1/2 laptop:mx-auto">
      <div className="py-64 flex flex-col laptop:flex-row justify-center items-center gap-32">
        <div className="laptop:w-3/4">
          <Image
            className="rounded-full"
            src="/images/dp.jpeg"
            alt="Ankur Lathwal"
            height="176"
            width="176"
          />
        </div>
        <div>
          <h1 className="font-bold text-40">
            Welcome to my world!&nbsp;&#128075;
          </h1>
          <div className="font-regular text-justify">
            I am a Full Stack Developer based in Melbourne, Australia. I started
            my career in the US, where I built products for budding startups. I
            love building products that bring ideas to life. This is my personal
            blog where I will share my daypto-day experiences solving problems.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
