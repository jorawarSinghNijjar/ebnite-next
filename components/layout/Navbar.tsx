import Link from "next/link";
import styles from './navbar.module.css'

function Navbar() {
  const navLinkArr = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Career", href: "/career" },
    { name: "About Us", href: "/about-us" },
    { name: "Tech", href: "/tech" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <nav className="max-w-full pt-10 px-20 flex flex-row justify-between bg-transparent text-slate-200">
      <div className="float-left">
        <Link href="/">
          <p className="py-2 font-bold">Ebnite</p>
        </Link>
      </div>
      <div className="float-right">
        <ul className="list-none flex gap-x-5">
          {navLinkArr.map(({ name, href }, index) => (
            <div key={index} className="">
               <li className="relative py-2 font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-slate-200 before:transition-width before:ease-in-out before:duration-1000 hover:before:w-full" >
                <Link href={href}>{name}</Link>
              </li>
            </div>
          ))}
          <li className="mx-6">
            <button className="bg-secondary px-4 py-2 rounded-3xl hover:scale-x-105 transition">
              <Link href="/talk-to-us">Book a call</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
