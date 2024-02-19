import React from "react";
import Heading5 from "../Headings/Heading5";
import SubHeading3 from "../SubHeading/SubHeading4";

interface props {
  title: string;
  desc: string;
}

const ListCard = ({ title, desc }: props) => {
  return (
    <div className="border-b border-gray-200 mb-4">
      <Heading5 className="text-primary">{title}</Heading5>
      <SubHeading3>{desc}</SubHeading3>
    </div>
  );
};

export default ListCard;
