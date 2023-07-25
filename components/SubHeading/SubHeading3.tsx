interface props {
  children: string;
  className?: string;
}
function SubHeading3({ children,className }: props) {
  return (
    <h3 className={`text-slate-700 text-sm lg:text-lg font-normal mb-6 ${className}`}>
      {children}
    </h3>
  );
}

export default SubHeading3;
