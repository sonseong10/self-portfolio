import {useCallback, useEffect, useState} from 'react';

const useTheme = () => {
  const getInitialTheme = useCallback(() => {
    let theme = window.localStorage.getItem('app_theme');
    const THEME = theme !== 'light' && theme !== 'dark';

    if (!theme || THEME) {
      const {matches} = window.matchMedia('(prefers-color-scheme: dark)');
      theme = matches ? 'dark' : 'light';
    }

    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('app_theme', theme);
  }, [theme]);

  return {theme, toggleTheme};
};

export default useTheme;
