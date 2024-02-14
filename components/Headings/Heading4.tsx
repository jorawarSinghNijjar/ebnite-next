
interface props{
    children: React.ReactNode,
    className?:string
}
const Heading4 = ({children, className}:props) => {
    return (
        <h3
        className={`text-xl md:text-4xl font-bold mb-6 ${className}`}
      >
       {children}
      </h3>
    );
}

export default Heading4;