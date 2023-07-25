interface props {
  children: string;
  className?: string;
}
function SubHeading1({ children,className }: props) {
  return (
    <h3 className={`text-slate-700 text-xl lg:text-2xl font-normal mb-10 ${className}`}>
      {children}
    </h3>
  );
}

export default SubHeading1;
