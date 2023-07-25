
interface props{
    children: React.ReactNode,
    className?:string
}
const Heading6 = ({children, className}:props) => {
    return (
        <h3
        className={`text-2xl font-bold mb-6 ${className}`}
      >
       {children}
      </h3>
    );
}

export default Heading6;