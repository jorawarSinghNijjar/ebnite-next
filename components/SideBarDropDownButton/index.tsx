import { ReactElement } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";

interface DropDownProps {
  icon: ReactElement;
  text: string;
  //   subList?: string[];
}
function SideBarDropDownButton({ icon, text }: DropDownProps) {
  return (
    <div className="hover:bg-tertiary px-6">
      <div className="font-semibold text-lighter flex flex-row items-center justify-between py-2 transition ease-out hover:translate-x-1 duration-300 cursor-pointer hover:text-primary">
        <div className="flex flex-row items-center">
          <span className="mr-2">
            {/* <MdOutlineArticle /> */}
            {icon}
          </span>
          <span>{text}</span>
        </div>
        {/* <div><FaChevronRight /></div> */}
      </div>
    </div>
  );
}

export default SideBarDropDownButton;
