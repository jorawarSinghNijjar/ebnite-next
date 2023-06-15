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
    <div className="max-w-[340px] drop-shadow-xl bg-white  flex flex-col items-start">
      <Image src={imageSrc} alt={title} 
    //    style={{position: "relative", width: "100%"}} 
      width={340} height={300}
      ></Image>
      <div className="p-8">
        <h4 className="text-2xl font-medium text-slate-950 mb-4">{title}</h4>
        <p className="text-base font-normal mb-4">{description}</p>
        <OutlinedButton>{buttonText}</OutlinedButton>
      </div>
    </div>
  );
}

export default Card2;
