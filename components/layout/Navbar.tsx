import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import FilledButton from "../Buttons/FilledButton";
// import { useMediaQuery } from "react-responsive";

const navLinkArr = [
  // {name: "Home", href:"/"},
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  // { name: "Pricing", href: "/pricing" },
  { name: "Career", href: "/career" },
  // { name: "About Us", href: "/about-us" },
  // { name: "Tech", href: "/tech" },
  // { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  // const lgAbove = useMediaQuery({ query: "(min-width: 1024px)" });
  // const smAbove = useMediaQuery({ query: "(min-width: 640px)" });
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 drop-shadow-lg bg-white text-primary z-40 w-full px-6 lg:px-20 py-3 xl:py-5 flex flex-row justify-between`}
    >
      <div className="">
        <Link href="/">
          <p className="font-bold">
            <Image
              src="/static/images/logo/logo-black-no-bg.png"
              alt="testimonial"
              width={100}
              height={40}
              className="max-h-[70px] object-cover"
            ></Image>
          </p>
        </Link>
      </div>
      <div className="">
        <ul className="list-none hidden lg:flex h-full gap-x-5 items-center">
          {navLinkArr.map(({ name, href }, index) => (
            <div key={index} className="">
              <li className="relative py-2 font-medium xl:text-2xl before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-slate-200 before:transition-width before:ease-in-out before:duration-500 hover:before:w-full">
                <Link href={href}>{name}</Link>
              </li>
            </div>
          ))}
          <li className="mx-6">
            <FilledButton
              size="small"
              className="bg-secondary text-slate-100 uppercase"
            >
              <Link href="/talk-to-us">Book a call</Link>
            </FilledButton>
          </li>
        </ul>
        {/* Tablet Nav */}
        <div
          className="sm:block lg:hidden absolute z-30 right-5 top-3"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? (
            <AiOutlineCloseCircle className="text-5xl text-light cursor-pointer" />
          ) : (
            <BiMenu className="text-5xl cursor-pointer" />
          )}
        </div>
        <div
          className={`${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden justify-center absolute z-10 top-0 right-0 bg-dark text-light  min-h-screen px-14 py-32 min-w-[350px] md:min-w-[400px] transition-all duration-700`}
        >
          <div className="list-none flex flex-col">
            <ul>
              {navLinkArr.map(({ name, href }, index) => (
                <div key={index} className="">
                  <li className="relative max-w-max mx-auto py-2 text-xl font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-light before:transition-width before:ease-in-out before:duration-500 hover:before:w-full">
                    <Link href={href} onClick={() => setDrawerOpen(!drawerOpen)}>{name}</Link>
                  </li>
                </div>
              ))}
            </ul>

            <li className="my-4 mx-auto">
              <FilledButton
                size="small"
                className="bg-secondary text-slate-100 uppercase"
              >
                <Link href="/talk-to-us">Book a call</Link>
              </FilledButton>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
