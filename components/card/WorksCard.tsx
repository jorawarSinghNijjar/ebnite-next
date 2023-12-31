import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";
import FilledButton from "./../Buttons/FilledButton";

interface WorksCardProps {
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  href: string;
  width: number;
  height: number;
}

function WorksCard({
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
      <div className="hidden lg:flex flex-col justify-between pl-12 py-16 h-full lg:opacity-0 lg:scale-105 transition-all transition-300 lg:group-hover:opacity-100 lg:backdrop-blur-sm lg:group-hover:backdrop-blur-2xl lg:group-hover:bg-black/60 group-hover:scale-100">
        <div className="flex flex-col gap-4">
          <OutlinedButton>{category}</OutlinedButton>
          <h3 className="text-4xl mb-4 font-extrabold text-slate-100">
            {title}
          </h3>
          <h5 className="text-slate-300 text-xl font-light">{description}</h5>
        </div>

        <FilledButton
          size="medium"
          className="uppercase w-max bg-tertiary text-dark"
        >
          View Case
        </FilledButton>
      </div>
      <div className="lg:hidden flex-col items-start">
        <OutlinedButton>{category}</OutlinedButton>
        <h3 className="text-4xl mt-4 font-extrabold text-primary ">
          {title}
        </h3>
        <h5 className="text-secondary text-xl mb-8 font-light">
          {description}
        </h5>
      </div>
      <Image
        src={imageSrc}
        alt="testimonial"
        width={width}
        height={height}
        className="relative lg:absolute lg:top-0 lg:left-0 w-full lg:-z-10 lg:object-contain lg:h-full mb-4 lg:mb-0"
      />
      <FilledButton
        size="medium"
        className={`w-full lg:hidden uppercase bg-tertiary text-dark`}
      >
        View Case
      </FilledButton>
    </div>
  );
}

export default WorksCard;
