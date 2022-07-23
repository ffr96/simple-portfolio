import { createContext, useReducer, useEffect } from 'react';

export const stateIn = 'SPA' || 'ENG';

type Action =
  | {
      type: 'SET_LANGUAGE';
      value: 'SPA' | 'ENG';
    }
  | {
      type: 'GET_LANGUAGE';
    };

export const Contxt = createContext<[string, React.Dispatch<Action>]>([
  'SPA',
  () => stateIn,
]);

type LangProviderProps = {
  reducer: (state: any, action: any) => any;
  children: React.ReactElement;
};

export const LangProvider = ({ reducer, children }: LangProviderProps) => {
  const [state, dispatch] = useReducer(reducer, stateIn);
  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (localLang) dispatch({ type: 'SET_LANGUAGE', value: localLang });
  }, []);
  return (
    <Contxt.Provider value={[state, dispatch]}>{children}</Contxt.Provider>
  );
};
