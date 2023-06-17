import Card from "@/components/Card/Card";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import SectionSubHeading from "@/components/SectionSubHeading/SectionSubHeading";
import TwoColGrid from "@/components/TwoColGrid/TwoColGrid";
import OutlinedButton from "@/components/Buttons/OutlinedButton";
import Card2 from "@/components/Card/Card2";
import Card3 from "@/components/Card/Card3";
import { servicesCardList } from "@/data/servicesCard";
import { talkToUsCardList } from "@/data/talkToUsCard";
import { clientsLogoList } from "@/data/clientsLogo";
import { newsList } from "@/data/news";
import { useEffect } from "react";
import YoutubeVideo from "@/components/YoutubeVideo/YoutubeVideo";

import { AiFillPlayCircle } from "react-icons/ai";
import {BsArrowReturnRight} from "react-icons/bs";
import TextInput from "@/components/Input/TextInput";
import TextArea from "@/components/Input/TextArea";
import SelectInput from "@/components/Input/Select";
import FilledButton from "@/components/Buttons/FilledButton";

function resizeGridItem(item: any) {
  let grid = document.querySelector("#masonry-grid")!;
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  console.log("row Height", rowHeight);
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  console.log("row gap", rowGap);
  const rowSpan = Math.ceil(
    (item.querySelector(".card-content").getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap)
  );
  console.log("row span", rowSpan);
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  const allItems = document.getElementsByClassName("masonry-grid-item");
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

export default function Home() {
  useEffect(() => {
    window.addEventListener("load", resizeAllGridItems);
    window.addEventListener("resize", resizeAllGridItems);

    return () => {
      window.removeEventListener("resize", resizeAllGridItems);
      window.removeEventListener("load", resizeAllGridItems);
    };
  }, []);

  return (
    <>
      <main>
        {/* Navigation */}

        {/* ---------------------------------------------Hero Section ----------------------------------*/}

        {/* <video
        autoPlay
        loop
        muted
        id="hero-video"
        className="fixed -z-30 right-0 top-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/hero-video.mp4" type="video/mp4"></source>
      </video> */}
        {/* Video Overlay */}
        <div className="absolute -z-20 right-0 top-0 h-screen w-screen bg-tertiary bg-opacity-40"></div>

        <section className="clear-both absolute max-w-full px-20 bg-gradient-to-r from-primary from-5% py-40 h-screen left-0 top-0 -z-10">
          {/* Actual Content */}
          <h1 className="text-slate-100 text-7xl w-2/3 mb-10">
            Custom Product & Software Development Focused On Your Success
          </h1>
          <button className="bg-secondary text-slate-100 px-6 py-3 rounded-3xl">
            Book a call
          </button>
        </section>

        {/* ---------------------------------------------Services ----------------------------------*/}

        <section style={{ marginTop: "100vh" }}>
          <SectionHeading text="Services" />

          <SectionSubHeading
            text="We can help you bring your product to life - whether it&#39;s a
            Minimum Viable Product, UX/UI Services or help to scale your
            company."
          />

          <div className="grid gap-8 grid-cols-2 px-20">
            {servicesCardList.map(({ imageSrc, title, description }, index) => (
              <Card
                key={index}
                imageSrc={imageSrc}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>

        {/* ---------------------------------------------Testimonials ----------------------------------*/}
        <section className="relative pt-32 px-20">
          <div className="grid gap-8 grid-cols-2">
            <div className="flex items-center justify-center max-w-1/2">
              <Image
                src="https://picsum.photos/seed/picsum/500/300"
                alt="testimonial"
                width={500}
                height={300}
                className="rounded-2xl min-w-[400px] drop-shadow-2xl"
              ></Image>
            </div>
            <div className="p-5">
              <Image
                className="mb-8"
                src="/static/images/quote-left.png"
                alt="quote-left"
                width={48}
                height={48}
              />
              <p className="font-normal text-2xl leading-relaxed mb-8 ">
                We are very happy to work with Ebnite. The collaboration goes
                far beyond a standard IT service: with Ebnite we have a sparring
                partner that challenges us in our product decisions and is truly
                passionate about the results developed. The level of
                professionalism and dedication is exceptional in this industry
                and we are eager to strengthen our collaboration in the future.
              </p>
              <p className="text-xl text-secondary mb-8">
                <span className="font-semibold">Bruce Howard</span> – Company
                Name, Co-Founder
              </p>
              <p className="text-5xl font-thin">COMPANY LOGO</p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------Our Work ----------------------------------*/}
        <section className="relative pt-32 px-20">
          <SectionHeading text="Our Work" />
          <SectionSubHeading text="We are proud to work with truly innovative clients. Here are just a few of the companies we’ve had the privilege to work with." />

          <TwoColGrid
            category="Category"
            heading="Company Name"
            content="ABCD, developed in collaboration with AlixPartners, aims to assess the fair forward-looking value of real estate developments and the fair credit value of real estate developers – and to suggest underwriting overrides when lending to these counterparts."
          />
          <TwoColGrid
            category="Category"
            heading="Company Name"
            content="ABCD, developed in collaboration with AlixPartners, aims to assess the fair forward-looking value of real estate developments and the fair credit value of real estate developers – and to suggest underwriting overrides when lending to these counterparts."
            swapSides
          />
        </section>
        {/* ---------------------------------------------Let's talk ----------------------------------*/}
        <section className="relative pt-32 px-20">
          <div className="w-full flex flex-row justify-between">
            {talkToUsCardList.map(
              ({ imageSrc, title, description, buttonText }, index) => (
                <Card2
                  key={index}
                  imageSrc={imageSrc}
                  title={title}
                  description={description}
                  buttonText={buttonText}
                />
              )
            )}
          </div>
        </section>

        {/* ---------------------------------------------Clients ----------------------------------*/}
        <section className="relative pt-32 px-20">
          <SectionHeading text="Clients" />
          <SectionSubHeading text="Great Companies make us grow every day." />

          <div className="max-w-full flex flex-row justify-between space-y-10 flex-wrap">
            {clientsLogoList.map(({ imageSrc, title }, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt={title}
                width={250}
                height={200}
              ></Image>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------News ----------------------------------*/}
        <section className="relative pt-32 px-20">
          <SectionHeading text="News" />
          <SectionSubHeading text="Read the latest stories from our world." />

          <div
            className="grid grid-cols-[repeat(auto-fill,_minmax(320px,1fr))] gap-3 mb-16"
            id="masonry-grid"
          >
            {newsList.map(({ description, title, href }, index) => (
              <Card3
                key={index}
                title={title}
                description={description}
                href={href}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <OutlinedButton>See All News</OutlinedButton>
          </div>
        </section>

        {/* ---------------------------------------------Contact Us ----------------------------------*/}
        <section className="relative pt-32 px-20">
          <SectionHeading text="Talk to us and get your project moving!" />

          <div className="flex justify-between mt-16">
            <div className="w-1/2 font-medium text-black/[0.6] text-base leading-relaxed mb-8 ">
              <p className="text-sm mb-8">
                This is exactly what will happen after you submit your form:
              </p>
              <div className="relative overflow-hidden w-[500px] h-[300px] rounded-xl drop-shadow-2xl group mb-8">
                <Image
                  src="https://picsum.photos/seed/picsum/500/300"
                  alt="testimonial"
                  width={500}
                  height={300}
                  className="absolute transition ease-in-out duration-700 group-hover:scale-125"
                ></Image>
                <div className="absolute bg-tertiary w-full h-full opacity-25 cursor-pointer"></div>
                <AiFillPlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-primary cursor-pointer" />
              </div> 

              <ul>
                <li className="mb-4 flex"><BsArrowReturnRight className="text-2xl mr-4"/>Qui laborum ex deserunt duis dolore</li>
                <li className="mb-4 flex"><BsArrowReturnRight className="text-2xl mr-4"/>Qui laborum ex deserunt duis dolore</li>
                <li className="mb-4 flex"><BsArrowReturnRight className="text-2xl mr-4"/>Qui laborum ex deserunt duis dolore</li>
              </ul>
            </div>
            <div className="w-1/2 pl-8">
            <form action="" className="w-full">
              <TextInput type="text" placeholder="Name"/>
              <TextInput type="text" placeholder="Email"/>
              <TextArea placeholder="Project Description"/>
              <SelectInput>
                <option value="" disabled selected>Budget Size</option>
                <option value="">Less than 5k</option>
                <option value="">5k - 10k</option>
                <option value="">10k - 20k</option>
                <option value="">20k +</option>
              </SelectInput>
              <TextInput type="text" placeholder="How did you hear about us?"/>
              <FilledButton size="medium">Book a call</FilledButton>
            </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
