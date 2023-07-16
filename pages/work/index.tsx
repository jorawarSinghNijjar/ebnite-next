import WorksCard from "@/components/Card/WorksCard";
import Chip from "@/components/Chip/Chip";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
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
    <div className="pt-10 px-20 mb-16">
      <SectionHeading>Explore Our Work</SectionHeading>
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

      <div className="grid grid-rows-[repeat(4,_530px)] grid-cols-[1fr_150px_1fr] gap-8 pt-10">
        <div className="col-span-1">
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
        <div className="col-span-2">
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
        <div className="col-span-2">
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
        <div className="col-span-1">
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
    </div>
  );
};

export default Work;

Work.getLayout = (page: ReactElement) => {
  return<>
  <div className="relative">
    <Navbar />
  </div>
  <main>{page}</main>
  <Footer />
</>
};
