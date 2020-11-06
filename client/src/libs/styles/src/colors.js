/* App colors
=============================== */

// colors
const colors = {
  blue: "#3485D7",
  blueLight: "#94DFE9",
  blueDark: "#3A4A7A",
  blueDarker: "#17345F",
  green: "#5AD19E",
  lime: "#b9cb57",
  purple: "#4749A0",
  purpleLight: "#CACADA",
  red: "#FF5441",
  grayDark: "#3E3F4B",
  gray: "#808898",
  grayLight: "#F8F8FA",
  white: "#FFFFFF",
  yellow: "#ffc70b",
  orange: "#ffa502",
  peach: "#FFA883",
};

// aliases
const aliases = {
  success: colors.green,
  warning: colors.red,
  error: colors.red,
  info: colors.blue,
};

// brand palette
const defaultPalette = {
  primary: colors.green,
  secondary: colors.blue,
  text: colors.grayDark,
  overlay: colors.purple + "dd",
};



export const Colors = {
  ...colors,
  ...aliases,
  ...defaultPalette
};
