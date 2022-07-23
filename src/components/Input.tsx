import { ChangeEvent } from 'react';

type InputProps = {
  value: string;
  required?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange, required }: InputProps) => {
  return (
    <input
      required={required}
      className="w-full rounded-sm bg-orange-100 p-2 font-mono
dark:bg-slate-700 dark:text-orange-200"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Input;
