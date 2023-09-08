import MarketingSpecialist from "@/data/jobDescriptions/MarketingSpecialist";
import ProjectManager from "@/data/jobDescriptions/ProjectManager";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

interface props {
  jobId: string;
}

const JobDesc: React.FC<props> = ({ jobId }) => {
  const renderJobDesc = () => {
    switch (jobId) {
      case "project-manager":
        return <ProjectManager />;

      case "marketing-specialist":
        return <MarketingSpecialist />
      default:
        return <div>No Job Desc Added yet</div>;
    }
  };
  return (
   
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.6, ease: easeInOut }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-lighter"
      >
        {renderJobDesc()}
      </motion.div>
  );
};

export default JobDesc;
