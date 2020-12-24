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
  const {  end } = useQuiz();


  if(end) {
    router.push("/results")
  }

  return (
    <Shell>
      <Center flexDirection="column" h="100vh">
        <Stack spacing={8} textAlign="center" mb={8}>
          <Heading fontSize="6xl" color="royal">Are you balding?</Heading>
          <Text fontSize="2xl">Take this short interactive quiz to find out if you're losing all your hair!</Text>
        </Stack>
        <NextLink href="/quiz">
          <Button color="cream" bg="cherry">Start</Button>
        </NextLink>
      </Center>
    </Shell>
  );
}
