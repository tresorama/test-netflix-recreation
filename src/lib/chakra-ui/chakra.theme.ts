import type { ThemeOverride, ThemeConfig } from "@chakra-ui/react";
import { extendTheme, baseTheme as chakraTheme } from "@chakra-ui/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

// Tailwind Design System Theme
const { theme: tailwindTheme } = resolveConfig(tailwindConfig);

// TIP:
// When theme grows is size, a single theme.ts file is hard to manage.
// See here a battle tested structure to manage a big theme:
// https://chakra-ui.com/docs/styled-system/customize-theme#scaling-out-your-project

//
// 1. Declare "parts" of the custom theme to include custom colors, fonts, etc
//

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const colors: ThemeOverride['colors'] = {
  ...chakraTheme.colors,
  //...tailwindTheme?.colors,
  gray: (tailwindTheme?.colors as any).zinc,
};

const semanticTokens: ThemeOverride['semanticTokens'] = {
  colors: {
    textPrimary: { _light: "black", _dark: "white" },
    textSecondary: { _light: "gray.600", _dark: "gray.200" },
    textTertiary: { _light: "gray.500", _dark: "gray.500" },
    textQuaternary: { _light: "gray.400", _dark: "gray.600" },
    bgPrimary: { _light: "white", _dark: "black" },
    bgSecondary: { _light: "gray.100", _dark: "gray.900" },
    bgTertiary: { _light: "gray.200", _dark: "gray.800" },
    bgQuaternary: { _light: "gray.300", _dark: "gray.700" },
    // photographer view - hero
    heroBg: "bgPrimary",
    heroText: "textPrimary",
    heroMainTitle: { _light: "bgPrimary", _dark: "white" },
  },
};

const textStyles: ThemeOverride['textStyles'] = {
  // /photographer page
  logo: {
    fontFamily: "Futura",
    fontSize: "md", // 16px in figma
    fontWeight: "bold",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  navItem: {
    fontFamily: "Futura",
    fontSize: "sm", // 14px in figma
    fontWeight: "medium",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  sectionTitle: {
    fontFamily: "Futura",
    fontSize: "3xl", // 32px in figma
    fontWeight: "bold",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    lineHeight: "1.1",
  },
  sectionBody: {
    fontFamily: "Futura",
    fontSize: "md", // 18px in figma
    fontWeight: "normal",
    letterSpacing: "0.1em",
  },
};

const styles: ThemeOverride['styles'] = {
  global: {
    body: {
      bg: "bgPrimary",
      color: "textPrimary",
    },
  }
};

//
// 2. Compose the "parts" of the custom theme
//
const themeOverrides: ThemeOverride = {
  config,
  colors,
  semanticTokens,
  textStyles,
  styles,
};

// 3. Extend "baseTheme" with "customTheme" overrides and export it.
//
// Export theme both as "named export" and "default export"
// This double export ensure that "@chakra-ui/cli" can import the theme
//
// "The theme entrypoint file should export the theme object either
// as default export or as named theme export.""
// Read more on How to generate TS typings for autocomplete:
// https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings
export const theme = extendTheme(themeOverrides);
export default theme;
