function OutlinedButton({ children }: { children: React.ReactNode }) {
  return <button className="border-2 border-secondary py-2 px-4 rounded-full uppercase text-xs text-secondary font-medium hover:bg-secondary hover:text-slate-100 transition ease-in">{children}</button>;
}

export default OutlinedButton;
