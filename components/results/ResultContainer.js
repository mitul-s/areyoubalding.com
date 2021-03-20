import { Box } from "@chakra-ui/react";

import ReturnToStart from "@/components/results/ReturnToStart";

const ResultsContainer = ({ children }) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        m="0 auto"
        h="100%"
        w="100%"
        p={8}
        overflow="hidden"
      >
        {children}
        <ReturnToStart />
      </Box>
    );
}

export default ResultsContainer;