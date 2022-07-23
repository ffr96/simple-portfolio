type ButtonProps = {
  type?: 'submit' | 'button';
  name?: string;
  onSubmit?: () => void;
  children: React.ReactNode;
};

const Button = ({ type, name, onSubmit, children }: ButtonProps) => {
  return (
    <button
      type={type}
      name={name}
      onSubmit={onSubmit}
      className="mt-4 w-2/5 self-center rounded-xl bg-orange-400 p-2 transition-transform hover:scale-110 dark:bg-slate-800"
    >
      {children}
    </button>
  );
};

export { Button };
