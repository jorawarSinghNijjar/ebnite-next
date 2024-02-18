import Image from "next/image";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { TbBrandBlogger } from "react-icons/tb";
import SideBarDropDownButton from "../SideBarDropDownButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { LuUserSquare2 } from "react-icons/lu";

const SideBarDashboard = () => {
  const router = useRouter();
  return (
    <div className="fixed mt-[70px] bg-dark hidden lg:flex max-w-[255px] lg:w-[255px] flex-col h-screen">
      <div className="text-lighter px-6 py-3 flex flex-col items-center">
        <Image
          src="/static/images/pages/dashboard/user-photo.jfif"
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
          <Link href="/admin/case-studies">
            <SideBarDropDownButton
              icon={<MdOutlineArticle />}
              text="Case Studies"
            />
          </Link>
        </li>
        <li>
          <Link href="/admin/profile">
            <SideBarDropDownButton icon={<LuUserSquare2 />} text="Profile" />
          </Link>
        </li>
        <li>
          <SideBarDropDownButton icon={<TbBrandBlogger />} text="Blog" />
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
