import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#0D1013",
        color: "whiteAlpha.900",
      },
    },
  },
  colors: {
    brand: {
      900: "#fff",
    },
  },
});

export default theme;