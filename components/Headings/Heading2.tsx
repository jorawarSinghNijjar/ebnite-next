
interface Heading2Props{
    children: React.ReactNode
}
const Heading2 = ({children}:Heading2Props) => {
    return (
        <h2
        className="text-6xl font-semibold mb-6"
      >
       {children}
      </h2>
    );
}

export default Heading2;