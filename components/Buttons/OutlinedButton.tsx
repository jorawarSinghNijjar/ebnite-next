type props = {
  children: React.ReactNode;
  size?: string;
};
function OutlinedButton({ size,children }: props) {
  switch(size){
    case "small": return (
      <button
        className={`border border-secondary py-2 px-4 rounded-full uppercase text-xs text-secondary font-medium hover:bg-secondary hover:text-slate-100 transition ease-in w-max`}
      >
        {children}
      </button>
    );

    case "medium": return (
      <button
        className={`border-2 border-secondary py-4 px-8 rounded-full uppercase text-sm text-secondary font-medium hover:bg-secondary hover:text-slate-100 transition ease-in w-max`}
      >
        {children}
      </button>
    );

    case "large": return (
      <button
        className={`border-2 border-secondary py-6 px-12 rounded-full uppercase text-base text-secondary font-medium hover:bg-secondary hover:text-slate-100 transition ease-in w-max`}
      >
        {children}
      </button>
    );
    default: return (
      <button
        className={`border border-secondary py-2 px-4 rounded-full uppercase text-xs text-secondary font-medium hover:bg-secondary hover:text-slate-100 transition ease-in w-max`}
      >
        {children}
      </button>
    );
  }
  
}

export default OutlinedButton;
