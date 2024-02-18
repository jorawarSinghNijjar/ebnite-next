"use client";

import NavbarDashboard from "@/components/Layout/NavbarDashboard";
import SideBarDashboard from "@/components/Layout/SideBarDashboard";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

import DashboardHome from "@/components/DashboardComponents/DashboardHome";

const Dashboard: NextPageWithLayout = () => {

  return (
    <section className="mt-[70px] lg:ml-[255px] p-8">
      <DashboardHome />
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
          <main className="xl:max-w-[1460px] flex-1 bg-lighter">{page}</main>
        </div>
      </div>
    </>
  );
};
