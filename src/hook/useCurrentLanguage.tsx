import { useEffect, useState } from 'react';

const useCurrentLanguage = () => {
  const [language, setLanguage] = useState<string | null>('SPA');

  useEffect(() => {
    const lang = localStorage.getItem('lang');
    setLanguage(lang);
  }, [language]);

  return [language];
};

export { useCurrentLanguage };
