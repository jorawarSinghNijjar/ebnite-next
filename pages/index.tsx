import Image from "next/image";

import OutlinedButton from "@/components/Buttons/OutlinedButton";

import Heading2 from "@/components/Headings/Heading2";
import SubHeading1 from "@/components/SubHeading/SubHeading1";
import TwoColGrid from "@/components/TwoColGrid/TwoColGrid";
import { clientsLogoList } from "@/data/clientsLogo";
import { newsList } from "@/data/news";
import { servicesCardList } from "@/data/servicesCard";
import { talkToUsCardList } from "@/data/talkToUsCard";
import { ReactElement, useEffect } from "react";

import ChatbotV1 from "@/components/Chatbot/ChatbotV1";
import SelectInput from "@/components/Input/SelectInput";
import TextArea from "@/components/Input/TextArea";
import TextInput from "@/components/Input/TextInput";

import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import { NextPageWithLayout } from "./_app";
import FilledButton from "./../components/Buttons/FilledButton";
import Card2 from "@/components/card/Card2";
import Card3 from "@/components/card/Card3";
import NavbarHome from "@/components/layout/NavbarHome";
import Footer from "@/components/layout/Footer";
import Card from "@/components/card/Card";

// function resizeGridItem(item: any) {
//   let grid = document.querySelector("#masonry-grid")!;
//   const rowHeight = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
//   );
//   // console.log("row Height", rowHeight);
//   const rowGap = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
//   );
//   // console.log("row gap", rowGap);
//   const rowSpan = Math.ceil(
//     (item.querySelector(".card-content").getBoundingClientRect().height +
//       rowGap) /
//       (rowHeight + rowGap)
//   );
//   item.style.gridRowEnd = "span " + rowSpan;
// }

// function resizeAllGridItems() {
//   const allItems = document.getElementsByClassName("masonry-grid-item");
//   for (let x = 0; x < allItems.length; x++) {
//     resizeGridItem(allItems[x]);
//   }
// }

const Home: NextPageWithLayout = () => {
//   useEffect(() => {
//     window.addEventListener("load", resizeAllGridItems);
//     window.addEventListener("resize", resizeAllGridItems);

//     return () => {
//       window.removeEventListener("resize", resizeAllGridItems);
//       window.removeEventListener("load", resizeAllGridItems);
//     };
//   }, []);

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
        <div className="absolute -z-20 right-0 top-0 lg:h-screen w-screen bg-tertiary bg-opacity-40"></div>

        <section className="clear-both absolute max-w-full px-5 py-20 lg:px-20 lg:py-40  h-full lg:h-screen left-0 top-0 -z-10 flex flex-col justify-center bg-gradient-to-r from-primary from-5%  ">
          {/* Actual Content */}
          <div>
            <h1 className="text-slate-100 text-6xl lg:text-7xl w-full lg:w-2/3 mb-10">
              Custom Product & Software Development Focused On Your Success
            </h1>
            <FilledButton
              size="medium"
              className="bg-secondary text-slate-100 uppercase"
            >
              Book a call
            </FilledButton>
          </div>
        </section>

        {/* ---------------------------------------------Services ----------------------------------*/}

        <section className="my-10 px-6 pt-10 lg:pt-32 lg:px-20">
          <div className="w-full lg:w-3/4 mx-auto text-center">
            <Heading2>Services</Heading2>
            <SubHeading1>
              We can help you bring your product to life - whether its a Minimum
              Viable Product, UX/UI Services or help to scale your company.
            </SubHeading1>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {servicesCardList.map(({ imageSrc, title, description }, index) => (
              <Card
                key={index}
                imageSrc={imageSrc}
                title={title}
                description={description}
                className="items-center"
                textAlign="center"
                transition
              />
            ))}
          </div>
        </section>

        {/* ---------------------------------------------Testimonials ----------------------------------*/}
        <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center max-w-1/2">
              <Image
                src="https://picsum.photos/seed/picsum/500/300"
                alt="testimonial"
                width={500}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-2xl min-w-[320px] drop-shadow-2xl"
              ></Image>
            </div>
            <div className="p-0">
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
        <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
          <div className="w-full lg:w-3/4 mx-auto text-center">
            <Heading2>Our Work</Heading2>
            <SubHeading1>
              We can help you bring your product to life - whether it&#39;s a
              Minimum Viable Product, UX/UI Services or help to scale your
              company.
            </SubHeading1>
          </div>
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
        <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
          <div className="w-full flex flex-col gap-12 lg:flex-row lg:justify-between">
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
        <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
          <div className="w-full mx-auto text-center lg:w-3/4 ">
            <Heading2>Clients</Heading2>
            <SubHeading1>Great Companies make us grow every day.</SubHeading1>
          </div>

          <div className="max-w-full flex flex-row justify-between items-center gap-4 lg:gap-8 flex-wrap">
            {clientsLogoList.map(({ imageSrc, title }, index) => (
              <Image
                key={index}
                src={imageSrc}
                alt={title}
                width={250}
                height={200}
                className="mx-auto max-w-[100px] md:max-w-[200px] lg:max-w-[300px]"
              ></Image>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------News ----------------------------------*/}
        <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
          <div className="w-full mx-auto text-center lg:w-3/4 ">
            <Heading2>News</Heading2>
            <SubHeading1>Read the latest stories from our world.</SubHeading1>
          </div>
          <div
            className="grid grid-cols-[repeat(auto-fill,_minmax(320px,1fr))] gap-8 mb-16"
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
            <OutlinedButton size="medium">See All News</OutlinedButton>
          </div>
        </section>

        {/* ---------------------------------------------Contact Us ----------------------------------*/}
        <section className="relative pt-10 lg:pt-32 px-6 lg:px-20">
          <div className="mx-auto text-left">
            <Heading2>Talk to us and get your project moving!</Heading2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-16">
            <div className="w-full lg:w-1/2 font-medium text-black/[0.6] text-base leading-relaxed mb-8 ">
              <p className="text-base mb-8">
                This is exactly what will happen after you submit your form:
              </p>
              <div className="relative overflow-hidden max-w-[300px] h-[200px] lg:max-w-[500px] lg:h-[300px] rounded-xl drop-shadow-2xl group mb-8">
                <Image
                  src="https://picsum.photos/seed/picsum/500/300"
                  alt="testimonial"
                  fill
                  object-fit="cover"
                  // width={500}
                  // height={300}
                  className="absolute transition ease-in-out duration-700 group-hover:scale-125"
                ></Image>
                <div className="absolute bg-tertiary w-full h-full opacity-25 cursor-pointer"></div>
                <AiFillPlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-primary cursor-pointer" />
              </div>

              <ul>
                <li className="mb-4 flex">
                  <BsArrowReturnRight className="text-2xl mr-4" />
                  Qui laborum ex deserunt duis dolore
                </li>
                <li className="mb-4 flex">
                  <BsArrowReturnRight className="text-2xl mr-4" />
                  Qui laborum ex deserunt duis dolore
                </li>
                <li className="mb-4 flex">
                  <BsArrowReturnRight className="text-2xl mr-4" />
                  Qui laborum ex deserunt duis dolore
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
              <form action="" className="w-full">
                <TextInput type="text" placeholder="Name" className="mb-8" />
                <TextInput type="text" placeholder="Email" className="mb-8" />
                <TextArea placeholder="Project Description" className="mb-8" />
                <SelectInput name="budget-size" className="mb-8">
                  <option value="" disabled defaultValue={1}>
                    Budget Size
                  </option>
                  <option value="lt-5k">Less than 5k</option>
                  <option value="5k-10k">5k - 10k</option>
                  <option value="10k-20k">10k - 20k</option>
                  <option value="20k+">20k +</option>
                </SelectInput>
                <TextInput
                  type="text"
                  placeholder="How did you hear about us?"
                  className="mb-8"
                />
                <FilledButton
                  size="medium"
                  className="bg-secondary text-slate-100 uppercase"
                >
                  Book a call
                </FilledButton>
              </form>
            </div>
          </div>
        </section>
        <ChatbotV1 />
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative min-h-screen lg:h-screen w-screen">
        <NavbarHome />
      </div>
      <main>{page}</main>
      <Footer />
    </>
  );
};
