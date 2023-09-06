import { extendTheme } from "@chakra-ui/react";
import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({ weight: "400", subsets: ["latin"] });

const colors = {
  brand: {
    primary: "#2079c7",
    "600": "#2079c7",
  },
};

const fonts = {
  heading: font.style.fontFamily,
  subHeading: font.style.fontFamily,
  body: font.style.fontFamily,
};

const components = {
  Button: {
    defaultProps: {
      variant: "outline",
      borderColor: "#2079c7",
    },
  },
};

export const theme = extendTheme({ colors, fonts });
