import Image from "next/image";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-4xl font-bold">Josh Kennedy</h1>
        <h3 className="text-xl font-semibold">
          Versatile Software Engineer and Entrepreneur
        </h3>
      </div>
      <Image
        className="rounded-full"
        src="/josh_portrait.jpg"
        alt="Josh lookin fresh and ready to code"
        width={150}
        height={150}
        priority
      />
      <ol className="list-inside list-disc text-sm/6 max-w-xl text-pretty text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="tracking-[-.01em]">
          Full stack developer with extensive experience in building scalable
          and efficient web applications
        </li>
        <li className="tracking-[-.01em]">Based in Kansas City</li>
        <li className="tracking-[-.01em]">
          Passionate about spreading knowledge and fostering growth
        </li>
        <li className="tracking-[-.01em]">
          Currently a front-end developer in ed-tech, crafting solutions with
          React, TypeScript, Tailwind, TanStack Query, TanStack Router, and
          Jotai
        </li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/about"
        >
          <ChevronRight />
          Read More
        </Link>
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px]"
          href="/contact"
        >
          <Mail />
          Contact
        </Link>
      </div>
    </>
  );
}
