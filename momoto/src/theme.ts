import { CSSVariablesResolver, createTheme } from "@mantine/core";
import "@fontsource/jost/100.css";
import "@fontsource/jost/200.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/jost/800.css";
import "@fontsource/jost/900.css";

export const theme = createTheme({
  breakpoints: {
    xs: '480px',
  },
  fontFamily: "Jost",
  headings: {
    fontWeight: "600",
    sizes: {
      h1: { fontSize: "4rem" },
      h2: { fontSize: "2.5rem" },
      h3: { fontSize: "2.25rem" },
      h4: { fontSize: "1.5rem" },
      h5: { fontSize: "1.25rem" },
      h6: { fontSize: "1rem" },
    },
  },
  other: {
    momotoOrange: "#F25B3A",
    momotoRed: "#A4222C",
    momotoYellow: "#F79328",
    momotoBlue: "#4D7DC8",
    momotoGreen: "#5A8C5A",
    momotoPink: "#EA9D8F",
    momotoBeige: "#f4eebd",
    momotoGray: "#7E7E7E",
    momotoMargin: "15vw",

    /************************* momoto text styles  *************************/
    body: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    bodyMedium: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    small: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    smallMedium: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: "0.75px",
    },
    smaller: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    tiny: {
      fontSize: "0.625rem",
      fontWeight: 400,
    },
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    /************************* momoto colors  *************************/
    "--momoto-orange": theme.other.momotoOrange,
    "--momoto-red": theme.other.momotoRed,
    "--momoto-yellow": theme.other.momotoYellow,
    "--momoto-blue": theme.other.momotoBlue,
    "--momoto-green": theme.other.momotoGreen,
    "--momoto-pink": theme.other.momotoPink,
    "--momoto-beige": theme.other.momotoBeige,
    "--momoto-gray": theme.other.momotoGray,
    "--momoto-margin": theme.other.momotoMargin,

    /************************* momoto text styles  *************************/
    "--momoto-body-font-size": theme.other.body.fontSize,
    "--momoto-body-font-weight": theme.other.body.fontWeight,
    "--momoto-body-medium-font-size": theme.other.bodyMedium.fontSize,
    "--momoto-body-medium-font-weight": theme.other.bodyMedium.fontWeight,
    "--momoto-small-font-size": theme.other.small.fontSize,
    "--momoto-small-font-weight": theme.other.small.fontWeight,
    "--momoto-overline-font-size": theme.other.overline.fontSize,
    "--momoto-overline-font-weight": theme.other.overline.fontWeight,
    "--momoto-overline-letter-spacing": theme.other.overline.letterSpacing,
    "--momoto-small-medium-font-size": theme.other.smallMedium.fontSize,
    "--momoto-small-medium-font-weight": theme.other.smallMedium.fontWeight,
    "--momoto-smaller-font-size": theme.other.smaller.fontSize,
    "--momoto-smaller-font-weight": theme.other.smaller.fontWeight,
    "--momoto-tiny-font-size": theme.other.tiny.fontSize,
    "--momoto-tiny-font-weight": theme.other.tiny.fontWeight,
  },
  light: {},
  dark: {},
});
