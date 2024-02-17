"use client";
import Image from "next/image";

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import LinkButtonIcon from "../Buttons/LinkButtonIcon";
import Heading5 from "../Headings/Heading5";
import SubHeading4 from "../SubHeading/SubHeading4";
import api from "@/lib/api";
import FilledButton from "../Buttons/FilledButton";
import FilledButtonIcon from "../Buttons/FilledButtonIcon";
import { useRouter } from "next/router";

interface props {
  id: string;
  imageSrc: string;
  title: string;
  description?: string;
  className?: string;
  reverse?: boolean;
  handleDelete: (id: string) => void;
}

const CaseStudyAdminCard = ({
  id,
  imageSrc,
  title,
  description,
  className,
  reverse,
  handleDelete,
}: props) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-12 py-6 px-6 lg:py-6 lg:px-4 rounded-3xl ${className}`}
    >
        <div className="lg:min-w-[200px] max-w-full lg:max-w-[40%]">
          <Image
            src={
              imageSrc && imageSrc.length > 1
                ? imageSrc
                : "/static/images/pages/case-study/default/product.png"
            }
            alt="case study image"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <div className="min-w-[40%] max-w-full lg:max-w-[50%] flex flex-col justify-center">
          <Heading5 className="text-slate-800">{title}</Heading5>
          <SubHeading4>
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non dapibus risus, eu auctor metus. Ut in massa a dui lacinia semper. Mauris in dui vitae nulla pellentesque porttitor. Cras interdum ante vitae dolor luctus vulputate. Cras ac magna venenatis, dapibus augue sed, imperdiet nulla. Integer tortor ex, eleifend non aliquam ac, finibus id nibh. Pellentesque gravida leo ac sollicitudin tristique. Aliquam erat volutpat. Aliquam tincidunt mi orci, a pulvinar mauris convallis et"}
          </SubHeading4>
        </div>
      <div className="flex flex-col justify-end gap-2">
        <LinkButtonIcon
          href="/edit"
          text="Edit"
          icon={<FaRegEdit />}
          className="bg-primary text-light"
        />
        <FilledButtonIcon
          size="medium"
          icon={<MdDeleteOutline size={20}/>}
          className="bg-red-500 text-light"
          onClick={() => handleDelete(id)}
        >
          Delete
        </FilledButtonIcon>
      </div>
    </div>
  );
};

export default CaseStudyAdminCard;
