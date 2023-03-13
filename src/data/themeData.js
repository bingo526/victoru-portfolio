/* eslint-disable */
import {
  greenThemeLight,
  greenThemeDark,
  bwThemeLight,
  bwThemeDark,
  blueThemeLight,
  blueThemeDark,
  purpleThemeLight,
  purpleThemeDark,
  redThemeDark,
  redThemeLight,
} from "../theme/theme";

export const themeData = {
  theme: redThemeDark,
};

export const themes = [
  {
    name: "Purple",
    theme: purpleThemeLight,
    color1: "#823ae0",
    color2: "#fff",
  },
  {
    name: "Purple Dark",
    theme: purpleThemeDark,
    color1: "#823ae0",
    color2: "#000",
  },
  {
    name: "Blue",
    theme: blueThemeLight,
    color1: "#545fc4",
    color2: "#fff",
  },
  {
    name: "Blue Dark",
    theme: blueThemeDark,
    color1: "#545fc4",
    color2: "#000",
  },
  {
    name: "Green",
    theme: greenThemeLight,
    color1: "#3fc337",
    color2: "#fff",
  },
  {
    name: "Green Dark",
    theme: greenThemeDark,
    color1: "#3fc337",
    color2: "#000",
  },
  {
    name: "Black & White",
    theme: bwThemeLight,
    color1: "#000",
    color2: "#fff",
  },
  {
    name: "Black & White Dark",
    theme: bwThemeDark,
    color1: "#fff",
    color2: "#000",
  },
  {
    name: "Red",
    theme: redThemeLight,
    color1: "#ff0000",
    color2: "#fff",
  },
  {
    name: "Red Dark",
    theme: redThemeDark,
    color1: "#ff0000",
    color2: "#000",
  },
];

// Choose theme from above
