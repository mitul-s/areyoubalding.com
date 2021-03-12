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
import SelectButton from "@/components/quiz/SelectButton";
import { useRouter } from "next/router";

import { useQuiz } from "@/lib/quiz";
import questions from "@/lib/data";




export default function quiz() {
  const router = useRouter();
  const { handleClick, end, score, currentQuestion } = useQuiz();

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
          <Heading fontSize="3xl" color="royal">
            {questions[currentQuestion].question}
          </Heading>
          <Text fontSize="xl">{questions[currentQuestion].description}</Text>
        </Stack>
        <SimpleGrid spacing={3} columns={2} rows={2}>
          {questions[currentQuestion].answers.map((i) => {
            return (
              <SelectButton key={i} onClick={() => handleClick(i.score)}>
                {i.answer}
              </SelectButton>
            );
          })}
        </SimpleGrid>
      </Center>
    </Shell>
  );
}
