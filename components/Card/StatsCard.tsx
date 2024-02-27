import React from "react";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";

interface props {
  numberData: number;
  suffix:string;
  desc: string;
}
function StatsCard({ numberData, desc, suffix }: props) {
  return (
    <div className="p-14 shadow-xl rounded-2xl text-center bg-white">
      {/* <h4 className='text-5xl font-bold mb-4'>{numberData}</h4> */}

      <AnimatedCounter
        start={0}
        end={numberData}
        duration={4000}
        classes="text-5xl font-bold mb-4"
        suffix={suffix}
      ></AnimatedCounter>
      <p className="text-xl">{desc}</p>
    </div>
  );
}

export default StatsCard;
