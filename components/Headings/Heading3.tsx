
interface Heading3Props{
    children: React.ReactNode
}
const Heading3 = ({children}:Heading3Props) => {
    return (
        <h3
        className="text-slate-950 text-4xl text-center font-semibold mb-8"
      >
       {children}
      </h3>
    );
}

export default Heading3;