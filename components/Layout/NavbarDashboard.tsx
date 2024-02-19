import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsFullscreen, BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUserSquare2 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavbarDashboard = () => {
  const [searchString, setSearchString] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    router.push("/admin/signin");
  };

  return (
    <div className="p-5 py-0 pl-0 fixed bg-white w-full max-h-[70px]">
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
          <li
            className="border-0 border-secondary pl-8 relative hover:"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div
              className={`${
                !dropdownOpen ? "hidden" : "block"
              } absolute right-0 top-[50px] bg-white shadow-lg rounded-b-xl`}
            >
              <ul className="flex flex-col">
                <li className="hover:bg-light py-3 px-6 flex flex-row items-center gap-2 cursor-pointer">
                  <span>
                    <LuUserSquare2 />
                  </span>
                  <span>Profile</span>
                </li>
                <li
                  className="hover:bg-light hover:rounded-b-xl py-3 px-6 flex flex-row items-center gap-2 cursor-pointer"
                  onClick={handleSignOut}
                >
                  <span>
                    <AiOutlinePoweroff />
                  </span>
                  <span>Signout</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/static/images/pages/dashboard/user-photo.png"
                alt="client-pic"
                width={40}
                height={40}
                className="align-middle object-cover h-[40px] w-[40px] rounded-full"
              />
              <MdKeyboardArrowDown size={18} />
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NavbarDashboard;
