import { Dispatch, useState } from "react";

type ChipProps = {
  id?: string;
  label: string;
  selected?: boolean;
  selectChip?: any;
};

const Chip = ({ id, label, selected, selectChip }: ChipProps) => {
  const handleChipClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement; // Narrow the type to HTMLElement
    const id = target.id;
    selectChip?.(id); 
  };

  return (
    <div className="relative">
      <input
        type="radio"
        name="project-category"
        id={id}
        className="absolute top-0 left-0 w-max invisible"
        onClick={handleChipClick}
      ></input>
      <label
        htmlFor={id}
        className={`rounded-full py-2 px-6 text-sm cursor-pointer ${
          selected ? "bg-black text-white" : "bg-gray-200 text-black"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Chip;
