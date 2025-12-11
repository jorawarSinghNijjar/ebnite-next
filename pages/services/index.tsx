import SingleAccordion from "@/components/Accordions/SingleAccordion";
import FilledButton from "@/components/Buttons/FilledButton";
import Card from "@/components/Card/Card";
import StatsCard from "@/components/Card/StatsCard";

import Heading2 from "@/components/Headings/Heading2";
import Heading3 from "@/components/Headings/Heading3";

import SubHeading1 from "@/components/SubHeading/SubHeading2";
import SubHeading2 from "@/components/SubHeading/SubHeading3";
import Image from "next/image";
import { ReactElement } from "react";

import TwoColCardV2 from "@/components/Card/TwoColCardV2";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { whyChooseUsCardList } from "@/data/whyChoseUsCard";
import { faqServicesList } from "./../../data/faqServices";
import { servicesCard2List } from "./../../data/servicesCard2";
import { statsCardServicesList } from "./../../data/statsCardServices";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";

function Services() {
  return (
    <>
      <section className="px-6 lg:px-20 mb-10 lg:mb-44">
        <div className="flex flex-col lg:flex-row">
          <div className="pr-4 order-2 lg:order-1">
            <Heading2>Services from Ebnite Technologies</Heading2>
            <SubHeading1>
              With our full range of digital solutions and development services,
              we can bring your ideas to life and maximize your value in any
              market.
            </SubHeading1>
            <FilledButton
              size="medium"
              className="bg-secondary text-slate-100 uppercase hidden lg:block"
            >
              Contact Us
            </FilledButton>
          </div>
          <Image
            src="/static/images/pages/services/hero.jpg"
            alt="services"
            width={600}
            height={500}
            className="w-full object-cover order-1 lg:order-2 lg:max-w-[60%] md:relative md:left-0 lg:z-0 lg:h-full"
          />
        </div>
      </section>
      <section className="px-6 lg:px-20 mb-16">
        <div className="w-full lg:w-1/2">
          <Heading3>Our core services</Heading3>
          <SubHeading2>
            Complex product design, comprehensive technology roadmaps,
            end-to-end engineering, and scalable solutions.
          </SubHeading2>
        </div>
        <TwoColCardV2
          title="Software engineering"
          description="Over 5 years in the field, we’ve done it all. Extensive expertise and well-oiled processes allow us to develop the best products in a timely and cost-effective manner."
          buttonText="Learn More"
          imageSrc="/static/images/pages/services/two-col-card-1.png"
          className="mb-10 bg-lighter"
        />

        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          {servicesCard2List.map(({ title, imageSrc, description }, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              imageSrc={imageSrc}
              buttonText="Learn more"
              className="items-start"
            ></Card>
          ))}
        </div>

        <TwoColCardV2
          title="Project management"
          description="Effective coordination of the project is the foundation of its success. We provide services of well-equipped, highly proficient project managers."
          buttonText="Learn More"
          imageSrc="/static/images/pages/services/project-management.png"
          className="mb-10 bg-lighter"
        />

        <TwoColCardV2
          title="Growth marketing"
          description="Make your product visible in the European & US markets! We offer the services of the Growth department for clients who would like assistance in their projects’ roll-out."
          buttonText="Learn More"
          imageSrc="/static/images/pages/services/growth.png"
          className="mb-10 bg-lighter"
          reverse
        />

        <TwoColCardV2
          title="Sales Management"
          description="Elevate your sales strategy with our Sales Management Software. Streamline processes, track performance, and drive growth, all in one intuitive platform. Make informed decisions backed by real-time insights. Try it today for sales success tomorrow."
          buttonText="Learn More"
          imageSrc="/static/images/pages/services/sales-management.png"
          className="mb-10 bg-lighter"
        />
      </section>
      <section className="px-6 lg:px-20 mb-10 lg:mb-16">
        <Heading3>FAQs</Heading3>
        <div className="grid gap-8 lg:grid-cols-2">
          {faqServicesList.map(({ title, description }, index) => (
            <SingleAccordion
              key={index}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>
      <section className="px-6 lg:px-20 mb-10 lg:mb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="lg:p-5">
            <Heading3>Who we are</Heading3>
            <SubHeading2>
              Ebnite Technologies is a full-cycle app & software development
              company which covers specific client business needs and tries to
              manage them with the help of the best possible technology
              solutions.
            </SubHeading2>
            <SubHeading2>
              Since 2019, we have been inventing digital solutions, helping
              startups and SMBs come out on top in their markets.
            </SubHeading2>
            <p className="font-normal text-2xl leading-relaxed mb-8 "></p>
          </div>
          <div className="flex items-center justify-center max-w-1/2">
            <Image
              src="/static/images/pages/services/who-we-are.png"
              alt="testimonial"
              width={500}
              height={300}
              className="lg:min-w-[400px]"
            ></Image>
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-20 mb-10 lg:mb-16">
        <div className="flex flex-col gap-4 lg:flex-row justify-between">
          {statsCardServicesList.map(({ numberData, desc, suffix }, index) => (
            <StatsCard key={index} numberData={numberData} desc={desc} suffix={suffix} />
          ))}
        </div>

        {/* <div>
            <AnimatedCounter start={0} end={1000} duration={3000}></AnimatedCounter>
        </div> */}
      </section>
      <section className="px-6 lg:px-20 mb-10 lg:mb-16">
        <Heading3>Why choose Ebnite Technologies</Heading3>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-14">
          {whyChooseUsCardList.map(
            ({ imageSrc, title, description }, index) => (
              <Card
                key={index}
                title={title}
                description={description}
                imageSrc={imageSrc}
                className="items-start"
              ></Card>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Services;

Services.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <main className="mt-44 xl:max-w-[1460px] xl:mx-auto">{page}</main>
      <Footer />
    </>
  );
};
