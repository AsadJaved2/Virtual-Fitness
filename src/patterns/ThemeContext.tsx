import React, { createContext, useContext, useState, useEffect } from 'react';

// Singleton Pattern - Theme Manager
class ThemeManager {
  private static instance: ThemeManager;
  private listeners: ((theme: string) => void)[] = [];
  private currentTheme: string = 'light';

  private constructor() {}

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  public getTheme(): string {
    return this.currentTheme;
  }

  public setTheme(theme: string): void {
    this.currentTheme = theme;
    this.notifyListeners();
  }

  // Observer Pattern
  public subscribe(listener: (theme: string) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.currentTheme));
  }
}

const ThemeContext = createContext<ThemeManager>(ThemeManager.getInstance());

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={ThemeManager.getInstance()}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);