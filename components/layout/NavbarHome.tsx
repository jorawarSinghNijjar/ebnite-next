import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import FilledButton from "../Buttons/FilledButton";

const navLinkArr = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  // { name: "Pricing", href: "/pricing" },
  { name: "Career", href: "/career" },
  // { name: "About Us", href: "/about-us" },
  // { name: "Tech", href: "/tech" },
  // { name: "Blog", href: "/blog" },
];

const NavbarHome = () => {
  const [sticky, setSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const changeNavbarColor = () => {
    console.log("sticky", sticky);

    if (window.scrollY > window.screen.height - 84) {
      setSticky?.(true);
    } else {
      setSticky?.(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <nav
      className={`${
        sticky
          ? "fixed drop-shadow-lg bg-white text-primary"
          : "absolute bg-transparent text-slate-200"
      } top-0 z-10 w-full py-3 px-5 lg:px-20 flex flex-row justify-between`}
    >
      <div className="float-left">
        <Link href="/">
          <p className="py-2 font-bold">Ebnite</p>
        </Link>
      </div>
      <div className="float-right">
        {/* <ul className="list-none flex gap-x-5">
          {navLinkArr.map(({ name, href }, index) => (
            <div key={index} className="">
              <li className="relative py-2 font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-slate-200 before:transition-width before:ease-in-out before:duration-500 hover:before:w-full">
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
        </ul> */}
        <ul className="list-none hidden lg:flex h-full gap-x-5 items-center">
          {navLinkArr.map(({ name, href }, index) => (
            <div key={index} className="">
              <li className="relative py-2 font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-slate-200 before:transition-width before:ease-in-out before:duration-500 hover:before:w-full">
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
            <BiMenu className="text-5xl cursor-pointer text-primary" />
          )}
        </div>
        <div
          className={`${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } fixed lg:hidden justify-center z-10 top-0 right-0 bg-dark text-light  min-h-screen px-14 py-32 min-w-[350px] md:min-w-[400px] transition-all duration-700`}
        >
          <div className="list-none flex flex-col">
            <ul>
              {navLinkArr.map(({ name, href }, index) => (
                <div key={index} className="">
                  <li className="relative max-w-max mx-auto py-2 text-xl font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-light before:transition-width before:ease-in-out before:duration-500 hover:before:w-full">
                    <Link href={href}>{name}</Link>
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

export default NavbarHome;
