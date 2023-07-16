

type ChipGroupProps = {
    children: React.ReactNode;
    // selected: Number;
}

const ChipGroup = ({children}: ChipGroupProps) => {

 

  return <div className="flex gap-4"
//    onClick={handleChipSelect}
   >
    {children}
  </div>;
};

export default ChipGroup;
