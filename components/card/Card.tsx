import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  linkHref?: Url;
  className?: string;
  textAlign?: string;
  transition?: boolean;
}

function Card({ imageSrc, title, description, buttonText, linkHref, className, textAlign, transition }: CardProps) {
  return (
    <div className={`w-full px-12 py-10 shadow-xl bg-white rounded-2xl flex flex-col ${transition ? "transition ease-in-out hover:-translate-y-4 hover:scale-95 cursor-pointer": ""} ${className}`}>
      <Image src={imageSrc} alt={title} width={100} height={100}></Image>
      <h4 className="text-2xl font-medium text-slate-950 mt-7 mb-3 ">{title}</h4>
      <p className={`text-xl font-normal text-slate-500 ${textAlign ? "text-center" : "text-left"}`}>{description}</p>
      {buttonText && (
        <Link href={linkHref || "/"} className="text-primary text-lg font-medium">
          {buttonText}
        </Link>
      )}
    </div>
  );
}

export default Card;
