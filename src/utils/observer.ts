const Observer = (setState: any) => {
  const target = (entries: any) => {
    entries.forEach((entry: any) => {
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
