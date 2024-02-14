interface props {
  children: string;
  className?: string;
}
function SubHeading2({ children,className }: props) {
  return (
    <h3 className={`text-slate-700 text-base lg:text-xl 2xl:text-2xl font-normal mb-10 ${className}`}>
      {children}
    </h3>
  );
}

export default SubHeading2;
