import Image from "next/image";
import React from "react";
import Heading4 from "../Headings/Heading4";
import NormalText from "../Text/NormalText";
import SubHeading2 from "../SubHeading/SubHeading2";
import TextButton from "../Buttons/TextButton";
import Link from "next/link";

interface props {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  className?: string;
  reverse?:boolean
}

const TwoColCard = ({ imageSrc, title, description, buttonText,className, reverse }: props) => {
  return (
    <div className={`flex flex-row justify-around py-14 px-12 rounded-3xl ${className}`}>
      <div className={`min-w-[400px] max-w-[50%] ${reverse && "order-2"}`}>
        <Image
          src={imageSrc}
          alt="software engineering"
          width={400}
          height={400}
         
        />
      </div>

      <div className={`max-w-[50%] flex flex-col justify-end ${reverse && "order-1"}`}>
        <Heading4 className="text-slate-800">{title}</Heading4>
        <SubHeading2>{description}</SubHeading2>
        <Link href="/services" className="text-primary text-lg font-medium">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default TwoColCard;
