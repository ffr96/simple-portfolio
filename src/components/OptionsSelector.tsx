import { useContext, useState } from 'react';

import Image from 'next/image';

import { Contxt } from '@/ctx/provider';
import WheelDark from '@/public/assets/images/settingsdark.png';
import WheelLight from '@/public/assets/images/settingslight.png';

import OptionsCard from './OptionsCard';

const OptionSelector = ({ lang }: { lang: string }) => {
  const [mouseenter, setMouseEnter] = useState(false);
  const [mouseleft, setMouseLeft] = useState(false);
  const [, dispatch] = useContext(Contxt);

  const handleLang = (language: string) => {
    switch (language) {
      case 'SPA':
        dispatch({ type: 'SET_LANGUAGE', value: language });
        break;
      case 'ENG':
        dispatch({ type: 'SET_LANGUAGE', value: language });
        break;
      default:
    }
  };

  const handleTheme = (thm: string) => {
    switch (thm) {
      case 'dark':
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
        break;
      default:
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setMouseEnter(false);
        setMouseLeft(true);
      }}
    >
      <div
        onMouseEnter={() => {
          setMouseEnter(true);
          setMouseLeft(false);
        }}
        className={`p-1.5 px-2 ${mouseenter ? 'animate-halfrotatef' : ''}
        ${mouseleft ? 'animate-halfrotateb' : ''} 
        `}
      >
        <div className="relative hidden h-8 w-8 dark:block">
          <Image src={WheelDark} alt="options" layout="fill" />
        </div>
        <div className="relative block h-8 w-8 dark:hidden">
          <Image src={WheelLight} alt="options" layout="fill" />
        </div>
      </div>
      {mouseenter && (
        <OptionsCard
          lang={lang}
          setMouseEnter={setMouseEnter}
          handleLang={handleLang}
          handleTheme={handleTheme}
        />
      )}
    </div>
  );
};

export default OptionSelector;
