import React, { useState } from "react"
import { Box, Stack, HStack, Heading, Text, List, ListItem, Button, Center } from "@chakra-ui/react"
import Shell from "@/components/Shell"
import CheckButton from "@/components/CheckButton";
import { useRouter } from "next/router";

import NextLink from "next/link"
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
        <Heading>
          Start quiz
        </Heading>
        <NextLink href="/quiz">
          <Button>Start</Button>
        </NextLink>
        </Center>
      {score}
    </Shell>
  );
}
