const Observer = (setState: React.Dispatch<React.SetStateAction<boolean | Element>>) => {
  const target = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setState(entry.target);
      }
    });
  };

  const observerOption = {threshold: 0.5};

  const setObserver = new IntersectionObserver(target, observerOption);

  return setObserver;
};

export default Observer;
