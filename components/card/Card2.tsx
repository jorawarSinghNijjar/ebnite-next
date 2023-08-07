import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";

interface props {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

function Card2({ imageSrc, title, description, buttonText }: props) {
  return (
    <div className="max-w-[300px] lg:max-w-[340px] drop-shadow-2xl bg-white  flex flex-col items-start">
      <Image src={imageSrc} alt={title} 
      width={340} height={300}
      ></Image>
      <div className="py-8 px-4">
        <h4 className="text-2xl font-medium text-slate-950 mb-4">{title}</h4>
        <p className="font-normal text-black/[0.5] text-base leading-relaxed mb-8">{description}</p>
        <OutlinedButton>{buttonText}</OutlinedButton>
      </div>
    </div>
  );
}

export default Card2;
