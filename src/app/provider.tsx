"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  xl: "1280px",
  "2xl": "1536px",
};

const options = {
  ...breakpoints,
  styles: {
    global: {
      "input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px black inset !important",
        WebkitTextFillColor: "white !important",
        caretColor: "white !important", // Ensure caret is visible
        transition: "background-color 5000s ease-in-out 0s",
        animation: "none !important",
      },
      "input:-webkit-autofill:hover": {
        WebkitBoxShadow: "0 0 0 1000px black inset !important",
        WebkitTextFillColor: "white !important",
        caretColor: "white !important",
        animation: "none !important",
      },
      "input:-webkit-autofill:focus": {
        WebkitBoxShadow: "0 0 0 1000px black inset !important",
        WebkitTextFillColor: "white !important",
        caretColor: "white !important",
        animation: "none !important",
      },
      "input:-moz-autofill": {
        boxShadow: "0 0 0 1000px black inset !important",
        textFillColor: "white !important",
        caretColor: "white !important",
        animation: "none !important",
      },
    },
  },
};

const theme = extendTheme(options);
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
