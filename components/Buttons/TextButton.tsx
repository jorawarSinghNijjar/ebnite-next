type TextButtonProps = {
    children?: React.ReactNode;
    size: string;
    className?: string;
  };
  
  const TextButton = ({ children, size, className }: TextButtonProps) => {
    switch (size) {
      case "small":
        return (
          <button
            className={`text-sm font-medium ${className}`}
          >
            {children}
          </button>
        );
  
      case "medium":
        return (
          <button
            className={`text-base font-medium ${className}`}
          >
            {children}
          </button>
        );
  
      case "large":
        return (
          <button
            className={`text-xl font-medium ${className}`}
          >
            {children}
          </button>
        );
    }
  };
  
  export default TextButton;
  