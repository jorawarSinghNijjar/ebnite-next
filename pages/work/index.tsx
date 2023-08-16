import FilledButton from "@/components/Buttons/FilledButton";
import WorksCard from "@/components/card/WorksCard";

import Chip from "@/components/Chip/Chip";
import Heading2 from "@/components/Headings/Heading2";
import Heading3 from "@/components/Headings/Heading3";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import SubHeading1 from "@/components/SubHeading/SubHeading2";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";

const chips = [
  { id: "1", label: "All", selected: true },
  { id: "2", label: "Mobile", selected: false },
  { id: "3", label: "Web", selected: false },
];

const Work: NextPageWithLayout = () => {
  const [chipGroup, setChipGroup] = useState(chips);

  const selectChip = (id: string) => {
    setChipGroup((chipGroup) =>
      chipGroup.map((chip) =>
        chip.id === id
          ? { ...chip, selected: true }
          : { ...chip, selected: false }
      )
    );
  };

  return (
    <>
      <section className="px-6 lg:px-20 mb-16">
        <div className="w-full text-left lg:w-3/4">
          <Heading2>Explore Our Work</Heading2>
          <SubHeading1>
            We are providing exceptional work meet your business requirement.
          </SubHeading1>
        </div>
        <div className="flex gap-5">
          {chipGroup.map(({ id, label, selected }, index) => (
            <Chip
              id={id}
              label={label}
              key={index}
              selectChip={selectChip}
              selected={selected}
            />
          ))}
        </div>
        {/* grid-rows-[repeat(2,_530px)] */}
        <div className="grid auto-rows-auto grid-cols-[1fr_80px_1fr] gap-8 pt-10">
          <div className="col-span-3 lg:col-span-1">
            <WorksCard
              width={580}
              height={530}
              title="Animalife"
              description="Awesome app for a wildlife broadcasting company."
              category="Website"
              href="/"
              imageSrc="/static/images/pages/home/works-3.png"
            />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <WorksCard
              width={580}
              height={530}
              title="Account Management System"
              description="A system to keep track of the withdrawal, deposits done by the client and much more"
              category="CRM"
              href="/"
              imageSrc="/static/images/pages/home/works-1.png"
            />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <WorksCard
              width={580}
              height={530}
              title="Immobiliaria"
              description="Application curated for real estate branding."
              category="Website"
              href="/"
              imageSrc="/static/images/pages/home/works-2.jpg"
            />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <WorksCard
              width={580}
              height={530}
              title="Admin Dashboard"
              description="Empower and manage with precision."
              category="CRM"
              href="/"
              imageSrc="/static/images/pages/home/works-4.png"
            />
          </div>
        </div>
      </section>
      <section className="px-20 mb-16 flex flex-col items-center">
        <Heading3>Kickstart your dream project with us!</Heading3>
        <FilledButton
          size="medium"
          className="bg-secondary text-slate-100 uppercase"
        >
          Contact Us
        </FilledButton>
      </section>
    </>
  );
};

export default Work;

Work.getLayout = (page: ReactElement) => {
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
