
interface Heading1Props{
    children: React.ReactNode
}
const Heading1 = ({children}:Heading1Props) => {
    return (
        <h1
        className="text-slate-950 text-4xl lg:text-7xl font-semibold mb-8"
      >
       {children}
      </h1>
    );
}

export default Heading1;