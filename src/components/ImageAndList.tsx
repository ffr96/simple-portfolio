import { useState } from 'react';

import Image from 'next/image';

import { SimpleSeparator } from './SimpleSeparator';

type ImageListProps = {
  img: {
    light: string | StaticImageData;
    dark: string | StaticImageData;
  };
  alt: string;
  title: string;
  content: string[];
};

const ImageAndList = ({ img, alt, title, content }: ImageListProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="m-5 max-w-sm rounded-lg bg-slate-900 p-5 text-orange-300 shadow-lg
      shadow-black/60 transition-all hover:scale-110 hover:bg-slate-700 dark:bg-orange-300
      dark:text-black dark:shadow-md dark:shadow-orange-200 dark:hover:bg-orange-200 lg:max-w-xs"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="flex justify-center pt-2">
        {isHover ? (
          <h3 className="animate-swipeleft text-3xl font-semibold">{title}</h3>
        ) : (
          <div className="mb-5 flex h-12 justify-center">
            <div className="hidden dark:block">
              <Image
                src={img.light}
                alt={alt}
                height={'100%'}
                width={'100%'}
                className={`animate-swiperight`}
              />
            </div>
            <div className="block dark:hidden">
              <Image
                src={img.dark}
                alt={alt}
                height={'100%'}
                width={'100%'}
                className="animate-swiperight"
              />
            </div>
          </div>
        )}
      </div>

      <SimpleSeparator dimension={{ width: '80%', height: '2px' }} />
      <div className="p-5 text-lg">
        {content.map((txt, i) => {
          return (
            <ul
              key={i}
              className="first-letter:text-xl first-letter:font-semibold"
            >
              {txt}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ImageAndList;
