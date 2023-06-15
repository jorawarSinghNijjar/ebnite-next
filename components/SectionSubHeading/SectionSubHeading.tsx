interface props {
  text: string;
}
function SectionSubHeading({ text }: props) {
  return (
    <h3 className="text-slate-700 text-3xl text-center font-normal w-1/2 mx-auto mb-28">
      {text}
    </h3>
  );
}

export default SectionSubHeading;
