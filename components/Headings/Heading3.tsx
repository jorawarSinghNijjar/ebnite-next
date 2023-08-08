
interface Heading3Props{
    children: React.ReactNode
}
const Heading3 = ({children}:Heading3Props) => {
    return (
        <h3
        className="text-5xl font-bold mb-4"
      >
       {children}
      </h3>
    );
}

export default Heading3;