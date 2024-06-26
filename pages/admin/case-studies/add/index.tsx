"use client";

import AddCaseStudyComp from "@/components/DashboardComponents/CaseStudy/AddCaseStudyComp";
import NavbarDashboard from "@/components/Layout/NavbarDashboard";
import SideBarDashboard from "@/components/Layout/SideBarDashboard";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const AddCaseStudyPage: NextPageWithLayout = () => {
  return (
    <section className="mt-[70px] lg:ml-[255px] p-8">
      <AddCaseStudyComp />
    </section>
  );
};

export default AddCaseStudyPage;

AddCaseStudyPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative flex flex-col">
        <NavbarDashboard />
        <div className="flex flex-row">
          <SideBarDashboard />
          <main className="xl:max-w-[1460px] flex-1 bg-lighter">{page}</main>
        </div>
      </div>
    </>
  );
};
