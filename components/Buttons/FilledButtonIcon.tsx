import { ReactElement } from "react";

type FilledButtonProps = {
  children?: React.ReactNode;
  size: string;
  className?: string;
  onClick?: () => void;
  icon: ReactElement;
};

const FilledButtonIcon = ({
  children,
  size,
  className,
  onClick,
  icon,
}: FilledButtonProps) => {
  switch (size) {
    case "small":
      return (
        <button
          className={`px-5 py-3 rounded-3xl hover:scale-x-105 transition text-sm font-medium ${className}`}
          onClick={onClick}
        >
          <div className="flex flex-row gap-2">
            <span>{icon}</span>
            <span>{children}</span>
          </div>
        </button>
      );

    case "medium":
      return (
        <button
          className={`flex flex-row items-center px-5 py-3 rounded-3xl text-sm font-medium ${className}`}
          onClick={onClick}
        >
          <div className="flex flex-row gap-2">
            <span>{icon}</span>
            <span>{children}</span>
          </div>
        </button>
      );

    case "large":
      return (
        <button
          className={`px-12 py-6 rounded-3xl hover:scale-x-105 transition text-xl font-medium ${className}`}
          onClick={onClick}
        >
          <div className="flex flex-row gap-2">
            <span>{icon}</span>
            <span>{children}</span>
          </div>
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

export default FilledButtonIcon;
