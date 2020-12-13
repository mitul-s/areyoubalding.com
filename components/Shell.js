import { Box, Flex } from "@chakra-ui/react"

const Shell = ({ children }) => {
    return (
      <Box>
        <Flex
            as="main"
            m="0 auto"
            direction="column"
            px={8}
            maxW="720px"
        >
            {children}
        </Flex>
      </Box>
    );
}

export default Shell;