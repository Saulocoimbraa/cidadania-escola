import { useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark' | 'pastel';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('cidadania_theme');
      if (saved === 'dark' || saved === 'pastel' || saved === 'light') {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'pastel');
    root.classList.add(theme);
    try {
      localStorage.setItem('cidadania_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'pastel';
      return 'light';
    });
  };

  return { theme, setTheme, toggleTheme };
}
