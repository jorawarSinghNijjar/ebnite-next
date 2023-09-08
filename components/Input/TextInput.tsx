import { HTMLInputTypeAttribute } from "react";

type TextInputProps = {
  placeholder: string;
  type: HTMLInputTypeAttribute | undefined;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  placeholder,
  type,
  className,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`}
    />
  );
};

export default TextInput;
