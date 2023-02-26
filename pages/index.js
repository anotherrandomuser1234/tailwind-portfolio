import Head from "next/head";
import {
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsSpotify } from "react-icons/bs";
import { useState } from "react";
import me from "../public/marksamurai.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mark Grech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Under Construction</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-700 text- to-cyan-200 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Mark Grech
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full stack software developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Interested in all kinds of software development, philosophy, psychology, motorbikes, fitness and music
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin class="cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/mark-grech-118ba6145/")} />
              <BsSpotify class="cursor-pointer" onClick={() => window.open("https://open.spotify.com/user/1166235913?si=fc5d8a44c93144cf")} />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={me} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
