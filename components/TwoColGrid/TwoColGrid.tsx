import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";
import Link from "next/link";

interface props {
  imageSrc: string;
  category: string;
  heading: string;
  content: string;
  swapSides?: boolean;
  caseStudyId?:string;
}

function TwoColGrid({
  imageSrc,
  category,
  heading,
  content,
  swapSides,
  caseStudyId
}: props) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 mb-10 lg:mb-32">
      <div
        className={`flex items-center md:justify-start lg:justify-center max-w-full lg:max-w-1/2 ${
          swapSides ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={imageSrc}
          alt="testimonial"
          width={700}
          height={500}
          className="rounded-2xl max-w-full max-h-[500px] object-cover shadow-2xl"
        ></Image>
      </div>
      <div className={`lg:p-5 ${swapSides ? "order-1" : "order-2"}`}>
        <article>
          <h4 className="text-xl uppercase mb-4">{category}</h4>
          <h3 className="text-2xl mb-4 font-semibold">{heading}</h3>
          <p className="font-normal text-black/[0.5] text-xl leading-relaxed mb-8 ">
            {content}
          </p>
          <Link href={`/case-study/${caseStudyId}`}>
            <OutlinedButton size="medium">See case study</OutlinedButton>
          </Link>
        </article>
      </div>
    </div>
  );
}

export default TwoColGrid;
