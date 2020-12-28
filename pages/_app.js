import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { AnimatePresence } from "framer-motion"
import { QuizProvider } from "@/lib/quiz";
import theme from "@/styles/theme.js";
import Head from "next/head"

function App({ Component, pageProps }) {

  const GlobalStyle = ({ children }) => {
    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Global
          styles={css`
            html {
              scroll-behavior: smooth;
            }
            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          `}
        />
        {children}
      </>
    );
  };


  return (
    <ChakraProvider theme={theme} exitBeforeEnter>
      <QuizProvider>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </QuizProvider>
    </ChakraProvider>
  );
}

export default App
