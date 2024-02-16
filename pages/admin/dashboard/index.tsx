"use client";

import CaseStudyAdminCard from "@/components/Card/CaseStudyAdminCard";
import Heading4 from "@/components/Headings/Heading4";
import Heading5 from "@/components/Headings/Heading5";
import NavbarDashboard from "@/components/Layout/NavbarDashboard";
import SideBarDashboard from "@/components/Layout/SideBarDashboard";
import api from "@/lib/api";
import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

const Dashboard: NextPageWithLayout = () => {
  const [caseStudiesArr, setCaseStudiesArr] = useState([]);

  const fetchCaseStudies = async () => {
    try {
      const res = await api.get("http://localhost:8080/api/case-studies");

      console.log(res.data);
      setCaseStudiesArr(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  return (
    <section className="">
      <div className="">
        <div className="flex flex-row justify-between items-start mb-8">
          <Heading5 className="text-primary uppercase">Case Studies</Heading5>

          <Link
            href="/admin/case-studies/add"
            className="flex flex-row items-center gap-2 bg-white shadow-md rounded-lg px-4 py-2"
          >
            <span className="text-primary">
              <MdAddCircleOutline />
            </span>
            <span className="text-primary font-semibold">Add</span>
          </Link>
        </div>

        {caseStudiesArr.length <= 0
          ? null
          : caseStudiesArr.map(({ heading }, index) => {
              return (
                <CaseStudyAdminCard
                  key="index"
                  title={heading}
                  buttonText="Learn More"
                  imageSrc="/static/images/pages/home/works-3.png"
                  className="mb-10 bg-light"
                />
              );
            })}
      </div>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="relative flex flex-col">
        <NavbarDashboard />
        <div className="flex flex-row">
          <SideBarDashboard />
          <main className="xl:max-w-[1460px] flex-1">{page}</main>
        </div>
      </div>
    </>
  );
};
