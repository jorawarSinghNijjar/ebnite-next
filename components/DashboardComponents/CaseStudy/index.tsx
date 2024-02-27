"use client";

import CaseStudyAdminCard from "@/components/Card/CaseStudyAdminCard";
import Heading5 from "@/components/Headings/Heading5";
import api from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { ClipLoader, HashLoader } from "react-spinners";

const CaseStudyAdminComp = () => {
  const [caseStudiesArr, setCaseStudiesArr] = useState([]);

  const fetchCaseStudies = async () => {
    try {
      const res = await api.get("case-studies");

      console.log(res.data);
      setCaseStudiesArr(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (caseStudyId: string) => {
    try {
      console.log(caseStudyId);
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await api.delete(
        `admin/case-studies/${caseStudyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setCaseStudiesArr((prevState) =>
          prevState.filter((cs:CaseStudy) => cs.caseStudyId !== caseStudyId)
        );
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <Heading5 className="text-primary uppercase">Case Studies</Heading5>

        <Link
          href="/admin/case-studies/add"
          className="flex flex-row items-center justify-center sm:justify-start gap-2 w-full sm:w-auto bg-white shadow-md rounded-lg px-4 py-2"
        >
          <span className="text-primary">
            <MdAddCircleOutline />
          </span>
          <span className="text-primary font-semibold">Add</span>
        </Link>
      </div>
      <div className="dashboard-view">
        <div className="grid grid-cols-1 gap-4">
          {caseStudiesArr.length <= 0 ? (
            <div className="w-full h-full flex flex-row justify-center items-center ">
              <HashLoader color="#FFC26F" loading={true} size={100} />
            </div>
          ) : (
            caseStudiesArr.map(
              ({ caseStudyId, heading, productImage, description }, index) => {
                return (
                  <CaseStudyAdminCard
                  caseStudyId={caseStudyId}
                    key={index}
                    title={heading}
                    imageSrc={productImage}
                    description={description}
                    className="mb-2 bg-light"
                    handleDelete={handleDelete}
                  />
                );
              }
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAdminComp;
