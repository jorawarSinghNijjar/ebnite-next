import { useCallback, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  title?: string;
  children?: React.ReactElement;
  show: boolean;
  onClose: () => void;
  width?: string;
  cancelInside?: boolean
}

function Modal({ children, show, onClose, width, cancelInside }: props) {
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
      className="z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 transition-all duration-500"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: -500, scale:0 }}
        animate={{ opacity: 1, y: 0, scale:1 }}
        exit={{ opacity: 0, y: 0, scale:0 }}
        transition={{ duration: 0.4, ease: "linear", }}
        className="relative min-w-[320px] max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
        style={{ width: width ? width : "auto"}}
      >
        <div className={`absolute ${cancelInside ? "top-5 right-5": "-top-5 -right-5"}`}>
          <ImCross onClick={onClose} className={`${cancelInside ? "text-black" :"text-white"} cursor-pointer`} />
        </div>
        <div className="modal-header"></div>
        <div className="min-h-[300px]">{children}</div>
        <div className="modal-footer"></div>
      </motion.div>
    </div>
  );
}

export default Modal;
