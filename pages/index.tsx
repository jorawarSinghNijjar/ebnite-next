import Card from "@/components/Card/Card";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import SectionSubHeading from "@/components/SectionSubHeading/SectionSubHeading";
import TwoColGrid from "@/components/TwoColGrid/TwoColGrid";
import OutlinedButton from "@/components/Buttons/OutlinedButton";
import Card2 from "@/components/Card/Card2";

export default function Home() {
  const servicesCardList = [
    {
      imageSrc: "https://picsum.photos/seed/picsum/100/100",
      title: "Product Scope",
      description:
        " A Structured 7-day Process to align your product vision with your business goals.",
    },
    {
      imageSrc: "https://picsum.photos/seed/picsum/100/100",
      title: "Product Scope",
      description:
        " A Structured 7-day Process to align your product vision with your business goals.",
    },
    {
      imageSrc: "https://picsum.photos/seed/picsum/100/100",
      title: "Product Scope",
      description:
        " A Structured 7-day Process to align your product vision with your business goals.",
    },
    {
      imageSrc: "https://picsum.photos/seed/picsum/100/100",
      title: "Product Scope",
      description:
        " A Structured 7-day Process to align your product vision with your business goals.",
    },
  ];

  const talkToUsCardList = [
    {
      imageSrc: "https://picsum.photos/seed/picsum/340/300",
      title: "Building MVP?",
      description:
        "Looking to build fast and reduce your time to market? Drop me a message. Together we can find the core set of features to gather user information and iteratively create the best possible product.",
      buttonText: "Email Karl",
    },
    {
      imageSrc: "https://picsum.photos/seed/picsum/340/300",
      title: "A Simple Conversation?",
      description:
        "Looking to build fast and reduce your time to market? Drop me a message. Together we can find the core set of features to gather user information and iteratively create the best possible product.",
      buttonText: "Email Karl",
    },
    {
      imageSrc: "https://picsum.photos/seed/picsum/340/300",
      title: "Non IT?",
      description:
        "Looking to build fast and reduce your time to market? Drop me a message. Together we can find the core set of features to gather user information and iteratively create the best possible product.",
      buttonText: "Email Karl",
    },
  ];

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
      </main>
    </>
  );
}
