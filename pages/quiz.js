import React, { useState } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import Shell from "@/components/Shell";
import ResultsLoader from "@/components/ResultsLoader";
import CheckButton from "@/components/CheckButton";
import { useRouter } from "next/router";

import { useQuiz } from "@/lib/quiz";
import questions from "@/lib/data";

export default function quiz() {
  const router = useRouter();
  const { handleClick, end, score, currentQuestion, totalQuestions } = useQuiz();

  if (end) {
    setTimeout(function () {
      router.push("/results");  
    }, 3000);
    
    return <ResultsLoader />

  }

  return (
    <Shell>
      <Center flexDirection="column" flex="1">
        <Stack mb={8} spacing={4} textAlign="center">
          <Heading fontSize="6xl" color="cherry" w="700px">
            {questions[currentQuestion].question}
          </Heading>
          <Text fontSize="xl">{questions[currentQuestion].description}</Text>
        </Stack>
        <SimpleGrid spacing={3} columns={2} rows={2}>
          {questions[currentQuestion].answers.map((x) => {
            return (
              <SelectButton key={x} onClick={() => handleClick(x.score)}>
                {x.answer}
              </SelectButton>
            );
          })}
        </SimpleGrid>
      </Center>
      {score}
    </Shell>
  );
}




const SelectButton = ({ children, ...rest }) => {
  return (
    <Center bg="cream" border="2px solid" borderColor="cherry" w="md" py={8} fontSize="3xl" sx={{ transition: "350ms all" }} _hover={{ transform: "translateY(-4px)", bg: "burgundy", color: "cream", borderColor: "burgundy" }}{...rest}>
      {children}
    </Center>
  )
}