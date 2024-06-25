import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";

interface props {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  email:string;
}

function Card2({ imageSrc, title, description, buttonText, email }: props) {
  return (
    <div className="max-w-[400px] drop-shadow-2xl bg-white flex flex-col items-start">
      <Image src={imageSrc} alt={title} 
      width={400} height={400}
      className="h-[400px] object-cover"
      ></Image>
      <div className="py-8 px-4">
        <h4 className="text-lg 2xl:text-2xl font-medium text-slate-950 mb-4">{title}</h4>
        <p className="font-normal text-black/[0.5] text-base leading-relaxed mb-8">{description}</p>
        <a href={`mailto:${email}`} className="border border-secondary py-2 px-4 rounded-full uppercase text-xs text-secondary font-medium hover:bg-secondary hover:text-slate-100 transition ease-in w-max">{buttonText}</a>
      </div>
    </div>
  );
}

export default Card2;
