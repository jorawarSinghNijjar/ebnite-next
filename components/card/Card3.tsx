import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";
import Link from "next/link";

interface props {
  title: string;
  description: string;
  href: string;
}

function Card3({ title, description, href }: props) {
  return (
    <Link href={href} className="masonry-grid-item">
      <div className="max-w-[300px] drop-shadow-xl bg-white  flex flex-col items-start">
        <div className="p-8 card-content">
          <h4 className="text-2xl font-medium text-slate-950 mb-4">{title}</h4>
          <p className="font-normal text-black/[0.5] text-base leading-relaxed mb-8">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card3;
