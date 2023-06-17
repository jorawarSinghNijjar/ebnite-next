type FilledButtonProps = {
  children?: React.ReactNode;
  size: string;
};

const FilledButton = ({ children, size }: FilledButtonProps) => {
  switch (size) {
    case "small":
      return (
        <button
          className={`bg-secondary px-4 py-2 rounded-3xl hover:scale-x-105 transition text-slate-100`}
        >
          {children}
        </button>
      );

    case "medium":
      return (
        <button
          className={`bg-secondary px-6 py-3 rounded-3xl hover:scale-x-105 transition text-slate-100`}
        >
          {children}
        </button>
      );

    case "large":
      return (
        <button
          className={`bg-secondary px-12 py-6 rounded-3xl hover:scale-x-105 transition text-slate-100`}
        >
          {children}
        </button>
      );
  }
};

export default FilledButton;
