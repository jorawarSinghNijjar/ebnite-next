import Image from "next/image";
import Link from "next/link";
import FilledButton from "../Buttons/FilledButton";
import Location from "../Location/Location";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useAppContext } from "@/context/AppContext";

const Footer = () => {
  const {setShowBookCallModal} = useAppContext();
  return (
    <footer className="relative bg-dark mt-32">
      <div className="py-20 px-5 md:px-20 bg-dark xl:max-w-[1460px] xl:mx-auto">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between ">
          <div className="w-full md:w-1/2 flex flex-col gap-y-10 mb-10">
            <div className="text-4xl font-extralight text-tertiary">EBNITE</div>
            <h6 className=" text-5xl md:text-6xl font-bold text-light">
              Want to talk about your project?
            </h6>
            <FilledButton
              size="small"
              className="uppercase w-max bg-tertiary text-dark"
              onClick={() => setShowBookCallModal(true)}
            >
              Let&apos;s schedule a call
            </FilledButton>
          </div>
          <div className="flex flex-col gap-y-10 items-start lg:items-end">
            <div className="w-full md:w-3/4 flex flex-col gap-y-10 items-start lg:items-end">
              <Location
                address="#1014 - 4789 YONGE ST
                Toronto, Ontario M2N0G3"
                phone="+1 431-276-9801"
                email="info@ebnite.com"
                imageSrc="/static/images/pages/footer/toronto.png"
              />  
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-20 px-5 md:px-20 bg-darker flex flex-col md:flex-row justify-between gap-y-4 xl:max-w-[1460px] xl:mx-auto">
        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Global
          </p>
          <Link href="/work">Work</Link>
          {/* <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/news">News</Link> */}
          <Link href="/career">Careers</Link>
        </div>

        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Technology
          </p>
          <Link href="/">Full Stack Apps</Link>
          <Link href="/">CRM</Link>
          <Link href="/">Artificial Intelligence</Link>
          <Link href="/">Open Source</Link>
        </div>

        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Services
          </p>
          <Link href="/">Product Scope</Link>
          <Link href="/">UX/UI</Link>
          <Link href="/">MVP Builder</Link>
          <Link href="/">Dedicated Teams</Link>
        </div>

        <div className="flex flex-col gap-y-1 [&>a]:text-light/[0.6] [&>a]:font-normal hover:[&>a]:text-light/[0.3]">
          <p className="text-base font-semibold uppercase text-lighter">
            Build
          </p>
          <Link href="/">Play with Pricing</Link>
          <Link href="/">Book a Call</Link>
        </div>
      </div>

      <div className="w-full py-6 px-5 md:px-20 bg-dark flex flex-col gap-2 md:flex-row justify-between text-lighter xl:max-w-[1460px] xl:mx-auto">
        <p className="order-2 md:order-1 text-light font-medium">
          © 2023 Ebnite.com all rights reserved.
        </p>
        <div className="flex flex-row gap-6 md:justify-end">
          <Link href="/"><BsTwitter className="text-light text-xl" target="_blank"/></Link>
          <Link href="/"><BsFacebook className="text-light text-xl" target="_blank"/></Link>
          <Link href="https://www.linkedin.com/company/ebnite/" target="_blank"><BsLinkedin className="text-light text-xl"/></Link>
          <Link href="https://www.instagram.com/ebnite/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"><BsInstagram className="text-light text-xl" target="_blank"/></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
