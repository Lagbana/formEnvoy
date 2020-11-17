/* Web colors
=============================== */

// brand palette
const baseColors = {
  defaultBlue: "#3183C8", // Logo, buttons, some Containers
  defaultGreen: "#39C172", // Not for backgrounds or text. Icons, success, or accents only
  defaultYellow: "#F4CB64",
  defaultRed: "#DC3232", // Warning
};

// intent and notifications palette
const intentPalette = {
  info: baseColors.defaultBlue,
  success: baseColors.defaultGreen,
  warning: baseColors.defaultYellow,
  error: baseColors.defaultRed,
};

// button palette
const buttonPalette = {
  buttonBlue: baseColors.defaultBlue,
  buttonGreen: baseColors.defaultGreen,
  buttonYellow: baseColors.defaultYellow,
  buttonRed: baseColors.defaultRed,
};

// grey palette
const greyPalette = {
  GreyMiscDark: "#21252B",
  GreyTitle: "#343A40",
  GreyText: "#617691",
  GreyOutline: "#D5DDE9",
  GreyContainer: "EDF1F5",
  GreyBackground: "#F5F7FA",
  GreyMiscLight: "#FCFCFC",
};

const yellowPalette = {
  YellowTitle: "#5B4711",
  YellowText: "#8B6D20",
  YellowIcon: baseColors.defaultYellow,
  YellowOutline: "#F9E29F",
  YellowBackground: "#FFFCF4",
};

const redPalette = {
  RedTitle: "#611918",
  RedText: "#891B1B",
  RedMiscDark: "#B82020",
  RedIcon: baseColors.defaultRed,
  RedMiscLight: "#e46564",
  RedOutline: "#F5AAAA",
  RedBackground: "#FCE8E8",
};

const bluePalette = {
  BlueTitle: "#13273A",
  BlueText: "#1A4971",
  BlueMiscDark: "#2269A1",
  BlueIcon: baseColors.defaultBlue,
  BlueMiscLight: "#649FD6",
  BlueOutline: "#A9D5F5",
  BlueBackground: "#F0F8FF",
};

const greenPalette = {
  GreenTitle: "#155339",
  GreenText: "#1A7641",
  GreenMiscDark: "#249D58",
  GreenIcon: baseColors.defaultGreen,
  GreenMiscLight: "#74D99F",
  GreenOutline: "#A8EEC1",
  GreenBackground: "#E3FCEC",
};


export const Colors = {
  ...baseColors,
  ...greyPalette,
  ...buttonPalette,
  ...intentPalette,
  ...yellowPalette,
  ...bluePalette,
  ...greenPalette,
  ...redPalette,
};
