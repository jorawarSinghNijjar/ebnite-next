import Image from "next/image";

import Link from "next/link";
import Heading5 from "../Headings/Heading5";
import SubHeading3 from "../SubHeading/SubHeading3";
import { FaRegEdit } from "react-icons/fa";
import LinkButtonIcon from "../Buttons/LinkButtonIcon";
import SubHeading4 from "../SubHeading/SubHeading4";

interface props {
  imageSrc: string;
  title: string;
  description?: string;
  buttonText: string;
  className?: string;
  reverse?: boolean;
}

const CaseStudyAdminCard = ({
  imageSrc,
  title,
  description,
  buttonText,
  className,
  reverse,
}: props) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-12 py-6 px-6 lg:py-6 lg:px-4 rounded-3xl ${className}`}
    >
      <div
        className="lg:min-w-[300px] max-w-full lg:max-w-[40%]"
      >
        <Image
          src={imageSrc}
          alt="software engineering"
          width={600}
          height={400}
          className="max-h-[400px] object-contain"
        />
      </div>

      <div className="max-w-full lg:max-w-[50%] flex flex-col justify-center">
        <Heading5 className="text-slate-800">{title}</Heading5>
        <SubHeading4>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non dapibus risus, eu auctor metus. Ut in massa a dui lacinia semper. Mauris in dui vitae nulla pellentesque porttitor. Cras interdum ante vitae dolor luctus vulputate. Cras ac magna venenatis, dapibus augue sed, imperdiet nulla. Integer tortor ex, eleifend non aliquam ac, finibus id nibh. Pellentesque gravida leo ac sollicitudin tristique. Aliquam erat volutpat. Aliquam tincidunt mi orci, a pulvinar mauris convallis et"}</SubHeading4>
        <div className="flex flex-row justify-end gap-2">
        <LinkButtonIcon href="/edit" text="Edit" icon={<FaRegEdit />} className="bg-primary"/>
        <LinkButtonIcon href="/delete" text="Delete" icon={<FaRegEdit />} className="bg-red-500" />
        </div>
       
      </div>
    </div>
  );
};

export default CaseStudyAdminCard;
