import React, { useEffect, useRef } from "react";

import Shell from "@/components/Shell"

import { Center, Image, Stack, Flex, IconButton, Box, Spinner, Button, Heading, Text, HStack, SimpleGrid } from "@chakra-ui/react"
import { ArrowDown } from "phosphor-react";
import { useQuiz } from "@/lib/quiz";

import NextLink from "next/link";

import { useRouter } from "next/router";

import ResultsContainer from "@/components/results/ResultContainer";
import { StatsCard, InformationCard } from "@/components/results/ResultCards";
import ProductCard from "@/components/results/ProductCard";





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
              Prevention is more effective than denial. Start taking
              steps today to save as much of your hair as possible. Keep scrolling to learn how. 
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

    return (
      <ResultsContainer>
        <AnswerHero executeScroll={executeScroll} />
        <Box ref={infoRef} minH="100vh" m="0 auto" py={24} w="full">
          <Stack spacing={12} display="flex" alignItems="center">
            <StatsCard />
            <InformationCard />
            <Box
              backgroundSize="12px 12px"
              backgroundImage="radial-gradient(blue 10%,transparent 0)"
              width="full"
            >
              <SimpleGrid
                columns={[1, 1, 1, 3]}
                spacing={4}
                py={8}
                maxWidth="1200px"
                m="0 auto"
              >
                <ProductCard
                  title="Biotin Gummies"
                  description="More hair...this is the pill for that. It treats male pattern baldness, at the crown and in the middle of the scalp. You’ll see thicker hair and slower hair loss with regular use."
                  img="/media/imgs/gummies.webp"
                />
                <ProductCard
                  title="Finasteride"
                  description="More hair...this is the pill for that. It treats male pattern baldness, at the crown and in the middle of the scalp. You’ll see thicker hair and slower hair loss with regular use."
                  img="/media/imgs/finasteride.webp"
                  rx={true}
                />
                <ProductCard
                  title="Minoxidil"
                  description="This topical solution, used once or twice a day, can put a stop to hair loss and may even help new hair growth. Hair today, hair tomorrow. Plenty of hair for grabbing, twirling and such."
                  img="/media/imgs/minoxidil.webp"
                  rx={true}
                />
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </ResultsContainer>
    );
}

export default results;