import { createContext, useContext, type ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';

type ThemeContextType = ReturnType<typeof useTheme>;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  
  return (
    <ThemeContext.Provider value={theme}>
      {/* Prevent hydration mismatch by hiding children until mounted */}
      <div style={{ visibility: theme.mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
