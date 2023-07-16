
interface SectionHeadingProps{
    children: React.ReactNode
}
const SectionHeading = ({children}:SectionHeadingProps) => {
    return (
        <h2
        className="text-slate-950 text-6xl text-center font-semibold mb-8"
      >
       {children}
      </h2>
    );
}

export default SectionHeading;