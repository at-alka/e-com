const colors = {
  primary: "#00806B",
  primaryLight: "#82D9CB",
  primaryDark: "#00A68B",
  secondary: "#4BA8F8",
  secondaryLight: "#A7DCFB",
  secondarydark: "#3F91DA",
  link: "#454ADE",
  white: "#ffffff",
  secondarySlate: {
    500: "#234F8F",
    100: "#C4D7F4",
  },
  darkGrey: {
    200: "#1B1B1B",
    100: "#000000",
    80: "#333333",
    60: "#666666",
    40: "#999999",
  },
  lightGrey: {
    "01": "#FCFCFC",
    "05": "#F2F2F2",
    10: "#E5E5E5",
    20: "#CCCCCC",
    30: "#464646",
  },
  error: {
    800: "#371714",
    600: "#D92D20",
    500: "#F04438",
    400: "#F97066",
    300: "#FDA29B",
    250: "#F2CBC9",
    200: "#FBE8E4",
  },
  alert: {
    700: "#705114",
    650: "#695922",
    600: "#DC6803",
    500: "#F79009",
    400: "#FDB022",
    300: "#FEC84B",
    100: "#FDEED1",
    50: "#F5EFDA",
  },
  success: {
    650: "#278351",
    600: "#039855",
    500: "#12B76A",
    400: "#32D583",
    300: "#6CE9A6",
    250: "#3C6D24",
    100: "#E1F6CB",
  },
  info: {
    600: "#132E2F",
    200: "#DAF4F5",
  },
  background: "#f5f5f5",
};

const breakpoints = ["30em", "36em", "48em", "64em", "80em"];

const fontSizes = ["12px", "14px", "16px", "18px", "22px"];

const fontWeights = [200, 400, 500, 600];

// reference - https://getbootstrap.com/docs/5.1/layout/breakpoints/

/**
 * //* Standard brakpoints 320px — 480px: Mobile devices
 * //* 481px — 768px: iPads, Tablets
 * //* 769px — 1024px: Small screens, laptops
 * //* 1025px — 1200px: Desktops, large screens
 * //* 1201px and more —  Extra large screens, TV
 */
breakpoints.mobile = breakpoints[0]; // 480px
breakpoints.mobileL = breakpoints[1]; // 576px
breakpoints.tablet = breakpoints[2]; // 768px
breakpoints.desktop = breakpoints[3]; // 1024px
breakpoints.desktopL = breakpoints[4]; // 1280

fontSizes.xs = fontSizes[0]; // 12px
fontSizes.sm = fontSizes[1]; // 14px
fontSizes.md = fontSizes[2]; // 16px
fontSizes.lg = fontSizes[3]; // 18px
fontSizes.xl = fontSizes[4]; // 22px

fontWeights.light = fontWeights[0]; // 200
fontWeights.normal = fontWeights[1]; // 400
fontWeights.semibold = fontWeights[2]; // 500
fontWeights.bold = fontWeights[3]; // 600

export default {
  colors,
  breakpoints,
  fontSizes,
  fontWeights,
};
