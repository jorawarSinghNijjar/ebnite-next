
interface Heading2Props{
    children: React.ReactNode
}
const Heading2 = ({children}:Heading2Props) => {
    return (
        <h2
        className="text-slate-950 text-6xl font-semibold mb-6"
      >
       {children}
      </h2>
    );
}

export default Heading2;