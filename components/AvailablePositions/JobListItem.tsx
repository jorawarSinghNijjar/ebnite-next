import { BsChevronRight } from "react-icons/bs";
import Heading6 from "../Headings/Heading6";
import SubHeading3 from "../SubHeading/SubHeading3";
import { useState } from "react";
import JobDesc from "./JobDesc";
import ProjectManager from "@/data/jobDescriptions/ProjectManager";
import { AnimatePresence, Variants } from "framer-motion";
import { motion } from "framer-motion";

interface job {
  jobId: string;
  jobTitle: string;
  department: string;
  location: string;
  remote: string;
}

interface props {
  job: job;
}

const JobListItem: React.FC<props> = ({ job }) => {
  const { jobId, jobTitle, department, location, remote } = job;
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.li
      variants={itemVariants}
      className="mb-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`relative pt-4 transition-all ${
          isOpen ? "bg-secondary" : "transparent border-b-2"
        }`}
      >
        <Heading6
          className={`${isOpen ? "text-white" : "text-primary"} text-center`}
        >
          {jobTitle}
        </Heading6>
        <div
          className={`flex gap-2 justify-center ${
            isOpen ? "text-white" : "text-primary"
          }`}
        >
          <SubHeading3 className={`${isOpen ? "text-white" : "text-black"}`}>
            {department}
          </SubHeading3>
          <span>|</span>
          <SubHeading3 className={`${isOpen ? "text-white" : "text-black"}`}>
            {location}
          </SubHeading3>
          <span>|</span>
          <SubHeading3 className={`${isOpen ? "text-white" : "text-black"}`}>
            {remote}
          </SubHeading3>
        </div>
        <span className="absolute right-5 top-[50%] -translate-y-[50%]">
          <BsChevronRight
            className={`transition-all duration-500 text-2xl ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </span>
      </div>
      <AnimatePresence>{isOpen && <JobDesc jobId={jobId} />}</AnimatePresence>
    </motion.li>
  );
};

export default JobListItem;
