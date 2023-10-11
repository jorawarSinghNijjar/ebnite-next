type TextAreaProps = {
  placeholder: string;
  className: string;
  name: string; // Add the 'name' prop
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  placeholder,
  className,
  name,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      rows={6}
      placeholder={placeholder}
      className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
