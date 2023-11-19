import Link from "next/link";
import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { DarkModeContext } from "../contexts/DarkModeContext";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

export interface Link {
  href: string;
  label: string;
}
export interface HeaderProps {
  className?: string;
}

export default function Header(props: HeaderProps) {
  const { className } = props;

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log("🚀 ~ file: Header.tsx:21 ~ Header ~ darkMode:", darkMode)

  const router = useRouter();

  const isLinkActive = (href: string) => {
    return router.pathname === href;
  };

  const links: Link[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/work",
      label: "Career",
    },
    // {
    //   href: "/posts",
    //   label: "Posts",
    // },
  ];

  const backgroundColor = darkMode ? "bg-teal-900" : "bg-teal-500";

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className={`left-0 fixed flex flex-wrap items-center justify-between ${backgroundColor} p-6 w-full`}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Mark Grech
          </span>
        </div>
        <div className="lg:hidden">
          <button
            title="foo"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          {links.map((link) => (
            <Link href={link.href}>
              <p
                className={`cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${
                  isLinkActive(link.href) ? "text-white" : ""
                })}`}
              >
                {link.label}
              </p>
            </Link>
          ))}
          <div className="flex ml-auto">
            <a
              href="mark_grech_latest_cv.pdf"
              className={twMerge(
                "inline-block ml-auto text-sm",
                "px-4 py-2 leading-none border rounded text-white border-white",
                "hover:border-transparent hover:text-teal-500 hover:bg-white mt-4",
                "lg:mt-0 mr-5"
              )}
            >
              Download Resume
            </a>

            <BsFillMoonStarsFill
              onClick={toggleDarkMode}
              className="cursor-pointer text-2xl ml-auto dark:text-white"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
