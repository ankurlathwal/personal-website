import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface props {}

const Nav: FC<props> = () => {
  return (
    <nav className="bg-black text-white font-bold text-24 leading-32 py-16 laptop:py-0 laptop:h-56">
      <div className="flex flex-col laptop:flex-row gap-y-16 text-center laptop:text-left justify-center align-middle py-8 gap-x-48">
        <Link href="/">
          <a>
            <div className="flex justify-center">
              <span>👨‍💻</span>
              <span className="pl-8">Ankur Lathwal</span>
            </div>
          </a>
        </Link>
        <Link href="/blog">
          <a className="bg-grey hover:bg-yellow px-16">Blog</a>
        </Link>
        <Link href="/projects">
          <a className="bg-grey hover:bg-yellow  px-16">Projects</a>
        </Link>
        <Link href="/about">
          <a className="bg-grey hover:bg-yellow  px-16">About Me</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
