import React, { useEffect } from "react";

import Shell from "@/components/Shell"
import { Center, Spinner, Button } from "@chakra-ui/react"
import { useQuiz } from "@/lib/quiz";

import NextLink from "next/link";

import { useRouter } from "next/router";


const ResultsContainer = ({ children }) => {
  const { resetQuiz } = useQuiz();
  return (<Shell>
    <Center flex="1">
      {children}
      <NextLink href="/">
        <Button onClick={() => resetQuiz()}>Return to start</Button>
      </NextLink>
    </Center>
  </Shell>)
};

const results = () => {
    const router = useRouter();
    const { score } = useQuiz();
    
    if(score > 0 && score <= 6) {
        return (
            <ResultsContainer>
                You might not be balding..
            </ResultsContainer>
        )
    }

    if(score >= 6 && score <= 12) {
        return (
            <ResultsContainer>
                You'll probably start balding soon..
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

    useEffect(() => {
        if (score === 0) {
          router.push("/");
        }
    }, [score])
    
    return <ResultsContainer><Spinner/></ResultsContainer>
}

export default results;