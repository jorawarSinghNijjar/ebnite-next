import SharpFilledButton from "@/components/Buttons/SharpFilledButton";
import ListCard from "@/components/card/ListCard";

import Heading3 from "@/components/Headings/Heading3";
import Heading4 from "@/components/Headings/Heading4";
import Heading5 from "@/components/Headings/Heading5";
import Heading6 from "@/components/Headings/Heading6";
import SelectInput from "@/components/Input/SelectInput";
import TextInput from "@/components/Input/TextInput";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import SubHeading2 from "@/components/SubHeading/SubHeading3";
import SubHeading3 from "@/components/SubHeading/SubHeading4";
import { benefitsList } from "@/data/benefitsList";
import Image from "next/image";
import { ReactElement } from "react";
import { BsSearch } from "react-icons/bs";

function Career() {
  return (
    <>
      <section className="w-full">
        <div className="w-full h-screen md:max-h-[750px] relative">
          <div className="absolute -z-10 right-0 top-0 h-screen md:h-[750px] w-screen bg-black bg-opacity-50"></div>
          <Image
            src="/static/images/pages/careers/hero.jpg"
            alt="services"
            width={2560}
            height={750}
            className="absolute -z-20 w-screen h-screen md:max-h-[750px] object-cover"
          />

          <div className="xl:max-w-[1460px] xl:mx-auto px-6 lg:px-20 pt-40 lg:pt-60 relative z-10">
            <Heading6 className="text-white">Careers</Heading6>
            <Heading4 className="text-white">JOIN OUR</Heading4>
            <Heading4 className="text-white -mt-5">Thriving Community</Heading4>
            <SubHeading2 className="text-white">
              A welcoming and diverse environment that fosters opportunities for
              personal growth.
            </SubHeading2>

            <div className="flex flex-col lg:flex-row gap-4">
              <TextInput type="text" placeholder="Search Jobs"></TextInput>
              <SelectInput name="job-category">
                <option value="" disabled>
                  Select Job Category
                </option>
                <option value="All">All</option>
                <option value="software developer">Software Developer</option>
                <option value="marketing">Marketing</option>
                <option value="IT Support">IT Support</option>
              </SelectInput>
              <SelectInput name="location">
                <option value="" disabled>
                  Select Location
                </option>
                <option value="All">All</option>
                <option value="toronto">Toronto</option>
                <option value="winnipeg">Winnipeg</option>
              </SelectInput>
              <button className="bg-secondary text-slate-100 uppercase min-w-[200px] py-3">
                <div className="flex flex-row justify-center gap-4 items-center">
                  <span>Search Job</span>
                  <span>
                    <BsSearch />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 bg-lighter">
        <div className="xl:max-w-[1460px] xl:mx-auto">
          <Heading4 className="text-center">
            Experience a diverse work space with collaborative learning
            opportunities with us!
          </Heading4>
          <div className="grid gap-8 lg:grid-cols-2 pt-10">
            <div className="flex items-center justify-center lg:max-w-1/2">
              <Image
                src="/static/images/pages/careers/feature-1.jpg"
                alt="testimonial"
                width={500}
                height={300}
                className="rounded-2xl max-w-full drop-shadow-2xl"
              ></Image>
            </div>
            <div className="">
              <p className="font-normal text-lg leading-relaxed mb-4 ">
                Our mission is to continually embrace cutting-edge technologies,
                and we take immense pride in fostering a vibrant culture of
                collaborative learning.
              </p>
              <p className="font-normal text-lg leading-relaxed mb-4 ">
                At Ebnite, we strive to offer a work environment brimming with
                fresh experiences and opportunities for individuals to excel. To
                cultivate an empowering atmosphere for our team, we nurture an
                interactive, inclusive, and dynamic workspace that places great
                value on accomplishments.
              </p>
              <p className="font-normal text-lg leading-relaxed mb-4 ">
                We uphold values of integrity, diversity, and generosity as
                integral aspects of our culture, aiming to instill these
                principles within our dedicated staff. Witnessing how their
                contributions directly enrich the success of our clients and the
                overall business serves as a constant source of motivation for
                our workforce.
              </p>
              <p className="font-normal text-lg leading-relaxed mb-4 ">
                Our objective remains to consistently push boundaries by
                collaborating with the latest advancements in technology. We
                take pride in nurturing a thriving culture of shared learning
                and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:max-w-[1460px] xl:mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-12">
        <div className="">
          <Heading4 className="text-secondary">Benefits</Heading4>
          <Heading4 className="-mt-5 text-primary">and Perks</Heading4>
          <p>
            We ensure that our employees are receiving their dues in the form of
            benefits. Following is some of the perks:
          </p>
        </div>
        <div className="max-w-full lg:max-w-[60%] max-h-[600px] overflow-scroll no-scrollbar">
          {benefitsList.map(({title,desc}, index) => (
            <ListCard
              key={index}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Career;

Career.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <main className="">{page}</main>
      <Footer />
    </>
  );
};
