import Link from "next/link";
import { ReactElement } from "react";
import { FaRegEdit } from "react-icons/fa";

interface LinkButtonIconProps {
  text: string;
  icon: ReactElement;
  href: string;
  className: string;
  onClick?: () => {};
}

function LinkButtonIcon({ text, icon, href, className,onClick }: LinkButtonIconProps) {
  return (
    <Link
      href={href}
      className={`flex flex-row items-center px-5 py-3 rounded-3xl text-sm font-medium ${className}`}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

export default LinkButtonIcon;
