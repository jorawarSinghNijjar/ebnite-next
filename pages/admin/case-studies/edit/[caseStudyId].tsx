"use client";

import EditCaseStudyComp from "@/components/DashboardComponents/CaseStudy/EditCaseStudyComp";
import NavbarDashboard from "@/components/Layout/NavbarDashboard";
import SideBarDashboard from "@/components/Layout/SideBarDashboard";
import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const EditCaseStudy: NextPageWithLayout = () => {
  const router = useRouter();
  const {caseStudyId}= router.query;
  return (
    <section className="mt-[70px] lg:ml-[255px] p-8">
      <EditCaseStudyComp caseStudyId={caseStudyId}/>
    </section>
  );
};

export default EditCaseStudy;

EditCaseStudy.getLayout = (page: ReactElement) => {
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
