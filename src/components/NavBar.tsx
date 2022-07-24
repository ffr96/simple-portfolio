import { useContext } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Contxt } from '@/ctx/provider';

import OptionSelector from './OptionsSelector';

interface NavProps {
  site: {
    text: {
      eng?: string;
      spa?: string;
    };
    link: string;
  }[];
}

const NavBar = ({ site }: NavProps) => {
  const [lang] = useContext(Contxt);
  const { route } = useRouter();

  return (
    <div
      className="flex border-b-4 border-b-slate-800 bg-orange-200 
    transition-colors dark:border-orange-300 dark:bg-black"
    >
      <div
        className="relative flex h-12 w-full flex-row place-items-center justify-around 
       py-8 pl-14"
      >
        {site &&
          site.map((obj) => {
            return (
              <Link key={obj.link} passHref href={`/${obj.link}`}>
                <div className="relative block cursor-pointer font-sans text-sm text-slate-800 antialiased lg:text-lg">
                  <a
                    className={`
                    before:absolute before:left-[100%] before:top-0 before:h-full before:w-0.5 before:-translate-y-4 
                    before:bg-slate-600 before:opacity-0 before:transition-all before:content-[''] after:absolute
                    after:left-0 after:bottom-0 after:h-0.5 after:w-full after:-translate-x-4 
                    after:transition-all after:content-[''] hover:text-black hover:before:translate-y-1 
                    hover:before:opacity-100 hover:after:translate-x-1 hover:after:bg-slate-900 
                    dark:text-orange-400 before:dark:bg-orange-200 hover:dark:text-orange-300 
                    hover:after:dark:bg-orange-200`}
                  >
                    <div
                      className={`${
                        route.slice(1) === obj.link
                          ? 'before:h-0.5 before:w-full before:bottom-0 before:bg-black dark:before:bg-orange-300 before:absolute font-semibold'
                          : ''
                      }`}
                    >
                      {lang === 'SPA' ? obj.text.spa : obj.text.eng}
                    </div>
                  </a>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="flex items-center pr-10">
        <OptionSelector lang={lang} />
      </div>
    </div>
  );
};

export { NavBar };
