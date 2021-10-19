const Observer = (setState) => {
  const target = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setState(entry.target);
      }
    });
  };

  const observerOption = { threshold: 1 };

  const setObserver = new IntersectionObserver(target, observerOption);

  return setObserver;
};

export default Observer;
