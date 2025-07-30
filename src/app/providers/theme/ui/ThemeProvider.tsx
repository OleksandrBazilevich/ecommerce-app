import { useEffect, useState } from "react";

import { Theme, ThemeContext, type ThemeType } from "@/shared/config";

const defaultTheme =
  (localStorage.getItem("theme") as ThemeType) || Theme.VIOLET;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  useEffect(() => {
    document.body.className = `${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
