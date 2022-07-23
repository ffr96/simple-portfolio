import React from 'react';

interface MainProps {
  children: JSX.Element | string;
}

const Main = (props: MainProps) => {
  return (
    <div
      className="flex h-full min-h-screen w-full justify-center overflow-x-clip text-clip bg-gradient-to-t 
      from-orange-100 to-orange-300 p-6 pt-12 text-black dark:bg-gradient-to-t  
      dark:from-black dark:to-zinc-900 dark:text-orange-300 lg:p-28 lg:pt-32"
    >
      {props.children}
    </div>
  );
};

export { Main };
