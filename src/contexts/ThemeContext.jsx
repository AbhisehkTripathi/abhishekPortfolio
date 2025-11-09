import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Check if current time is between 7PM (19:00) and 7AM (07:00)
const isNightTime = () => {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 7;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Auto-detect based on time (7PM-7AM = dark mode)
    return isNightTime() ? 'dark' : 'light';
  });

  const [autoMode, setAutoMode] = useState(() => {
    return localStorage.getItem('autoMode') !== 'false';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (autoMode) {
      // Auto mode: use time-based detection
      const currentTheme = isNightTime() ? 'dark' : 'light';
      root.classList.add(currentTheme);
      setTheme(currentTheme);
    } else {
      // Manual mode: use saved preference
      root.classList.add(theme);
    }
  }, [theme, autoMode]);

  // Update theme every minute when in auto mode
  useEffect(() => {
    if (!autoMode) return;

    const interval = setInterval(() => {
      const currentTheme = isNightTime() ? 'dark' : 'light';
      setTheme(currentTheme);
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [autoMode]);

  const toggleTheme = () => {
    setAutoMode(false); // Disable auto mode when manually toggling
    localStorage.setItem('autoMode', 'false');
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, autoMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

