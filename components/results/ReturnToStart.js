import NextLink from "next/link"
import { Flex, Button } from "@chakra-ui/react"
import { useQuiz } from "@/lib/quiz";


export default function ReturnToStart() {
    const { resetQuiz } = useQuiz();
    return (
      <Flex alignItems="center" justifyContent="center" h="10vh" bg="ramen" rounded="lg">
        <NextLink href="/">
          <Button bg="ramen" color="cream" onClick={() => resetQuiz()}>
            Take the quiz again
          </Button>
        </NextLink>
      </Flex>
    );
}

