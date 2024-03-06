import { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

const observer = new IntersectionObserver(() => {});
observer.observe();

const useIntersection = ({ root, rootMargin = '0px', threshold = 0.5, onIntersect }) => {
  const [target, setTarget] = (useState < HTMLElement) | (null > null);

  const observerCallback = useCallback(
    throttle(async ([entry], observer) => {
      if (entry.isIntersecting) {
        document.body.style.overflow = 'hidden';
        observer.unobserve(entry.target);
        await onIntersect();
        await observer.observe(entry.target);

        return (document.body.style.overflow = 'auto');
      }
    }, 1000),
    []
  );

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(observerCallback, { root, rootMargin, threshold });
    observer.observe(target);

    return () => observer.disconnect();
  }, [target, root, rootMargin, threshold, onIntersect]);

  return { setTarget };
};

export default useIntersection;
