import Image from "next/image";
import Heading5 from "../Headings/Heading5";
import SubHeading3 from "../SubHeading/SubHeading3";
import { MdChevronRight, MdOutlineArticle } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import SideBarDropDownButton from "../SideBarDropDownButton";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const SideBarDashboard = () => {
  return (
    <div className="bg-dark hidden lg:flex lg:w-[255px] flex-col h-screen">
      <div className="text-lighter px-6 py-3 flex flex-col items-center">
        <Image
          src="/static/images/pages/case-study/2/client-avatar.png"
          alt="admin-pic"
          width={60}
          height={60}
          className="align-middle object-cover h-[60px] w-[60px] rounded-full"
        />
        <h6 className="text-xs uppercase font-bold text-lighter mt-6">
          Gurjeet Singh
        </h6>
        <div className="text-[10px] uppercase mt-2">General Manager</div>
      </div>
      <ul className="pt-6">
        <li>
          <SideBarDropDownButton icon={<MdOutlineArticle />} text="Case Studies" />
        </li>
        <li>
          <SideBarDropDownButton icon={<IoSettingsOutline />} text="Settings" />
        </li>
        <li>
          <SideBarDropDownButton icon={<AiOutlineDollar />} text="Pricing" />
        </li>
      </ul>
    </div>
  );
};

export default SideBarDashboard;
