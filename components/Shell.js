import { Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { Share } from "phosphor-react";

const MotionBox = motion.custom(Box);

const Footer = () => { 
  return (
    <Flex
      h="5vh"
      justifyContent="space-between"
      alignItems="center"
      fontSize="xs"
      py={10}
    >
      <Text>Disclaimer</Text>
      <Text>Built by Mitul Shah 👋</Text>
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

const Shell = ({ children }) => {

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
          px={8}
          // maxW="1400px"
          height="100%"
          minHeight="100%"
          border="5px solid"
          borderColor="royal"
        >
          <Header />
          {children}
          <Footer />
        </Flex>
      </MotionBox>
    );
}

export default Shell;