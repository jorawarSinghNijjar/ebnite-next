import WorksCard from "@/components/Card/WorksCard";
import Chip from "@/components/Chip/Chip";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Heading2 from "@/components/Headings/Heading2";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import SectionSubHeading from "@/components/SectionSubHeading/SectionSubHeading";
import Heading3 from "@/components/Headings/Heading3";
import FilledButton from "@/components/Buttons/FilledButton";

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
      <section className="px-20 mb-16">
        <Heading2>Explore Our Work</Heading2>
        <SectionSubHeading text="Aliquip excepteur proident ullamco ex esse ad in culpa minim Lorem ipsum." />
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
              title="My App"
              description="Awesome app for health"
              category="Health"
              href="/"
              imageSrc="/"
            />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <WorksCard
              width={580}
              height={530}
              title="My App"
              description="Awesome app for health"
              category="Health"
              href="/"
              imageSrc="/"
            />
          </div>
          <div className="col-span-3 lg:col-span-2">
            <WorksCard
              width={580}
              height={530}
              title="My App"
              description="Awesome app for health"
              category="Health"
              href="/"
              imageSrc="/"
            />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <WorksCard
              width={580}
              height={530}
              title="My App"
              description="Awesome app for health"
              category="Health"
              href="/"
              imageSrc="/"
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
      <main className="mt-32">{page}</main>
      <Footer />
    </>
  );
};
