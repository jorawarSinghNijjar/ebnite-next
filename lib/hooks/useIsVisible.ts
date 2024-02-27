import { RefObject, useEffect, useState } from "react";

const useIsVisible = (ref: RefObject<HTMLElement> ) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));
    if(ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }

  },[ref])

  return isIntersecting;
};

export default useIsVisible;
