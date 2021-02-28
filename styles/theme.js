import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "cream",
        color: "black",
      },
    },
  },
  fonts: {
    heading: `'HK Grotesk', sans-serif`,
    body: `"Rubik", sans-serif`,
  },
  colors: {
    black: "gray",
    cream: "#FAFAED",
    cherry: "#FF4E42",
    burgundy: "#832626",
    // royal: "#1820EF",
    // royal: "#2127D9",
    royal: "#1038d6",
    ramen: "#FFC024",
    lettuce: "#1A8738",
  },
});

export default theme;