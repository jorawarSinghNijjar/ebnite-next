type FilledButtonProps = {
  children?: React.ReactNode;
  size: string;
  className?: string;
};

const FilledButton = ({ children, size, className }: FilledButtonProps) => {
  switch (size) {
    case "small":
      return (
        <button
          className={`px-5 py-3 rounded-3xl hover:scale-x-105 transition text-sm font-medium ${className}`}
        >
          {children}
        </button>
      );

    case "medium":
      return (
        <button
          className={`px-7 py-3 rounded-3xl hover:scale-x-105 transition text-base font-medium ${className}`}
        >
          {children}
        </button>
      );

    case "large":
      return (
        <button
          className={`px-12 py-6 rounded-3xl hover:scale-x-105 transition text-xl font-medium ${className}`}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`px-5 py-3 rounded-3xl hover:scale-x-105 transition text-sm font-medium ${className}`}
        >
          {children}
        </button>
      );
  }
};

export default FilledButton;
