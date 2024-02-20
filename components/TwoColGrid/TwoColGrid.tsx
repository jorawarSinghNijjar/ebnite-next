import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";
import Link from "next/link";

interface props {
  imageSrc: string;
  category: string;
  heading: string;
  content: string;
  swapSides?: boolean;
  caseStudyId?: string;
}

function TwoColGrid({
  imageSrc,
  category,
  heading,
  content,
  swapSides,
  caseStudyId,
}: props) {
  return (
    <div className="mx-auto flex flex-col lg:flex-row text-center lg:text-left max-w-[600px] lg:max-w-full gap-12 lg:max-h-[500px] mb-12 lg:mb-32">
      <div
        className={`flex flex-row justify-center items-center lg:min-w-[50%] ${
          swapSides
            ? "lg:order-last lg:justify-end"
            : "lg:order-first lg:justify-start"
        }`}
      >
        <Image
          src={imageSrc}
          alt="testimonial"
          width={500}
          height={300}
          className="rounded-2xl max-w-full max-h-[300px] object-cover shadow-2xl"
        ></Image>
      </div>
      <div className={`lg:p-5 ${swapSides ? "order-1" : "order-2"}`}>
        <article className="max-h-full">
          <h4 className="text-xl uppercase mb-4">{category}</h4>
          <h3 className="text-2xl mb-4 font-semibold">{heading}</h3>
          <p className="font-normal text-black/[0.5] text-sm md:text-base lg:text-lg leading-relaxed mb-8 lg:max-h-[250px] overflow-hidden">
            {content}
          </p>
          <Link href={`/case-studies/${caseStudyId}`}>
            <OutlinedButton size="medium">See case study</OutlinedButton>
          </Link>
        </article>
      </div>
    </div>
  );
}

export default TwoColGrid;
