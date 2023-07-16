import Link from "next/link";
import { useEffect, useState } from "react";
import FilledButton from "../Buttons/FilledButton";

const navLinkArr = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Career", href: "/career" },
  { name: "About Us", href: "/about-us" },
  { name: "Tech", href: "/tech" },
  { name: "Blog", href: "/blog" },
];

const NavbarHome = () => {
  const [sticky, setSticky] = useState(false);

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
          ? "fixed top-0 drop-shadow-lg bg-white text-primary"
          : "bg-transparent text-slate-200"
      } z-10 w-full py-5 px-20 flex flex-row justify-between`}
    >
      <div className="float-left">
        <Link href="/">
          <p className="py-2 font-bold">Ebnite</p>
        </Link>
      </div>
      <div className="float-right">
        <ul className="list-none flex gap-x-5">
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
      </div>
    </nav>
  );
};

export default NavbarHome;
