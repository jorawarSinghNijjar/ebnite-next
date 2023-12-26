import { HTMLInputTypeAttribute } from "react";

type TextInputProps = {
  type: string;
  placeholder: string;
  name: string; // Add the 'name' prop
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  type,
  placeholder,
  name,
  className,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`}
    />
  );
};

export default TextInput;
