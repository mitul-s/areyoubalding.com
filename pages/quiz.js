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
} from "@chakra-ui/react";
import Shell from "@/components/Shell";
import CheckButton from "@/components/CheckButton";
import { useRouter } from "next/router";

import { useQuiz } from "@/lib/quiz";
import questions from "@/lib/data";

export default function quiz() {
  const router = useRouter();
  const { handleClick, end, score, currentQuestion } = useQuiz();

  if (end) {
    router.push("/results");
  }

  return (
    <Shell>
      <Center flexDirection="column" flex="1">
        <Heading>{questions[currentQuestion].question}</Heading>
        <Text>{questions[currentQuestion].description}</Text>
        <HStack space={3}>
          {questions[currentQuestion].answers.map((x) => {
            return (
              <Button
                bg="cherry"
                color="cream"
                borderRadius="3xl"
                onClick={() => handleClick(x.score)}
              >
                {x.answer}
              </Button>
            );
          })}
        </HStack>
      </Center>
      {score}
    </Shell>
  );
}