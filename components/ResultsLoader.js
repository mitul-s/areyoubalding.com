import { Box, Center, Spinner, Heading } from "@chakra-ui/react";
import Shell from "@/components/Shell";

const ResultsLoader = () => {
  return (
    <Shell loader={true}>
      <Center flex="1" w="full" textAlign="center">
        <Box>
          <Spinner mb={3} size="xl" />
          <Heading>Counting your hairs...</Heading>
        </Box>
      </Center>
    </Shell>
  );
};

export default ResultsLoader;
