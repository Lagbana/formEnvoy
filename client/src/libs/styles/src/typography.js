/* Typography
=============================== */

// font families
const maxFontSizeMultiplier = 1.25; // max size text can be scaled in app

const families = {
  default: "Roboto",
  medium: "Roboto",
  bold: "Poppins",
  black: "Poppins",
};

// platform-specific styles
const paddingTop = 0;

const sizes = {
  xsmall: 14,
  small: 16,
  default: 18,
  large: 20,
  input: 18,
  xlarge: 24,
  heading: 30,
};

// titles
const titleSmall = {
  fontSize: sizes.default,
  // lineHeight: sizes.default * 1.1,
  fontFamily: families.bold,
  paddingTop: sizes.default * paddingTop,
};

const titleMedium = {
  fontSize: sizes.xlarge,
  // lineHeight: sizes.xlarge * 1.1,
  fontFamily: families.bold,
  paddingTop: sizes.xlarge * paddingTop,
};

const titleLarge = {
  fontSize: sizes.heading,
  // lineHeight: sizes.heading * 1.1,
  paddingTop: sizes.heading * paddingTop,
  fontFamily: families.bold,
  //maxWidth: '50%',
};

// drawer nav
const drawerItem = {
  fontSize: sizes.default,
  fontWeight: "normal",
  lineHeight: sizes.default * 1.1,
  fontFamily: families.default,
  paddingTop: sizes.default * paddingTop,
};

// body

const bodyXsmall = {
  fontSize: sizes.xsmall,
  // lineHeight: sizes.xsmall * 1.4,
  fontFamily: families.default,
  fontWeight: "normal",
  paddingTop: sizes.xsmall * paddingTop,
};

const bodySmall = {
  fontSize: sizes.small,
  // lineHeight: sizes.small * 1.4,
  fontFamily: families.default,
  fontWeight: "normal",
  paddingTop: sizes.small * paddingTop,
};

const bodyDefault = {
  fontSize: sizes.default,
  // lineHeight: sizes.default * 1.4,
  fontFamily: families.default,
  fontWeight: "normal",
  paddingTop: sizes.default * paddingTop,
};

const bodyLarge = {
  fontSize: sizes.large,
  // lineHeight: sizes.large * 1.4,
  fontFamily: families.default,
  fontWeight: "normal",
  paddingTop: sizes.large * paddingTop,
};

const bodyXlarge = {
  fontSize: sizes.xlarge,
  // lineHeight: sizes.xlarge * 1.4,
  fontFamily: families.default,
  fontWeight: "normal",
  paddingTop: sizes.xlarge * paddingTop,
};

// labels

const labelXsmall = {
  fontFamily: families.bold,
  lineHeight: sizes.xsmall * 1.1,
  fontSize: sizes.xsmall,
  paddingTop: sizes.xsmall * paddingTop,
};

const labelSmall = {
  fontFamily: families.bold,
  lineHeight: sizes.small * 1.1,
  fontSize: sizes.small,
  paddingTop: sizes.small * paddingTop,
};

const labelDefault = {
  fontSize: sizes.default,
  lineHeight: sizes.default * 1.1,
  fontFamily: families.bold,
  paddingTop: sizes.default * paddingTop,
};

const labelLarge = {
  fontSize: sizes.large,
  lineHeight: sizes.large * 1.1,
  fontFamily: families.bold,
  paddingTop: sizes.large * paddingTop,
};

export const Typography = {
  labelLarge,
  labelDefault,
  labelSmall,
  labelXsmall,
  bodyXlarge,
  bodyLarge,
  bodyDefault,
  bodySmall,
  bodyXsmall,
  drawerItem,
  titleLarge,
  titleMedium,
  titleSmall,
  sizes,
  paddingTop,
  families,
  maxFontSizeMultiplier,
};
