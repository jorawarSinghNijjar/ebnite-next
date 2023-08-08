// type Options = {
//   value: string;
//   text: string
// };

type SelectProps = {
  children: React.ReactNode;
  name: string;
  className?:string;
};

const SelectInput = ({ children, name,className } : SelectProps) => {
  return (
    <select name={name} className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`}>
        {/* {options?.map(({value,text}, index) => <option key={index} value={value}>{text}</option>)} */}
        {children}
    </select>
  );
};

export default SelectInput;
