import { Box, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion";

const MotionBox = motion.custom(Box);

const Footer = () => { 
  return (
    <Box h="10vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      HELLO
    </Box>
  )
}

const Shell = ({ children }) => {
    return (
      <MotionBox exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Flex
          as="main"
          m="0 auto"
          direction="column"
          px={8}
          maxW="1240px"
          height="100%"
          minHeight="100%"
          height="100vh"
        >
          {children}
        <Footer />
        </Flex>
      </MotionBox>
    );
}

export default Shell;