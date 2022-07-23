import { SetStateAction, Dispatch } from 'react';

import { SimpleSeparator } from './SimpleSeparator';

type OptionsProp = {
  setMouseEnter: Dispatch<SetStateAction<boolean>>;
  handleLang: (arg0: string) => void;
  handleTheme: (arg0: string) => void;
};

const OptionsCard = ({
  setMouseEnter,
  handleLang,
  handleTheme,
}: OptionsProp) => {
  return (
    <div
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className="absolute right-0 z-10 w-16 rounded-md border-solid bg-orange-300 
      pl-5 text-slate-900 shadow-xl dark:bg-slate-600 dark:text-orange-300 md:w-32"
    >
      <div>
        <div onClick={() => handleLang('SPA')}>SPA</div>
        <div onClick={() => handleLang('ENG')}>ENG</div>
      </div>
      <SimpleSeparator
        dimension={{ height: '1px', width: '80%' }}
        position={'start'}
      />
      <div>
        <div onClick={() => handleTheme('dark')}>Dark Mode</div>
        <div onClick={() => handleTheme('')}>Light Mode</div>
      </div>
    </div>
  );
};

export default OptionsCard;
