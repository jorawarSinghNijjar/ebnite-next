
interface props{
    children: React.ReactNode,
    className?:string
}
const Heading5 = ({children, className}:props) => {
    return (
        <h3
        className={`text-3xl font-bold mb-3 ${className}`}
      >
       {children}
      </h3>
    );
}

export default Heading5;