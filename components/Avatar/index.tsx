import { url } from "inspector";
import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const Avatar: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`w-full h-full rounded-full`}
    >
      {children}
    </div>
  );
};

export default Avatar;
