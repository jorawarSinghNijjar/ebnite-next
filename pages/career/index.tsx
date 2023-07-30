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

import SubHeading2 from "@/components/SubHeading/SubHeading2";
import SubHeading3 from "@/components/SubHeading/SubHeading3";
import Image from "next/image";
import { ReactElement } from "react";
import { BsSearch } from "react-icons/bs";

function Career() {
  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-screen">
          <Image
            src="/static/images/test.jpg"
            alt="services"
            width={1440}
            height={900}
            className="absolute w-full h-full -z-10"
          />
          <div className="px-20 pt-60">
            <Heading6 className="text-white">Careers</Heading6>
            <Heading4 className="text-white">JOIN OUR</Heading4>
            <Heading4 className="text-white -mt-5">Thriving Community</Heading4>
            <SubHeading2 className="text-white">
              A welcoming and diverse environment that fosters opportunities for
              personal growth.
            </SubHeading2>

            <div className="flex flex-row gap-4">
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
              <button className="bg-secondary text-slate-100 uppercase min-w-[200px]">
                <div className="flex flex-row justify-around items-center">
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
      <section className="px-20 py-16 bg-lighter">
        <Heading4 className="text-center">
          Experience a diverse work space with collaborative learning
          opportunities with us!
        </Heading4>
        <div className="grid gap-8 grid-cols-2 pt-10">
          <div className="flex items-center justify-center max-w-1/2">
            <Image
              src="https://picsum.photos/seed/picsum/500/300"
              alt="testimonial"
              width={500}
              height={300}
              className="rounded-2xl min-w-[400px] drop-shadow-2xl"
            ></Image>
          </div>
          <div className="">
            <p className="font-normal text-lg leading-relaxed mb-4 ">
              Our motto is to keep pushing our limits to work with the latest
              developing technologies, and we take pride in our thriving culture
              of learning together.
            </p>
            <p className="font-normal text-lg leading-relaxed mb-4 ">
              At Techverx, we try to provide a work environment which is full of
              new experiences and opportunities to do your best. To build an
              enabling atmosphere for the employees, we foster an interactive,
              broad, and dynamic work environment that values success via
              accomplishments.
            </p>
            <p className="font-normal text-lg leading-relaxed mb-4 ">
              We practice integrity, diversity and generosity as a part of our
              culture to instill these core values in our employees. Observing
              how their efforts directly contribute to the prosperity of our
              clients and the business inspires our workforce.
            </p>
            <p className="font-normal text-lg leading-relaxed mb-4 ">
              Our motto is to keep pushing our limits to work with the latest
              developing technologies, and we take pride in our thriving culture
              of learning together.
            </p>
          </div>
        </div>
      </section>
      <section className="px-20 py-16 flex flex-row gap-12">
        <div className="">
          <Heading4 className="text-secondary">Benefits</Heading4>
          <Heading4 className="-mt-5 text-primary">and Perks</Heading4>
          <p>
            We ensure that our employees are receiving their dues in the form of
            benefits. Following is some of the perks:
          </p>
        </div>
        <div className="max-w-[60%] max-h-screen overflow-scroll no-scrollbar">
          {[1, 2, 3, 4, 5,6,7,8].map((elem, index) => (
            <ListCard
              key={index}
              title="Health Coverage"
              desc="The new Medical Hospitalization policy with improved health coverage for all the employees and their immediate family members with more than 315 hospitals on the panel"
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
      <main>{page}</main>
      <Footer />
    </>
  );
};
