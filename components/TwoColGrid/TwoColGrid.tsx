import Image from "next/image";
import OutlinedButton from "../Buttons/OutlinedButton";

interface props {
  category: string;
  heading: string;
  content: string;
  swapSides?: boolean;
}

function TwoColGrid({ category, heading, content, swapSides }: props) {
  return (
    <div className="grid gap-8 grid-cols-2 mb-56">
      <div
        className={`flex items-center justify-center max-w-1/2 ${
          swapSides ? "order-2" : "order-1"
        }`}
      >
        <Image
          src="https://picsum.photos/seed/picsum/400/500"
          alt="testimonial"
          width={400}
          height={500}
          className="rounded-2xl min-w-[400px] drop-shadow-2xl"
        ></Image>
      </div>
      <div className={`p-5 ${swapSides ? "order-1" : "order-2"}`}>
        <article>
          <h4 className="text-xl uppercase mb-4">{category}</h4>
          <h3 className="text-2xl mb-4 font-semibold">{heading}</h3>
          <p className="font-normal text-black/[0.5] text-base leading-relaxed mb-8 ">
            {content}
          </p>
          <OutlinedButton>See case study</OutlinedButton>
        </article>
      </div>
    </div>
  );
}

export default TwoColGrid;
