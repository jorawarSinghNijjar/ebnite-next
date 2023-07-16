// type Options = {
//   value: string;
//   text: string
// };

type SelectProps = {
  children: React.ReactNode;
  name: string;
};

const SelectInput = ({ children, name } : SelectProps) => {
  return (
    <select name={name} className="px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium mb-8">
        {/* {options?.map(({value,text}, index) => <option key={index} value={value}>{text}</option>)} */}
        {children}
    </select>
  );
};

export default SelectInput;
