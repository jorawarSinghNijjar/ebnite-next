import { url } from "inspector";
import Image from "next/image";

interface Props {
  imageSrc: string;
}

const Avatar: React.FC<Props> = ({ imageSrc }) => {
  return (
    <div
      className={`w-[120px] h-[120px] rounded-full`}
    >
      <Image src={imageSrc} alt="client-pic" width={120} height={120} className="w-full h-full object-cover rounded-full"/>
    </div>
  );
};

export default Avatar;
