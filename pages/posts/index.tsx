import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill, BsSpotify } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="text-center p-10 py-10 mt-8"></div>

          <Card />
        </section>
      </main>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </div>
  );
}
