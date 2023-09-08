import { motion } from "framer-motion";
import Heading3 from "../Headings/Heading3";
import JobListItem from "./JobListItem";

interface job {
  jobId: string;
  jobTitle: string;
  department: string;
  location: string;
  remote: string;
}

interface props {
  show: boolean;
  availablePositions: job[];
}

const AvailablePositions: React.FC<props> = ({ show, availablePositions }) => {
  if (!show) {
    return null;
  }
  return (
    <motion.section
      className="px-6 lg:px-20 py-16 bg-lighter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="xl:max-w-[1460px]">
        <div className="mb-10 text-center">
          <Heading3>Available Positions</Heading3>
        </div>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
        >
          {availablePositions.length === 0 ? (
            <p className="text-center text-yellow-600">
              Regrettably, there are currently no job positions that match your
              query. Please consider broadening your search criteria or
              exploring alternative opportunities. If you have any other
              inquiries or need assistance with anything else, please don't
              hesitate to reach out.
            </p>
          ) : (
            availablePositions.map((job, index) => (
              <JobListItem job={job} key={index}></JobListItem>
            ))
          )}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default AvailablePositions;
