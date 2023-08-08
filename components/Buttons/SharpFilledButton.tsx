type props = {
  children?: React.ReactNode;
  size: string;
  className?: string;
};

const SharpFilledButton = ({ children, size, className }: props) => {
  switch (size) {
    case "small":
      return (
        <button
          className={`px-5 py-3 rounded-lg hover:scale-x-105 transition text-sm font-medium ${className}`}
        >
          {children}
        </button>
      );

    case "medium":
      return (
        <button
          className={`px-7 py-3 rounded-lg hover:scale-x-105 transition text-base font-medium ${className}`}
        >
          {children}
        </button>
      );

    case "large":
      return (
        <button
          className={`px-12 py-6 rounded-lg hover:scale-x-105 transition text-xl font-medium ${className}`}
        >
          {children}
        </button>
      );
  }
};

export default SharpFilledButton;
