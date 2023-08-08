import React, { useRef, useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.css";
import clsx from "clsx";

interface props {
  title: string;
  description: string;
}

const SingleAccordion: React.FC<props> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 bg-tertiary rounded-2xl h-max">
      <div
        className="flex justify-between items-center"
        onClick={(e) => setIsOpen(!isOpen)}
      >
        <p className="text-xl">{title}</p>
        <span><BsChevronRight className={`transition-all duration-500 ${isOpen ? "rotate-90":"rotate-0"}`}/></span>
      </div>

      <p
        className={`text-base mt-3 transition-all duration-500 ${
          isOpen ? "h-32 scale-y-100 opacity-100" : "h-0 scale-y-0 opacity-0"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SingleAccordion;
