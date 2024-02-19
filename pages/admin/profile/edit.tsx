'use client';


import AdminProfileEditComp from "@/components/DashboardComponents/Profile/AdminProfileEditComp";
import NavbarDashboard from "@/components/Layout/NavbarDashboard";
import SideBarDashboard from "@/components/Layout/SideBarDashboard";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const AdminProfileEditPage:NextPageWithLayout = () => {
  return (
    <section className="mt-[70px] lg:ml-[255px] p-8">
        <AdminProfileEditComp />
    </section>
  ); 
}

export default AdminProfileEditPage;

AdminProfileEditPage.getLayout = (page: ReactElement) => {
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
