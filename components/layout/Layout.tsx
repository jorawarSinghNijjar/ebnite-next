import { NavbarContext } from "@/context/NavbarContext";
import Footer from "./Footer";
import Navbar from "./NavbarHome";
import { useContext, useEffect } from "react";
import { useNavbarContext } from "@/context/NavbarContext";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({
  children,
}: LayoutProps) {
  const { stickyFromTop } = useNavbarContext() ?? {};

  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <main className={`${stickyFromTop ? "pt-16" : ""}`}>{children}</main>
      <Footer />
    </>
  );
}
