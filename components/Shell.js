import { useQuiz } from "@/lib/quiz";
import { Box, Flex, IconButton, Text, Link } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { Share } from "phosphor-react";

import border from ".././styles/border.module.scss";

const MotionBox = motion.custom(Box);

const Footer = () => { 
  return (
    <Flex
      h="5vh"
      justifyContent="space-between"
      alignItems="center"
      fontSize="xs"
      py={10}
      w="full"
    >
      <Text>Disclaimer</Text>
      <Link href="https://twitter.com/typicalmitul" isExternal>
        <Text>Built by Mitul Shah 👋</Text>
      </Link>
    </Flex>
  );
}

const Header = () => { 
  return (
    <Flex
      h="5vh"
      justifyContent="flex-end"
      alignItems="center"
      py={10}
      w="full"
      // border="1px solid black"
    >
      <IconButton
        borderRadius="full"
        bg="ramen"
        color="cream"
        size="sm"
        icon={<Share weight="bold" />}
      />
    </Flex>
  );
}

const Shell = ({ loader, children }) => {

    const { currentQuestion, totalQuestions } = useQuiz();    
    return (
      <MotionBox
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        p={8}
        height="100vh"
      >
        <Flex
          as="main"
          m="0 auto"
          direction="column"
          // maxW="1400px"
          height="100%"
          minHeight="100%"
          border="5px solid"
          borderColor="royal"
          className={loader ? border.gradientBorder : ""}
        >
          <Box
            transition="350ms ease-in-out"
            sx={{
              width: currentQuestion / totalQuestions,
              height: "20px",
              bg: "ramen",
            }}
          />
          <Flex px={8} mt="-20px" height="100%" flexDirection="column">
            <Header />
            {children}
            <Footer />
          </Flex>
        </Flex>
      </MotionBox>
    );
}

export default Shell;