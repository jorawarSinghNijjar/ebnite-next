import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";
import FilledButton from "./../Buttons/FilledButton";
import LinkButtonIcon from "../Buttons/LinkButtonIcon";
import Link from "next/link";

interface WorksCardProps {
  caseStudyId: string;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  href: string;
  width: number;
  height: number;
}

function WorksCard({
  caseStudyId,
  imageSrc,
  title,
  description,
  category,
  href,
  width,
  height,
}: WorksCardProps) {
  return (
    <div className="relative lg:h-[530px] group flex flex-col mb-8 lg:block lg:mb-0">
      <div className="hidden lg:flex flex-col justify-between px-12 py-12 h-full lg:opacity-0 lg:scale-105 transition-all duration-1000 lg:group-hover:opacity-100 lg:backdrop-blur-sm lg:group-hover:backdrop-blur-2xl lg:group-hover:bg-black/60 group-hover:scale-100">
        <div className="flex flex-col gap-4 lg:max-h-[360px]">
          <OutlinedButton>{category}</OutlinedButton>
          <h3 className="text-3xl mb-4 font-extrabold text-slate-100">
            {title}
          </h3>
          <h5 className="text-slate-300 text-xl font-light overflow-hidden">{description}</h5>
        </div>

        <Link
          href={`/case-studies/${caseStudyId}`}
          onClick={() => console.log("link clicked")}
        >
          <FilledButton
            size="medium"
            className="uppercase w-max bg-tertiary text-dark"
          >
            View Case
          </FilledButton>
        </Link>
      </div>
      <div className="lg:hidden flex-col items-start">
        <OutlinedButton>{category}</OutlinedButton>
        <h3 className="text-4xl mt-4 font-extrabold text-primary ">{title}</h3>
        <h5 className="text-secondary text-xl mb-8 font-light">
          {description}
        </h5>
      </div>
      <Image
        src={imageSrc}
        alt="testimonial"
        width={width}
        height={height}
        className="relative lg:absolute lg:top-0 lg:left-0 w-full lg:-z-10 lg:object-cover lg:h-full mb-4 lg:mb-0"
      />

      <Link
        href={`/case-studies/${caseStudyId}`}
        onClick={() => console.log("link clicked")}
      >
        <FilledButton
          size="medium"
          className={`w-full lg:hidden uppercase bg-tertiary text-dark`}
        >
          View Case
        </FilledButton>
      </Link>
    </div>
  );
}

export default WorksCard;
