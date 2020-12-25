import { Box, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion";

const MotionBox = motion.custom(Box);

const Shell = ({ children }) => {
    return (
      <MotionBox exit={{ opacity: 0 }} initial="initial" animate="animate">
          <Flex as="main" m="0 auto" direction="column" px={8} maxW="720px">
            {children}
          </Flex>
      </MotionBox>
    );
}

export default Shell;