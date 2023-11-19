'use client';
import { createContext, useState } from "react";

const DarkModeContext = createContext(
  {
    darkMode: false,
    toggleDarkMode: () => {},
  } 
);

export interface DarkModeProviderProps {
  children?: React.ReactNode;
}

function DarkModeProvider(props: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
