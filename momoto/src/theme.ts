import { CSSVariablesResolver, createTheme } from "@mantine/core";
import "@fontsource/jost";

export const theme = createTheme({
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
    momotoMargin: "300px",
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--momoto-orange': theme.other.momotoOrange,
    '--momoto-red': theme.other.momotoRed,
    '--momoto-yellow': theme.other.momotoYellow,
    '--momoto-blue': theme.other.momotoBlue,
    '--momoto-green': theme.other.momotoGreen,
    '--momoto-pink': theme.other.momotoPink,
    '--momoto-beige': theme.other.momotoBeige,
    '--momoto-margin': theme.other.momotoMargin,
  },
  light: {},
  dark: {},
})
