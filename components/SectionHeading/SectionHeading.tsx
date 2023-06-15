
interface SectionHeadingProps{
    text: string
}
function SectionHeading({text}:SectionHeadingProps) {
    return (
        <h2
        className="text-slate-950 text-6xl text-center font-semibold mb-8"
      >
       {text}
      </h2>
    );
}

export default SectionHeading;