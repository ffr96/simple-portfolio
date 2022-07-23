import React, { useEffect, useState } from 'react';

import { AppProps } from 'next/app';

import { NavBar } from '@/components/NavBar';
import { simpleReducer } from '@/ctx/languageReducer';
import { LangProvider } from '@/ctx/provider';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add(theme);
    }
    setLoading(false);
  }, []);
  if (loading) return <div>loading...</div>;
  return (
    <LangProvider reducer={simpleReducer}>
      <div>
        <NavBar
          site={[
            { text: { eng: 'About me', spa: 'Sobre mi' }, link: '' },
            { text: { eng: 'Projects', spa: 'Proyectos' }, link: 'projects' },
            { text: { eng: 'Contact', spa: 'Contacto' }, link: 'contact' },
          ]}
        />
        <Component {...pageProps} />
      </div>
    </LangProvider>
  );
};
export default MyApp;
