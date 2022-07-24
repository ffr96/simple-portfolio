import { ChangeEvent, useState } from 'react';

const useInput = (): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };
  return [text, handleChange];
};

export { useInput };
