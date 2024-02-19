
interface Heading3Props{
    children: React.ReactNode,
    className?: string
}
const Heading3 = ({children, className}:Heading3Props) => {
    return (
        <h3
        className={`text-5xl font-bold mb-4 ${className}`}
      >
       {children}
      </h3>
    );
}

export default Heading3;