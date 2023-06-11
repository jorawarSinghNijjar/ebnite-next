import Card from "@/components/card/Card";
import Image from "next/image";
import Link from "next/link";

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

        <section>
          <h2
            className="text-slate-950 text-6xl text-center font-semibold mb-8"
            style={{ marginTop: "100vh" }}
          >
            Services
          </h2>
          <h3 className="text-slate-700 text-3xl text-center font-medium w-1/2 mx-auto mb-28">
            We can help you bring your product to life - whether it&#39;s a
            Minimum Viable Product, UX/UI Services or help to scale your
            company.
          </h3>

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
      </main>
    </>
  );
}
