import { createContext, useState } from "react";

const DarkModeContext = createContext();

export interface DarkModeProviderProps {
    darkMode: boolean;
    children?: React.ReactNode;
}

function DarkModeProvider(props: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (dark: boolean) => {
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
