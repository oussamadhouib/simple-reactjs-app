export type ScreensProps = { min?: string; max?: string };

export interface DefaultTheme {
  screens: {
    xs: ScreensProps;
    sm: ScreensProps;
    md: ScreensProps;
    lg: ScreensProps;
    xl: ScreensProps;
  };
  colors: {
    primary: { main: string; contrast: string };
    secondary: { main: string; contrast: string };
    accent: { main: string; contrast: string };
    success: { main: string; contrast: string };
    error: { main: string; contrast: string };
    warning: { main: string; contrast: string };
    background: { main: string; contrast: string };
    separator: string;
  };
  text: {
    primary: string;
    secondary: string;
    accent: string;
  };
  translucency: string;
  mode: "dark" | "light";
}


// translucency cf

export const lightThemeColors: DefaultTheme = {
  screens: {
    xs: { min: "320px", max: "480px" },
    sm: { min: "481px", max: "767px" },
    md: { min: "768px", max: "1024px" },
    lg: { min: "1025px", max: "1280px" },
    xl: { min: "1281px" },
  },
  colors: {
    primary: { main: "#262629", contrast: "#505054" },
    secondary: { main: "#e9e9ea", contrast: "#505054" },
    accent: { main: "#ffffff", contrast: "#dadada" },
    success: { main: "#06c700", contrast: "#ffffff" },
    error: { main: "#ff6e6e", contrast: "#ffffff" },
    warning: { main: "#ff9800", contrast: "#ffffff" },
    separator: "#d5d5d5",
    background: { main: "#F5F5F7", contrast: "#fafafa" },
  },
  text: {
    primary: "#505054",
    secondary: "#8D8D8D",
    accent: "#505054",
  },
  translucency:
    "backdrop-filter: saturate(180%) blur(55px); background-color: #F5F5F7cf;",
  mode: "light",
};
