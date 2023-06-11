import Image from "next/image";

interface CardProps{
    imageSrc: string,
    title: string,
    description: string
}

function Card({imageSrc,title,description}:CardProps) {
  return (
    <div className="w-full px-12 py-10 shadow-xl bg-white rounded-2xl flex flex-col items-center transition ease-in-out hover:-translate-y-4 hover:scale-95 cursor-pointer">
        <Image src={imageSrc} alt={title} width={100} height={100}></Image>
      <h4 className="text-2xl font-medium text-slate-950">{title}</h4>
      <p className="text-xl font-normal text-center">
       {description}
      </p>
    </div>
  );
}

export default Card;
