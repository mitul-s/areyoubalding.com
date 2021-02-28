import React, { useEffect, useRef } from "react";

import Shell from "@/components/Shell"
import { Center, Image, Stack, Flex, IconButton, Box, Spinner, Button, Heading, Text, HStack, SimpleGrid } from "@chakra-ui/react"
import { ArrowDown } from "phosphor-react";
import { useQuiz } from "@/lib/quiz";

import NextLink from "next/link";

import { useRouter } from "next/router";
import InformationCard from "@/components/results/InformationCard";
import ProductCard from "@/components/results/ProductCard";


const AnswerHero = ({ executeScroll }) => (
  <Center border="5px solid" borderColor="royal">
    <Center
      h="calc(100vh - (4rem + 10px))"
      flexDirection="column"
      w="1000px"
      textAlign="center"
    >
      <Center w="100%" h="100%" mt={"5vh"} flexDirection="column">
        <Heading
          color="royal"
          fontFamily="Inter"
          fontWeight="900"
          fontSize="120px"
          lineHeight="125px"
          mb={12}
        >
          You just might be balding...
        </Heading>
        <Text fontSize="3xl">
          but there’s still hope! You can take the right steps today to save as
          much of your hair as possible. Keep scrolling to learn more.
        </Text>
      </Center>
      <Center h="10vh">
        <IconButton
          onClick={executeScroll}
          bg="ramen"
          color="cream"
          rounded="full"
          size="lg"
          icon={<ArrowDown weight="bold" />}
        />
      </Center>
    </Center>
  </Center>
);



const ResultsContainer = ({ children }) => {
  const { resetQuiz } = useQuiz();
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
      <Flex alignItems="center" justifyContent="center" h="10vh">
        <NextLink href="/">
          <Button bg="ramen" color="cream" onClick={() => resetQuiz()}>
            Return to start
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
};

const results = () => {
    const router = useRouter();
    const { score } = useQuiz();
    const infoRef = useRef(null);
    const executeScroll = () => infoRef.current.scrollIntoView(); 
    
    if(score > 0 && score <= 6) {
        return (
          <ResultsContainer>
            <AnswerHero executeScroll={executeScroll} />
            <Box ref={infoRef}>
              hello
            </Box>
          </ResultsContainer>
        );
    }

    if(score >= 6 && score <= 12) {
        return (
            <ResultsContainer>
                <Heading>You just might be balding...</Heading>
            </ResultsContainer>
        )
    }

    if (score >= 12 && score < 9000) {
      return (
        <ResultsContainer>
          You're balding, start taking care of yourself now.
        </ResultsContainer>
      );
    }

    if (score > 9000) {
      return (
        <ResultsContainer>
          You're already bald!
        </ResultsContainer>
      );
    }

    

    // useEffect(() => {
    //     if (score === 0) {
    //       router.push("/");
    //     }
    // }, [score])
    
    // return <ResultsContainer><Spinner/></ResultsContainer>


    

    return (
      <ResultsContainer>
        <AnswerHero executeScroll={executeScroll} />
        <Box ref={infoRef} minH="100vh" m="0 auto" py={24}>
          <Stack spacing={12}>
            <Box
              border="5px solid"
              borderColor="royal"
              borderRadius="5px"
              px={8}
              py={12}
            >
              <Heading mb={3}>What to do if you're balding?</Heading>
              <Text fontSize="xl">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor.
              </Text>
            </Box>
            <InformationCard />
            <Box
              backgroundSize="12px 12px"
              backgroundImage="radial-gradient(blue 10%,transparent 0)"
            >
              <SimpleGrid
                columns={2}
                spacing={4}
                p={8}
                maxWidth="1200px"
                m="0 auto"
              >
                <ProductCard title="Finastride" />
                <ProductCard title="Minodoxil" />
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </ResultsContainer>
    );
}

export default results;