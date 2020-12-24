import React, { useState } from "react"
import { Box, Stack, HStack, Heading, Text, List, ListItem, Button, Center } from "@chakra-ui/react"
import Shell from "@/components/Shell"
import CheckButton from "@/components/CheckButton";
import { useRouter } from "next/router";

import { useQuiz } from "@/lib/quiz"
import questions from "@/lib/data";

export default function Home() {

  const router = useRouter();
  const { handleClick, end, score, currentQuestion } = useQuiz();


  if(end) {
    router.push("/results")
  }

  return (
    <Shell>
        <Center flexDirection="column" h="80vh">
          <Heading>{questions[currentQuestion].question}</Heading>
          <HStack space={3}>
            {questions[currentQuestion].answers.map((x) => {
              return (
                <Button colorScheme="cyan" onClick={() => handleClick(x.score)}>
                  {x.answer}
                </Button>
              );
            })}
          </HStack>
        </Center>
      {score}
      {score > 10 ? <h1>Balding</h1> : <h2>Not balding</h2>}
    </Shell>
  );
}
