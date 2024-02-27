"use client";

import useIsVisible from "@/lib/hooks/useIsVisible";
import { ReactNode, useEffect, useRef, useState } from "react";

interface props {
  start: number;
  end: number;
  duration: number;
  classes: string;
  suffix: string;
}
const AnimatedCounter: React.FC<props> = ({
  start,
  end,
  duration,
  classes,
  suffix,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const isVisible = useIsVisible(ref);
  const [current, setCurrent] = useState(start);
  //   const [done, setDone] = useState(false);
  const intervalDuration = duration / 100;
  const step = (end - start) / intervalDuration;

  useEffect(() => {
    // if (!isVisible) setCurrent(start);
    const interval = setInterval(() => {
      if (isVisible && current < end) {
        if (current + step > end) {
          setCurrent(end);
        } else {
          setCurrent(current + step);
        }
      } else {
        clearInterval(interval);
      }
    }, intervalDuration);
    return () => clearInterval(interval);
  }, [current, end, isVisible]);

  //   console.log(current);
  //   console.log("Step: ",step)
  //   console.log("interval: ",intervalDuration)
  //   console.log(isVisible);
  return (
    <div ref={ref} className={`${classes}`}>
      <span >
        {Math.round(current)}
        {`${suffix && current >= end ? suffix : ""}`}
      </span>
    </div>
  );
};

export default AnimatedCounter;
