import { createContext } from "react";

export const Theme = {
  VIOLET: "violet-theme",
  BLUE: "blue-theme",
} as const;

export const LOCAL_STORAGE_THEME_KEY = "theme";

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
