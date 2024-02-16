"use client";

import Heading5 from "@/components/Headings/Heading5";
import TextInput from "@/components/Input/TextInput";
import NavbarDashboard from "@/components/Layout/NavbarDashboard";
import SideBarDashboard from "@/components/Layout/SideBarDashboard";
import { ReactElement, useState } from "react";

function AddCaseStudyPage() {
  const defaultCaseStudyData = {
    labels: [],
    heading: "",
    subHeading: "",
    productImage: "",
    article1: "",
    article2: "",
    testimonial: "",
    avatar: "",
    reviewer: "",
  };

  const [formData, setFormData] = useState(defaultCaseStudyData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name}, New value: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Heading5 className="text-primary uppercase">
        Add Case Study Form
      </Heading5>
      <div className="shadow-md bg-white py-10 px-8 rounded-lg">
        <form>
          <TextInput
            size="medium"
            type="text"
            placeholder="Title"
            className="mb-4 md:mb-8"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
          />
          <TextInput
            size="medium"
            type="text"
            placeholder="Sub Heading"
            className="mb-4 md:mb-8"
            name="sub-heading"
            value={formData.heading}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default AddCaseStudyPage;

AddCaseStudyPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative flex flex-col">
        <NavbarDashboard />
        <div className="flex flex-row">
          <SideBarDashboard />
          <main className="xl:max-w-[1460px] flex-1 bg-lighter p-5">
            {page}
          </main>
        </div>
      </div>
    </>
  );
};
