type TextAreaProps = {
  placeholder: string;
  className:string;
};

const TextArea = ({ placeholder, className }: TextAreaProps) => {
  return (
    <textarea
      rows={6}
      placeholder={placeholder}
      className={`px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium ${className}`}
    />
  );
};

export default TextArea;
