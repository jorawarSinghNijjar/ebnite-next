type TextAreaProps = {
  placeholder: string;
};

const TextArea = ({ placeholder }: TextAreaProps) => {
  return (
    <textarea
      rows={6}
      placeholder={placeholder}
      className="px-3 py-4 w-full outline-secondary bg-lighter text-primary font-medium mb-8"
    />
  );
};

export default TextArea;
