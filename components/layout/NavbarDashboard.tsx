import { useState } from "react";
import { BsFullscreen, BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import Avatar from "../Avatar";
import Image from "next/image";

const NavbarDashboard = () => {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="p-5 py-0 pl-0">
      <ul className="flex flex-row items-center justify-between text-base">
        <li className="lg:min-w-[255px] pl-5 bg-dark">
        <Image
              src="/static/images/logo/logo-white.svg"
              alt="Ebnite"
              width={150}
              height={70}
              className="max-w-[100px] max-h-[50px] lg:max-h-[70px] object-cover"
            ></Image>
        </li>
        <li className="w-1/3 min-w-[250px]">
          <form>
            <div className="flex flex-row items-center rounded-3xl px-5 py-2 text-primary bg-lighter">
              <div className="mr-2">
                <BsSearch />
              </div>

              <input
                type="text"
                placeholder="Search...."
                className="p-1 text-sm outline-none text-primary bg-lighter"
                name="search-string"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
          </form>
        </li>
        <ul className="flex flex-row items-center">
          <li className="border-x border-secondary px-8">
            <BsFullscreen size={16} />
          </li>
          <li className="border-r border-secondary px-8">
            <IoNotificationsOutline size={18} />
          </li>
          <li className="border-0 border-secondary px-8">
            <Image
              src="/static/images/pages/case-study/2/client-avatar.png"
              alt="client-pic"
              width={40}
              height={40}
              className="align-middle object-cover h-[40px] w-[40px] rounded-full"
            />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NavbarDashboard;
