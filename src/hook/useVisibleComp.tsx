import { MutableRefObject, useEffect, useState } from 'react';

type UseVisibleProps = {
  options: IntersectionObserverInit;
  ref: MutableRefObject<null>;
};

/**
 * Hook for checking intersections
 * @param options IntersectionObserverInit
 * @param ref ref to the element that's being watched
 * @returns [visible, alreadySeen] booleans
 */

const useVisibleComp = ({ options, ref }: UseVisibleProps) => {
  const [visible, setVisible] = useState(false);
  const [alreadySeen, setAlreadySeen] = useState(false);
  const obsCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry) {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setAlreadySeen(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(obsCallback, options);
    if (ref.current) observer.observe(ref.current);
  });
  return [visible, alreadySeen];
};

export { useVisibleComp };
