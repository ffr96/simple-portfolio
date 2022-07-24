import { SetStateAction, Dispatch } from 'react';

import Image from 'next/image';

import DarkModeIcon from '@/public/assets/darkicon.png';
import EnglishIcon from '@/public/assets/engicon.png';
import LightModeIcon from '@/public/assets/lighticon.png';
import SpanishIcon from '@/public/assets/spaicon.png';

import { SimpleSeparator } from './SimpleSeparator';

type OptionsProp = {
  lang: string;
  setMouseEnter: Dispatch<SetStateAction<boolean>>;
  handleLang: (arg0: string) => void;
  handleTheme: (arg0: string) => void;
};

const OptionsCard = ({
  lang,
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
       text-slate-900 shadow-xl dark:bg-slate-600 dark:text-orange-300 md:w-32"
    >
      <div id="iconImages" className="flex items-center justify-center p-2">
        <div className="hover:scale-110">
          {(lang === 'ENG' && (
            <Image
              src={SpanishIcon}
              alt="spanish icon"
              width={35}
              height={35}
              onClick={() => handleLang('SPA')}
            />
          )) || (
            <Image
              src={EnglishIcon}
              alt="english icon"
              width={35}
              height={35}
              onClick={() => handleLang('ENG')}
            />
          )}
        </div>
      </div>
      <SimpleSeparator
        dimension={{ height: '1px', width: '80%' }}
        position={'center'}
      />
      <div id="iconImages" className="flex items-center justify-center p-2">
        <div className="hidden hover:scale-110 dark:block">
          <Image
            src={LightModeIcon}
            alt="light mode icon"
            width={40}
            height={40}
            onClick={() => handleTheme('')}
          />
        </div>
        <div className="block hover:scale-110 dark:hidden">
          <Image
            src={DarkModeIcon}
            alt="dark mode icon"
            width={40}
            height={40}
            onClick={() => handleTheme('dark')}
          />
        </div>
      </div>
    </div>
  );
};

export default OptionsCard;
