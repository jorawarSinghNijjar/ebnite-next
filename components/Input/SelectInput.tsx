// type Options = {
//   value: string;
//   text: string
// };

type SelectProps = {
  children: React.ReactNode;
  name: string;
  className?: string;
  selectedValue?: string;
  onSelectedChange?: (value: string) => void;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInput = ({
  children,
  name,
  className,
  onSelectedChange,
  selectedValue,
  value,
  onChange,
}: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onSelectedChange && onSelectedChange(newValue);
    onChange && onChange(event);
  };

  return (
    <select
      name={name}
      className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`}
      value={selectedValue || value}
      onChange={handleChange}
    >
      {/* {options?.map(({value,text}, index) => <option key={index} value={value}>{text}</option>)} */}
      {children}
    </select>
  );
};

export default SelectInput;
