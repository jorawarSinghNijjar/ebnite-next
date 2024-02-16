import { HTMLInputTypeAttribute } from "react";

type TextInputProps = {
  type: string;
  placeholder: string;
  name: string; // Add the 'name' prop
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: string;
};

const TextInput = ({
  size,
  type,
  placeholder,
  name,
  className,
  value,
  onChange,
}: TextInputProps) => {
  switch (size) {
    case "small":
      return (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`p-2 md:px-2 md:py-1 w-full text-xs md:text-[10px] outline-secondary bg-lighter text-primary font-medium ${className}`}
        />
      );
    case "medium":
      return (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`p-2 md:px-3 md:py-2 w-full text-sm md:text-base outline-secondary bg-lighter text-primary font-medium ${className}`}
        />
      );
    case "large":
      return (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`p-2 md:px-3 md:py-4 w-full text-sm md:text-lg outline-secondary bg-lighter text-primary font-medium ${className}`}
        />
      );
    default:
      return (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`p-2 md:px-3 md:py-4 w-full text-sm md:text-base outline-secondary bg-lighter text-primary font-medium ${className}`}
        />
      );
  }
};

export default TextInput;
