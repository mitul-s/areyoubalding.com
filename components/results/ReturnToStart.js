import NextLink from "next/link"
import { Box, Grid, Heading, GridItem, Flex, Text, Button, Center } from "@chakra-ui/react"
import { useQuiz } from "@/lib/quiz";


export default function ReturnToStart() {
    const { resetQuiz } = useQuiz();
    return (
      <Box display="flex" alignItems="center" justifyContent="center" mb={12}>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={2}
          w="1200px"
        >
          <GridItem colSpan={1} bg="ramen" color="cream" rounded="lg">
            <Center p={8}>
              <Heading>Share</Heading>
            </Center>
          </GridItem>
          <GridItem
            colSpan={2}
            border="3px solid"
            borderColor="royal"
            rounded="lg"
          >
            <Center p={8} color="royal">
              <Heading>Share</Heading>
            </Center>
          </GridItem>
          <GridItem
            colSpan={2}
            border="3px solid"
            borderColor="royal"
            rounded="lg"
            color="royal"
          >
            <Center p={8}>
              <Heading>Quiz</Heading>
            </Center>
          </GridItem>
          <GridItem colSpan={1} bg="ramen" color="cream" rounded="lg">
            <Center p={8}>
              <Heading>Glossary</Heading>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    );
}



// onClick={() => resetQuiz()}