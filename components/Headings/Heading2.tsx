
interface Heading2Props{
    children: React.ReactNode
}
const Heading2 = ({children}:Heading2Props) => {
    return (
        <h2
        className="text-slate-950 text-6xl text-center font-semibold mb-8"
      >
       {children}
      </h2>
    );
}

export default Heading2;