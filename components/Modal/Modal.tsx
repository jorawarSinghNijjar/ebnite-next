import { useCallback, useEffect } from "react";
import { ImCross } from "react-icons/im";

interface props {
  title?: string;
  children?: React.ReactElement;
  show: boolean;
  onClose: () => void;
  width: string;
}

function Modal({children, show, onClose, width }: props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="z-1000 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 transition-all duration-500"
      onClick={onClose}
    >
      <div
        className="relative min-w-[320px] max-w-full transition-all duration-500"
        onClick={(e) => e.stopPropagation()}
        style={{ width: width }}
      >
        <div className="absolute -top-5 -right-5">
          <ImCross onClick={onClose} className="text-white cursor-pointer"/>
        </div>
        <div className="modal-header"></div>
        <div className="min-h-[500px]">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}

export default Modal;
