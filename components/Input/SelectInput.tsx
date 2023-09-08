// type Options = {
//   value: string;
//   text: string
// };

type SelectProps = {
  children: React.ReactNode;
  name: string;
  className?:string;
  selectedValue:string;
  onSelectedChange:(value:string) => void;
};

const SelectInput = ({ children, name,className,onSelectedChange,selectedValue } : SelectProps) => {

  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onSelectedChange(newValue);
  }

  return (
    <select name={name} className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`} value={selectedValue} onChange={handleChange}>
        {/* {options?.map(({value,text}, index) => <option key={index} value={value}>{text}</option>)} */}
        {children}
    </select>
  );
};

export default SelectInput;
