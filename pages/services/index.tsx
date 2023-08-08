import SingleAccordion from "@/components/Accordions/SingleAccordion";
import FilledButton from "@/components/Buttons/FilledButton";
import Card from "@/components/card/Card";
import StatsCard from "@/components/card/StatsCard";
import TwoColCard from "@/components/card/TwoColCard";

import Heading2 from "@/components/Headings/Heading2";
import Heading3 from "@/components/Headings/Heading3";

import SubHeading1 from "@/components/SubHeading/SubHeading1";
import SubHeading2 from "@/components/SubHeading/SubHeading2";
import Image from "next/image";
import { ReactElement } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

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
        <TwoColCard
          title="Software engineering"
          description="Over 11 years in the field, we’ve done it all. Extensive expertise and well-oiled processes allow us to develop the best products in a timely and cost-effective manner."
          buttonText="Learn More"
          imageSrc="/static/images/test.jpg"
          className="mb-10 bg-light"
        />

        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          {[1, 2, 3, 4].map((elem, index) => (
            <Card
            key={index}
              title="Product Design"
              description="Envision the product, and we will design it. Take your idea from your head to the monitor to the market in a matter of months."
              imageSrc="/static/images/test.jpg"
              buttonText="Learn more"
              className="items-start"
            ></Card>
          ))}
        </div>

        <TwoColCard
          title="Software engineering"
          description="Over 11 years in the field, we’ve done it all. Extensive expertise and well-oiled processes allow us to develop the best products in a timely and cost-effective manner."
          buttonText="Learn More"
          imageSrc="/static/images/test.jpg"
          className="mb-10 bg-lighter"
        />

        <TwoColCard
          title="Software engineering"
          description="Over 11 years in the field, we’ve done it all. Extensive expertise and well-oiled processes allow us to develop the best products in a timely and cost-effective manner."
          buttonText="Learn More"
          imageSrc="/static/images/test.jpg"
          className="mb-10 bg-lighter"
          reverse
        />

        <TwoColCard
          title="Software engineering"
          description="Over 11 years in the field, we’ve done it all. Extensive expertise and well-oiled processes allow us to develop the best products in a timely and cost-effective manner."
          buttonText="Learn More"
          imageSrc="/static/images/test.jpg"
          className="mb-10 bg-lighter"
        />
      </section>
      <section className="px-6 lg:px-20 mb-10 lg:mb-16">
        <Heading3>FAQs</Heading3>
        <div className="grid gap-8 lg:grid-cols-2">
          {[1, 2, 3, 4].map((elem, index) => (
            <SingleAccordion
              key={index}
              title="How to reduce software development services cost?"
              description="Irure non laborum ullamco aliquip nostrud consectetur. Fugiat ea esse elit exercitation officia ex. Excepteur proident dolore labore culpa deserunt eiusmod et qui cupidatat ipsum cillum id id. Mollit ut dolor in culpa reprehenderit culpa enim minim."
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
              Since 2015, we have been inventing digital solutions, helping
              startups and SMBs come out on top in their markets.
            </SubHeading2>
            <p className="font-normal text-2xl leading-relaxed mb-8 "></p>
          </div>
          <div className="flex items-center justify-center max-w-1/2">
            <Image
              src="https://picsum.photos/seed/picsum/500/300"
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
          {[1, 2, 3, 4].map((elem, index) => (
            <StatsCard
              key={index}
              numberData="200+"
              desc="projects completed"
            />
          ))}
        </div>
      </section>
      <section className="px-6 lg:px-20 mb-10 lg:mb-16">
      <Heading3>Why choose Ebnite Technologies</Heading3>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-14">
          {[1, 2, 3].map((elem, index) => (
            <Card
              key={index}
              title="Eiusmod ex"
              description="Ut cillum occaecat nostrud est sint magna aliqua labore excepteur."
              imageSrc="/static/images/test.jpg"
              className="items-start"
            ></Card>  
          ))}
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
      <main className="mt-32 xl:max-w-[1460px] xl:mx-auto">{page}</main>
      <Footer />
    </>
  );
};
